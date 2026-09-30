import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * Reactive media preferences. SSR and the first client render use the
 * conservative defaults below (so hydration always matches), then update on mount.
 */
export function useMotionPrefs() {
  const reduced = ref(true)
  const finePointer = ref(false)
  const desktop = ref(false) // ≥1024px
  const tablet = ref(false) // ≥768px
  const cleanups: Array<() => void> = []

  const bind = (query: string, target: typeof reduced) => {
    const mq = window.matchMedia(query)
    const update = () => (target.value = mq.matches)
    update()
    mq.addEventListener('change', update)
    cleanups.push(() => mq.removeEventListener('change', update))
  }

  onMounted(() => {
    bind('(prefers-reduced-motion: reduce)', reduced)
    bind('(pointer: fine)', finePointer)
    bind('(min-width: 1024px)', desktop)
    bind('(min-width: 768px)', tablet)
  })
  onBeforeUnmount(() => cleanups.splice(0).forEach((fn) => fn()))

  return { reduced, finePointer, desktop, tablet }
}
