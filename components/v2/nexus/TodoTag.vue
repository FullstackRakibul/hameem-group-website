<template>
  <!-- Visible placeholder for content the client still has to supply/approve. Grep "[TODO:" to find all. -->
  <span
    class="inline-flex items-center rounded-md border border-dashed border-white/25 px-2 py-0.5 align-middle font-mono text-[11px] font-normal normal-case tracking-normal text-white/70"
  >
    [TODO: {{ label }}]
  </span>
</template>

<script setup>
defineProps({ label: { type: String, required: true } })
</script>
