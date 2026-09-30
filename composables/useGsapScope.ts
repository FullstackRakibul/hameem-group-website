import { onMounted, onBeforeUnmount, type Ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type Setup = (g: typeof gsap, st: typeof ScrollTrigger) => void | (() => void)

/**
 * Runs GSAP animations scoped to a component root.
 * - Selectors inside `setup` resolve within `scope` only.
 * - Everything is reverted on unmount (safe with route changes).
 * - Skipped entirely when the user prefers reduced motion, so markup must be
 *   visible by default (animate with `gsap.from`, not CSS-hidden states).
 */
export function useGsapScope(scope: Ref<HTMLElement | null>, setup: Setup) {
  let mm: gsap.MatchMedia | null = null

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    mm = gsap.matchMedia(scope.value ?? undefined)
    mm.add('(prefers-reduced-motion: no-preference)', () => setup(gsap, ScrollTrigger))
  })

  onBeforeUnmount(() => {
    mm?.revert()
    mm = null
  })
}
