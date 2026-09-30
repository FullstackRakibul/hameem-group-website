import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type Lenis from 'lenis'
import 'lenis/dist/lenis.css'

let instance: Lenis | null = null

/** Current Lenis instance (null on other routes or under reduced motion). */
export const getLenis = () => instance

/**
 * Smooth scroll scoped to the calling page (call it from pages/v2/index.vue only).
 * Other routes keep native scroll: Lenis is created on mount and destroyed on unmount.
 */
export function useLenis() {
  let tick: ((time: number) => void) | null = null
  let dead = false

  onMounted(async () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const { default: LenisCtor } = await import('lenis')
    if (dead) return
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new LenisCtor({ lerp: 0.1, anchors: true })
    lenis.on('scroll', ScrollTrigger.update)
    tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    instance = lenis
  })

  onBeforeUnmount(() => {
    dead = true
    if (tick) gsap.ticker.remove(tick)
    tick = null
    instance?.destroy()
    instance = null
    gsap.ticker.lagSmoothing(500, 33) // GSAP default
  })
}
