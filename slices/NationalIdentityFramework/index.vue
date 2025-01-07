<template>
  <section
    class="full-width grid grid-cols-subgrid bg-[hsl(46_74%_92%_/_.4)] py-10 *:col-start-2 *:col-end-2 md:py-12 lg:py-16"
    id="national-identity-framework"
  >
    <h2
      class="mx-auto text-center text-2xl text-balance md:text-3xl lg:text-5xl"
      :class="{ 'tracking-wide': $getLocale() === 'en' }"
    >
      {{ slice.primary.section_title }}
    </h2>
    <div
      class="mt-10 grid gap-8 md:mt-12 md:grid-cols-4 lg:mt-16 lg:grid-cols-6"
    >
      <NationalCard
        v-for="(item, index) in slice.primary.national_identity_framework"
        :key="String(item.title)"
        :class="columnClasses[(index + 1) as keyof typeof columnClasses]"
        :item="item"
        class="md:col-span-2"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { type Content } from "@prismicio/client";
import NationalCard from "./NationalCard.vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.NationalIdentityFrameworkSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const columnClasses = {
  1: "md:col-span-4 lg:col-span-2 lg:row-start-2",
  2: "lg:col-span-3",
  3: "lg:col-span-2",
  4: "lg:col-span-3 lg:col-start-1 lg:row-start-1",
  5: "lg:col-span-2",
};
</script>
