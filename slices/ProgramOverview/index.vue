<template>
  <section
    class="bg-primary-950 full-width py-20 md:py-24 lg:py-32"
    id="program-overview"
  >
    <h2
      class="mx-auto max-w-[30ch] text-center text-2xl text-balance !text-neutral-100 md:text-3xl lg:text-5xl"
      :class="{ 'tracking-wide': $getLocale() === 'en' }"
    >
      {{ slice.primary.section_title }}
    </h2>
    <div class="mt-10 grid gap-8 md:mt-12 lg:mt-16">
      <div class="grid gap-8 lg:grid-rows-2">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr]">
          <OverviewCard
            v-if="slice.primary.program_overview[0]"
            :item="{
              title: String(slice.primary.program_overview[0].title),
              description: String(
                slice.primary.program_overview[0].description,
              ),
            }"
            icon="mdi:compass-outline"
            class="border border-white/10 bg-neutral-900/90"
          />
          <NuxtImg
            v-if="slice.primary.image_wide"
            :src="String(slice.primary.image_wide.url)"
            :alt="String(slice.primary.image_wide.alt)"
            :width="slice.primary.image_wide.dimensions?.width"
            :height="slice.primary.image_wide.dimensions?.height"
            class="block h-80 w-full overflow-clip border border-white/10 object-cover md:min-h-full"
            loading="lazy"
          />
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <OverviewCard
            v-if="slice.primary.program_overview[1]"
            :item="{
              title: String(slice.primary.program_overview[1].title),
              description: String(
                slice.primary.program_overview[1].description,
              ),
            }"
            icon="heroicons:sparkles"
            class="border border-white/10 bg-yellow-700/80"
          />
          <NuxtImg
            v-if="slice.primary.image_square"
            :src="String(slice.primary.image_square.url)"
            :alt="String(slice.primary.image_square.alt)"
            :width="slice.primary.image_square.dimensions?.width"
            :height="slice.primary.image_square.dimensions?.height"
            class="block h-80 w-full overflow-clip border border-white/10 object-cover md:col-span-2 lg:col-span-1 lg:min-h-full"
            loading="lazy"
          />
          <OverviewCard
            v-if="slice.primary.program_overview[2]"
            :item="{
              title: String(slice.primary.program_overview[2].title),
              description: String(
                slice.primary.program_overview[2].description,
              ),
            }"
            icon="heroicons:rocket-launch"
            class="border border-white/10 bg-amber-800/80 md:row-start-1 lg:row-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Map from "@/components/Map.vue";
import { type Content } from "@prismicio/client";
import OverviewCard from "./OverviewCard.vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ProgramOverviewSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<style scoped>
#program-overview {
  display: grid;
  grid-template-columns: subgrid;
}

#program-overview > * {
  grid-column: 2;
}

img {
  border-radius: var(--radius-1);
}
</style>
