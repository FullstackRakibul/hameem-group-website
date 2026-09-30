import { onMounted, onBeforeUnmount, type Ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type Setup = (g: typeof gsap, st: typeof ScrollTrigger) => void | (() => void)
interface Options {
  /** extra media query ANDed with no-reduced-motion, e.g. '(min-width: 1024px)' */
  media?: string
}

let refreshQueued = false
function queueRefresh() {
  if (refreshQueued) return
  refreshQueued = true
  requestAnimationFrame(() => {
    refreshQueued = false
    ScrollTrigger.refresh()
  })
}

/**
 * The only way v2 components create GSAP tweens / ScrollTriggers.
 * - Selectors inside `setup` resolve within `scope` only.
 * - Waits for document.fonts.ready so trigger positions use final metrics,
 *   then batches a single ScrollTrigger.refresh() per frame.
 * - Everything is reverted on unmount (safe with route changes).
 * - Skipped entirely under prefers-reduced-motion, so markup must be visible
 *   by default (animate with `from`, never CSS-hidden start states).
 */
export function useGsapScope(scope: Ref<HTMLElement | null>, setup: Setup, options: Options = {}) {
  let mm: gsap.MatchMedia | null = null
  let dead = false

  onMounted(async () => {
    gsap.registerPlugin(ScrollTrigger)
    await document.fonts?.ready
    if (dead || !scope.value) return
    const query = '(prefers-reduced-motion: no-preference)' + (options.media ? ` and ${options.media}` : '')
    mm = gsap.matchMedia(scope.value)
    mm.add(query, () => setup(gsap, ScrollTrigger))
    queueRefresh()
  })

  onBeforeUnmount(() => {
    dead = true
    mm?.revert()
    mm = null
  })
}
