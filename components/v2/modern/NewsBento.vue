<template>
  <section ref="root" data-shot="news" class="px-4 pb-24 pt-8 sm:px-6 md:pb-36 lg:px-10">
    <div class="mx-auto max-w-[1440px]">
      <SectionIntro index="07" eyebrow="Insights" :lines="['News from', 'the floor']" :accent-from="1" class="mb-14 md:mb-20">
        Updates from our mills and factories. <TodoTag label="blog route + confirmed post dates" />
      </SectionIntro>

      <div class="grid gap-4 lg:grid-cols-3">
        <article
          v-for="(post, i) in posts"
          :key="post.title"
          class="post group relative flex flex-col overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-thread/30 hover:shadow-glow-thread"
          :class="[glass, i === 0 ? 'lg:row-span-2' : 'lg:col-span-2 lg:flex-row']"
        >
          <div class="relative overflow-hidden" :class="i === 0 ? 'aspect-[4/5] lg:aspect-auto lg:min-h-[320px] lg:flex-1' : 'aspect-video lg:aspect-auto lg:min-h-[240px] lg:w-2/5'">
            <img
              :src="post.image"
              :alt="post.title"
              :width="post.w"
              :height="post.h"
              loading="lazy"
              decoding="async"
              class="absolute inset-0 h-full w-full object-cover saturate-[.8] transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div class="flex flex-1 flex-col justify-between gap-6 p-7">
            <div>
              <p class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">
                <time>{{ post.date }}</time> · [{{ pad2(i + 1) }}]
              </p>
              <h3 class="mt-3 font-display text-2xl font-bold leading-tight tracking-[-0.03em] text-white">{{ post.title }}</h3>
              <p class="mt-3 text-sm leading-relaxed text-white/70">{{ post.text }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { posts } from '~/composables/nexus/content.js'
import { glass, pad2 } from '~/composables/nexus/ui.js'
import SectionIntro from './SectionIntro.vue'
import TodoTag from '~/components/v2/nexus/TodoTag.vue'

const root = ref(null)

useGsapScope(root, (gsap) => {
  gsap.utils.selector(root.value)('.post').forEach((el, i) => {
    gsap.fromTo(el, { clipPath: 'inset(100% 0 0 0 round 28px)' }, {
      clipPath: 'inset(0% 0 0 0 round 28px)', duration: 0.9, ease: 'power4.out', delay: i * 0.08,
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      clearProps: 'clipPath',
    })
  })
})
</script>
