// NexusCanvas runtime: one renderer, one scene, two states ("core" in the hero,
// "process" in the ProcessTracker). Loaded via dynamic import() only.
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  BufferGeometry,
  BufferAttribute,
  ShaderMaterial,
  Points,
  Mesh,
  IcosahedronGeometry,
  AdditiveBlending,
  Color,
} from 'three'
import { buildTargets } from './targets.js'
import { pointsVertex, pointsFragment, coreVertex, coreFragment } from './shaders.js'

const smooth = (a, b, x) => {
  const t = Math.min(Math.max((x - a) / (b - a), 0), 1)
  return t * t * (3 - 2 * t)
}

export function createNexusScene(canvas, { frame, palette, mobile }) {
  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: !mobile, powerPreference: 'high-performance' })
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
  renderer.setPixelRatio(pixelRatio)
  renderer.setClearColor(0x000000, 0)

  const scene = new Scene()
  const camera = new PerspectiveCamera(55, 1, 0.1, 100)
  camera.position.z = 5

  // --- point cloud (one buffer, five target sets)
  const count = mobile ? 1500 : 5000
  const t = buildTargets(count)
  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new BufferAttribute(t.base, 3))
  geometry.setAttribute('aWeave', new BufferAttribute(t.weave, 3))
  geometry.setAttribute('aDesign', new BufferAttribute(t.design, 3))
  geometry.setAttribute('aSew', new BufferAttribute(t.sew, 3))
  geometry.setAttribute('aFinish', new BufferAttribute(t.finish, 3))
  geometry.setAttribute('aSeed', new BufferAttribute(t.seed, 1))
  geometry.setAttribute('aSignal', new BufferAttribute(t.signal, 1))
  geometry.setAttribute('aSeam', new BufferAttribute(t.seam, 1))
  geometry.computeBoundingSphere()
  geometry.boundingSphere.radius = 20 // scatter goes far; never frustum-cull

  const pointsMaterial = new ShaderMaterial({
    vertexShader: pointsVertex,
    fragmentShader: pointsFragment,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uAngle: { value: 0 },
      uScatter: { value: 0 },
      uMix: { value: 0 },
      uProgress: { value: 0 },
      uSize: { value: mobile ? 8 : 7 },
      uPixelRatio: { value: pixelRatio },
      uAlpha: { value: 1 },
      uThread: { value: new Color(palette.thread.DEFAULT) },
      uBleach: { value: new Color(palette.bleach.DEFAULT) },
    },
  })
  const points = new Points(geometry, pointsMaterial)
  scene.add(points)

  // --- wireframe AI core
  const coreGeometry = new IcosahedronGeometry(1.2, 3)
  const coreMaterial = new ShaderMaterial({
    vertexShader: coreVertex,
    fragmentShader: coreFragment,
    wireframe: true,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uAlpha: { value: 1 },
      uColor: { value: new Color(palette.bleach.DEFAULT) },
    },
  })
  const core = new Mesh(coreGeometry, coreMaterial)
  scene.add(core)

  // --- loop
  let raf = 0
  let running = false
  let last = 0
  let time = 0
  let angle = 0

  function render(now) {
    const dt = Math.min((now - last) / 1000, 0.05)
    last = now
    time += dt

    const hp = frame.heroProgress
    const pm = frame.processMix
    const speed = 1 + 2 * smooth(0, 0.6, hp) // angular speed ×3 by 60%
    angle += dt * 0.22 * speed
    const scatter = smooth(0.6, 1, hp)
    const heroAlpha = 1 - scatter

    const u = pointsMaterial.uniforms
    u.uTime.value = time
    u.uAngle.value = angle
    u.uScatter.value = scatter
    u.uMix.value = pm
    u.uProgress.value = frame.processProgress
    u.uAlpha.value = Math.max(heroAlpha * (1 - pm), frame.processAlpha)

    // camera dives z 5 → 2 through the hero, back to 5 for the process state
    camera.position.z = (5 - 3 * hp) * (1 - pm) + 5 * pm
    points.rotation.x = 0.38 * (1 - pm)
    const heroX = mobile ? 0 : 1.4 // core sits right of the headline on desktop
    points.position.x = heroX * (1 - pm) + pm * (mobile ? 0 : 1.5)
    core.position.x = heroX
    points.position.y = pm * (mobile ? 0 : 0.5) // clear of the phase-card row
    points.scale.setScalar(1 - 0.18 * pm)
    points.rotation.y = pm * Math.sin(time * 0.25) * 0.25

    const coreAlpha = heroAlpha * (1 - pm)
    core.visible = coreAlpha > 0.01
    coreMaterial.uniforms.uAlpha.value = coreAlpha
    coreMaterial.uniforms.uTime.value = time
    core.rotation.y += dt * 0.15
    core.rotation.x += dt * 0.05

    renderer.render(scene, camera)
  }

  function tick(now) {
    if (!running) return
    raf = requestAnimationFrame(tick)
    render(now)
  }

  return {
    start() {
      if (running) return
      running = true
      last = performance.now()
      raf = requestAnimationFrame(tick)
    },
    stop() {
      running = false
      cancelAnimationFrame(raf)
    },
    get running() {
      return running
    },
    resize(width, height) {
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      if (!running) render(performance.now())
    },
    dispose() {
      running = false
      cancelAnimationFrame(raf)
      geometry.dispose()
      pointsMaterial.dispose()
      coreGeometry.dispose()
      coreMaterial.dispose()
      renderer.dispose()
      renderer.forceContextLoss()
    },
  }
}
