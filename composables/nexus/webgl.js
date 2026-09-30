let supported = null

/** True when a WebGL context can be created (checked once, before three is downloaded). */
export function hasWebGL() {
  if (supported !== null) return supported
  supported = probe()
  return supported
}

function probe() {
  try {
    const c = document.createElement('canvas')
    const gl = c.getContext('webgl2') || c.getContext('webgl')
    const ok = !!gl
    gl?.getExtension('WEBGL_lose_context')?.loseContext()
    return ok
  } catch {
    return false
  }
}

/** Resolves after window `load` and the next idle period, so WebGL setup never competes with LCP. */
export function whenIdle(timeout = 1500) {
  return new Promise((resolve) => {
    const go = () => (window.requestIdleCallback ? window.requestIdleCallback(() => resolve(), { timeout }) : setTimeout(resolve, 200))
    if (document.readyState === 'complete') go()
    else window.addEventListener('load', go, { once: true })
  })
}

/** Resolves the first time `el` comes within `margin` of the viewport. */
export function whenNear(el, margin = '600px') {
  return new Promise((resolve) => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        resolve()
      },
      { rootMargin: margin },
    )
    io.observe(el)
  })
}
