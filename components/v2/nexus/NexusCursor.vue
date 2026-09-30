<template>
  <!-- B7: dot + ring follower. Only activated (via useGsapScope) for fine pointers with motion allowed. -->
  <div ref="root" class="pointer-events-none fixed inset-0 z-[70]" aria-hidden="true">
    <div class="nx-dot fixed left-0 top-0 -ml-[5px] -mt-[5px] h-2.5 w-2.5 rounded-full bg-thread opacity-0"></div>
    <div
      class="nx-ring fixed left-0 top-0 flex items-center justify-center rounded-full border font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-void opacity-0 transition-[width,height,margin,background-color,border-color] duration-200"
      :class="
        ui.cursorLabel
          ? '-ml-9 -mt-9 h-[72px] w-[72px] border-thread bg-thread'
          : hovering
            ? '-ml-7 -mt-7 h-14 w-14 border-thread bg-thread/10'
            : '-ml-[18px] -mt-[18px] h-9 w-9 border-thread/60 bg-transparent'
      "
    >
      {{ ui.cursorLabel }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { ui } = useNexusScene()
const root = ref(null)
const hovering = ref(false)

useGsapScope(
  root,
  (gsap) => {
    const dot = root.value.querySelector('.nx-dot')
    const ring = root.value.querySelector('.nx-ring')
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' })
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' })

    const html = document.documentElement
    html.classList.add('nx-cursor')
    let shown = false

    const move = (e) => {
      if (!shown) {
        shown = true
        gsap.set([dot, ring], { x: e.clientX, y: e.clientY })
        gsap.to([dot, ring], { opacity: 1, duration: 0.2 })
      }
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }
    const over = (e) => {
      const field = e.target.closest?.('input, textarea, select')
      gsap.to([dot, ring], { opacity: field ? 0 : 1, duration: 0.15 }) // system cursor shows over fields
      hovering.value = !!e.target.closest?.('a, button, [data-cursor]')
    }
    const leave = () => {
      shown = false
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 })
    }

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerover', over, { passive: true })
    document.documentElement.addEventListener('pointerleave', leave)
    return () => {
      html.classList.remove('nx-cursor')
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', over)
      document.documentElement.removeEventListener('pointerleave', leave)
      ui.cursorLabel = ''
    }
  },
  { media: '(pointer: fine)' },
)
</script>

<style>
html.nx-cursor,
html.nx-cursor * {
  cursor: none !important;
}
/* never hide the system cursor over form fields */
html.nx-cursor input,
html.nx-cursor textarea,
html.nx-cursor select {
  cursor: auto !important;
}
</style>
