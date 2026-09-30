<template>
  <form class="w-full" novalidate @submit.prevent="submit">
    <label for="nx-newsletter" class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">Newsletter</label>
    <div class="mt-3 flex rounded-full border border-white/10 bg-white/[0.03] p-1 focus-within:border-thread/60">
      <input
        id="nx-newsletter"
        v-model="email"
        type="email"
        autocomplete="email"
        required
        placeholder="you@brand.com"
        class="min-w-0 flex-1 border-0 bg-transparent px-4 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-0"
        :aria-describedby="message ? 'nx-newsletter-msg' : undefined"
      />
      <button type="submit" class="rounded-full bg-thread px-5 py-2.5 text-sm font-semibold text-void" :class="focusRing">Subscribe</button>
    </div>
    <p id="nx-newsletter-msg" class="mt-2 min-h-[1.25rem] text-xs text-white/70" aria-live="polite">{{ message }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { focusRing } from '~/composables/nexus/ui.js'

const email = ref('')
const message = ref('')

// No subscription backend exists yet, so nothing is sent anywhere.
function submit() {
  message.value = /.+@.+\..+/.test(email.value)
    ? '[TODO: newsletter endpoint] Signup is not connected yet.'
    : 'Please enter a valid email address.'
}
</script>
