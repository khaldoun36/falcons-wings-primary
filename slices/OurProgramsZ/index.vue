<template>
  <component
    v-if="slice.primary.program_details"
    v-for="(item, index) in slice.primary.program_details"
    :is="index === 0 ? 'main' : 'section'"
    :key="index"
    class="full-width grid grid-cols-subgrid py-20 md:py-28 lg:py-32"
    :class="[
      index % 2 === 0 ? 'bg-primary-700/20' : 'bg-[hsl(46_74%_92%_/_.4)]',
      [index === 0 ? '!pt-48 md:!pt-52 lg:!pt-56' : ''],
    ]"
  >
    <div
      class="col-start-2 col-end-2 grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-20"
    >
      <div
        class="img-container rounded-md"
        :style="{
          '--color-border':
            index % 2 === 0
              ? 'var(--color-primary-700)'
              : 'var(--color-yellow-600)',
        }"
      >
        <NuxtImg
          v-if="item.image"
          :src="item.image.url!"
          :alt="item.image.alt!"
          :width="item.image.dimensions?.width"
          :height="item.image.dimensions?.height"
          class="aspect-square rounded-md object-cover"
        />
      </div>
      <div
        class="prose md:mt-8"
        :class="{ 'lg:!col-start-1 lg:!row-start-1': index % 2 !== 0 }"
      >
        <component
          :is="index === 0 ? 'h1' : 'h2'"
          class="text-3xl text-balance sm:text-4xl md:text-5xl lg:text-6xl"
          :class="{ 'tracking-wide': $getLocale() === 'en' }"
        >
          {{ item.title }}
        </component>

        <PrismicRichText
          :field="item.description"
          class="mt-6 max-w-prose text-pretty"
        />
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.OurProgramsZSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<style scoped></style>
