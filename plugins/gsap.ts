import { defineNuxtPlugin } from '#app'
import { gsap } from 'gsap'

export default defineNuxtPlugin(() => {
  gsap.defaults({
    ease: "power2.out",
    duration: 0.6
  })
})
