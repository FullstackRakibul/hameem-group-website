// Point-cloud target sets for the NexusCanvas morph.
// Every set has `count` points; index i in each set is the same particle,
// so the shader can interpolate between them (one shared BufferGeometry).

const TAU = Math.PI * 2

// deterministic PRNG so every load renders the same cloud
function mulberry32(seed) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// T-shirt silhouette (front view), clockwise from the left neck point.
const NECK_L = [-0.34, 1.0]
const NECK_R = [0.34, 1.0]
const SHIRT_BODY = [
  NECK_R, [0.95, 0.86], [1.5, 0.34], [1.18, 0.06], [0.76, 0.38],
  [0.76, -1.12], [-0.76, -1.12], [-0.76, 0.38], [-1.18, 0.06], [-1.5, 0.34], [-0.95, 0.86], NECK_L,
]
function neckArc(steps = 12, depth = 0.2, lower = 0) {
  const pts = []
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const x = NECK_L[0] + (NECK_R[0] - NECK_L[0]) * t
    pts.push([x, 1.0 - lower - Math.sin(Math.PI * t) * depth])
  }
  return pts
}
const OUTLINE = [...neckArc(), ...SHIRT_BODY]

// Seams (sewing paths) drawn inside the silhouette.
const SEAMS = [
  [[0.95, 0.86], [0.76, 0.38]], // right armhole
  [[-0.95, 0.86], [-0.76, 0.38]], // left armhole
  [[-0.74, -0.98], [0.74, -0.98]], // hem stitch
  [[1.38, 0.28], [1.1, 0.04]], // right cuff
  [[-1.38, 0.28], [-1.1, 0.04]], // left cuff
  neckArc(12, 0.2, 0.07), // neck rib
]

/** Sample `n` points evenly along a polyline; returns [x, y, t] with t = 0..1 arc length. */
function samplePolyline(poly, n, closed) {
  const pts = closed ? [...poly, poly[0]] : poly
  const segs = []
  let total = 0
  for (let i = 0; i < pts.length - 1; i++) {
    const len = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1])
    segs.push([pts[i], pts[i + 1], total, len])
    total += len
  }
  const out = []
  for (let k = 0; k < n; k++) {
    const d = (k / n) * total
    const seg = segs.find((s) => d <= s[2] + s[3]) || segs[segs.length - 1]
    const f = seg[3] ? (d - seg[2]) / seg[3] : 0
    out.push([seg[0][0] + (seg[1][0] - seg[0][0]) * f, seg[0][1] + (seg[1][1] - seg[0][1]) * f, d / total])
  }
  return out
}

function sampleSeams(n) {
  const lengths = SEAMS.map((s) => s.reduce((acc, p, i) => (i ? acc + Math.hypot(p[0] - s[i - 1][0], p[1] - s[i - 1][1]) : 0), 0))
  const total = lengths.reduce((a, b) => a + b, 0)
  const out = []
  let offset = 0
  SEAMS.forEach((seam, i) => {
    const share = i === SEAMS.length - 1 ? n - out.length : Math.round((lengths[i] / total) * n)
    samplePolyline(seam, share, false).forEach(([x, y, t]) => out.push([x, y, (offset + t * lengths[i]) / total]))
    offset += lengths[i]
  })
  return out.slice(0, n)
}

export function buildTargets(count) {
  const rand = mulberry32(1984)
  const gauss = () => (rand() + rand() + rand() - 1.5) / 1.5

  const base = new Float32Array(count * 3) // vortex / Spin cloud
  const weave = new Float32Array(count * 3)
  const design = new Float32Array(count * 3)
  const sew = new Float32Array(count * 3)
  const finish = new Float32Array(count * 3)
  const seed = new Float32Array(count)
  const signal = new Float32Array(count)
  const seam = new Float32Array(count).fill(-1)

  const seamCount = Math.floor(count * 0.42)
  const outline = samplePolyline(OUTLINE, count - seamCount, true)
  const seamPts = sampleSeams(seamCount)

  // weave: warp (vertical) + weft (horizontal) threads, tilted plane
  const WARP = 26
  const WEFT = 18
  const W = 3.4
  const H = 2.3
  const tilt = -0.85
  const ct = Math.cos(tilt)
  const st = Math.sin(tilt)

  // finish: folded stack (flat box), rotated
  const BX = 1.25
  const BY = 0.34
  const BZ = 0.95
  const ry = 0.65
  const rx = 0.42

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    seed[i] = rand()
    signal[i] = rand() < 0.15 ? 1 : 0

    // --- base: thick swirling disc
    const r = 0.55 + Math.pow(rand(), 0.75) * 2.7
    const a = rand() * TAU
    base[i3] = Math.cos(a) * r
    base[i3 + 1] = gauss() * (0.22 + r * 0.09)
    base[i3 + 2] = Math.sin(a) * r

    // --- weave
    let wx
    let wy
    let wz
    if (i % 2 === 0) {
      const col = Math.floor(rand() * WARP)
      wx = -W / 2 + (col / (WARP - 1)) * W
      wy = -H / 2 + rand() * H
      wz = 0.07 * Math.sin((wy / H) * Math.PI * WEFT + col * Math.PI)
    } else {
      const row = Math.floor(rand() * WEFT)
      wy = -H / 2 + (row / (WEFT - 1)) * H
      wx = -W / 2 + rand() * W
      wz = -0.07 * Math.sin((wx / W) * Math.PI * WARP + row * Math.PI)
    }
    weave[i3] = wx
    weave[i3 + 1] = wy * ct - wz * st
    weave[i3 + 2] = wy * st + wz * ct

    // --- design: every point on the silhouette outline (seam points spread along it too)
    const o = outline[i % outline.length]
    design[i3] = o[0] + gauss() * 0.012
    design[i3 + 1] = o[1] + gauss() * 0.012
    design[i3 + 2] = gauss() * 0.02

    // --- sew: outline stays, seam points move onto the seam paths
    if (i >= count - seamCount) {
      const s = seamPts[i - (count - seamCount)]
      sew[i3] = s[0]
      sew[i3 + 1] = s[1]
      sew[i3 + 2] = 0.02
      seam[i] = s[2]
    } else {
      sew[i3] = design[i3]
      sew[i3 + 1] = design[i3 + 1]
      sew[i3 + 2] = design[i3 + 2]
    }

    // --- finish: points on the surface of a folded stack, biased to edges
    const face = Math.floor(rand() * 6)
    let u = rand() * 2 - 1
    let v = rand() * 2 - 1
    if (rand() < 0.5) u = Math.sign(u) * (0.85 + rand() * 0.15)
    const axis = face >> 1
    const sign = face & 1 ? 1 : -1
    let fx = axis === 0 ? sign : u
    let fy = axis === 1 ? sign : axis === 0 ? u : v
    let fz = axis === 2 ? sign : v
    fx *= BX / 2
    fy *= BY / 2
    fz *= BZ / 2
    const x1 = fx * Math.cos(ry) + fz * Math.sin(ry)
    const z1 = -fx * Math.sin(ry) + fz * Math.cos(ry)
    finish[i3] = x1
    finish[i3 + 1] = fy * Math.cos(rx) - z1 * Math.sin(rx)
    finish[i3 + 2] = fy * Math.sin(rx) + z1 * Math.cos(rx)
  }

  return { base, weave, design, sew, finish, seed, signal, seam }
}
