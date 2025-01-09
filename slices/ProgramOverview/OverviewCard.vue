<template>
  <article class="overview-card">
    <Icon
      :name="icon"
      size="192px"
      class="absolute -top-2 mb-2 text-neutral-400/10"
      :class="{
        '!-left-2 scale-x-[-1]': $getLocale() === 'ar',
        '!-right-2': $getLocale() === 'en',
      }"
    />

    <h3
      class="relative text-xl !text-neutral-100 md:text-2xl lg:text-3xl"
      :class="{ 'tracking-wide': $getLocale() === 'en' }"
    >
      {{ item.title }}
    </h3>
    <p class="relative text-sm text-pretty !text-neutral-300/80 md:text-base">
      {{ item.description }}
    </p>
  </article>
</template>

<script setup lang="ts">
const { item, icon } = defineProps<{
  item: {
    title: string;
    description: string;
  };
  icon: string;
}>();
</script>

<style scoped>
.overview-card {
  /* Layout */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  /* Spacing */
  gap: var(--spacing-4);
  padding: var(--spacing-8);

  /* Visual */
  isolation: isolate;
  overflow: clip;

  border-radius: var(--radius-1);
}
</style>
