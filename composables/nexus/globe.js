// Small wireframe globe for the BentoGlance HQ card (the page's 2nd and last WebGL context).
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  SphereGeometry,
  WireframeGeometry,
  LineSegments,
  LineBasicMaterial,
  Group,
  Points,
  BufferGeometry,
  BufferAttribute,
  ShaderMaterial,
  AdditiveBlending,
  Color,
} from 'three'

const DEG = Math.PI / 180

function latLon(lat, lon, r) {
  const phi = lat * DEG
  const theta = lon * DEG
  return [r * Math.cos(phi) * Math.sin(theta), r * Math.sin(phi), r * Math.cos(phi) * Math.cos(theta)]
}

export function createGlobe(canvas, { palette, hotspots }) {
  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true })
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
  renderer.setPixelRatio(pixelRatio)

  const scene = new Scene()
  const camera = new PerspectiveCamera(32, 1, 0.1, 20)
  camera.position.z = 4.2

  const group = new Group()
  scene.add(group)

  const sphere = new SphereGeometry(1, 24, 16)
  const wireGeometry = new WireframeGeometry(sphere)
  const wireMaterial = new LineBasicMaterial({ color: new Color(palette.bleach.DEFAULT), transparent: true, opacity: 0.22 })
  group.add(new LineSegments(wireGeometry, wireMaterial))

  const positions = new Float32Array(hotspots.flatMap((h) => latLon(h.lat, h.lon, 1.02)))
  const spotGeometry = new BufferGeometry()
  spotGeometry.setAttribute('position', new BufferAttribute(positions, 3))
  const spotMaterial = new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    uniforms: { uColor: { value: new Color(palette.bleach.DEFAULT) }, uPulse: { value: 0 }, uPR: { value: pixelRatio } },
    vertexShader: `uniform float uPulse; uniform float uPR;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); gl_Position = projectionMatrix * mv;
      gl_PointSize = (22.0 + uPulse * 14.0) * uPR; }`,
    fragmentShader: `uniform vec3 uColor; uniform float uPulse;
      void main(){ float d = length(gl_PointCoord - .5); float core = smoothstep(.12,.0,d); float halo = smoothstep(.5,.0,d) * (.55 - uPulse*.35);
      gl_FragColor = vec4(uColor, core + halo); }`,
  })
  group.add(new Points(spotGeometry, spotMaterial))

  // face the first hotspot (Dhaka) toward the camera
  const [hx, hy, hz] = latLon(hotspots[0].lat, hotspots[0].lon, 1)
  const baseY = -Math.atan2(hx, hz)
  group.rotation.x = Math.asin(hy) * 0.8
  group.rotation.y = baseY

  let raf = 0
  let running = false
  let t = 0
  let last = 0

  function render(now) {
    const dt = Math.min((now - last) / 1000, 0.05)
    last = now
    t += dt
    group.rotation.y = baseY + Math.sin(t * 0.25) * 0.6
    spotMaterial.uniforms.uPulse.value = (Math.sin(t * 2.2) + 1) / 2
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
    renderOnce() {
      last = performance.now()
      render(last)
    },
    resize(w, h) {
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    },
    dispose() {
      running = false
      cancelAnimationFrame(raf)
      sphere.dispose()
      wireGeometry.dispose()
      wireMaterial.dispose()
      spotGeometry.dispose()
      spotMaterial.dispose()
      renderer.dispose()
      renderer.forceContextLoss()
    },
  }
}
