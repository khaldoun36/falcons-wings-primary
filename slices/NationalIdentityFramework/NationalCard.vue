<template>
  <div
    class="group relative flex h-[30rem] flex-col justify-end overflow-hidden rounded-md border border-black/10 bg-white/95 shadow-sm"
  >
    <div class="absolute inset-0 h-full w-full shrink-0">
      <NuxtImg
        :src="String(item.image.url)"
        :alt="String(item.image.alt)"
        :width="item.image.dimensions?.width"
        :height="item.image.dimensions?.height"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
    <div
      class="card-gradient relative flex min-h-full min-w-full flex-col justify-end self-end p-8"
    >
      <h3
        class="relative text-xl !text-neutral-100 md:text-2xl lg:text-3xl"
        :class="{ 'tracking-wide': $getLocale() === 'en' }"
      >
        {{ item.title }}
      </h3>
      <p
        class="relative mt-4 text-sm text-pretty !text-neutral-300/80 md:mt-5 md:text-base lg:text-lg"
      >
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card-gradient {
  background: linear-gradient(
    to bottom,
    color-mix(in oklab, var(--color-neutral-950) 0%, transparent) 0%,
    color-mix(in oklab, var(--color-neutral-950) 25%, transparent) 25%,
    color-mix(in oklab, var(--color-neutral-950) 50%, transparent) 50%,
    color-mix(in oklab, var(--color-neutral-950) 60%, transparent) 60%,
    color-mix(in oklab, var(--color-neutral-950) 75%, transparent) 75%,
    color-mix(in oklab, var(--color-neutral-950) 90%, transparent) 90%,
    color-mix(in oklab, var(--color-neutral-950) 100%, transparent) 100%
  );
}
</style>
