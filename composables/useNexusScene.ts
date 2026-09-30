import { reactive } from 'vue'

/**
 * Shared state between the v2 sections and the single fixed NexusCanvas.
 * Only mutated on the client (inside onMounted / ScrollTrigger callbacks),
 * so the module-level singleton never leaks state between SSR requests.
 */

/** Per-frame values, read by the WebGL loop (intentionally non-reactive). */
const frame = {
  heroProgress: 0, // 0 → 1 across the hero's scroll height
  heroVisible: false,
  processProgress: 0, // 0 → 4 (Spin, Weave, Design, Sew, Finish)
  processMix: 0, // 0 = vortex positions, 1 = process morph positions
  processAlpha: 0,
  processVisible: false,
}

/** UI state that templates react to. */
const ui = reactive({
  webglReady: false,
  cursorLabel: '',
})

const listeners = new Set<() => void>()

function setVisible(key: 'heroVisible' | 'processVisible', value: boolean) {
  if (frame[key] === value) return
  frame[key] = value
  listeners.forEach((fn) => fn())
}

function onVisibilityChange(fn: () => void) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

function reset() {
  Object.assign(frame, {
    heroProgress: 0,
    heroVisible: false,
    processProgress: 0,
    processMix: 0,
    processAlpha: 0,
    processVisible: false,
  })
  ui.webglReady = false
  ui.cursorLabel = ''
}

export function useNexusScene() {
  return { frame, ui, setVisible, onVisibilityChange, reset }
}
