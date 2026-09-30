<template>
  <time class="font-mono tabular-nums" :datetime="iso">{{ time }}</time>
</template>

<script setup>
// Rendered inside <ClientOnly> by the footer, so server and client never disagree on the time.
import { ref, onMounted, onBeforeUnmount } from 'vue'

const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Dhaka', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
const time = ref('')
const iso = ref('')
let timer = 0

const update = () => {
  const now = new Date()
  time.value = fmt.format(now)
  iso.value = now.toISOString()
}

onMounted(() => {
  update()
  timer = window.setInterval(update, 1000)
})
onBeforeUnmount(() => window.clearInterval(timer))
</script>
