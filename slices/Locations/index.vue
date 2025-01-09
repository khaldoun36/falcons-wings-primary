<template>
  <section
    class="full-width grid py-20 md:grid-cols-2 md:gap-16 md:py-24 lg:gap-20 lg:py-32"
    id="locations"
    style="direction: ltr !important"
  >
    <div
      class="px-4 md:px-8 lg:pl-[calc((100vw-960px)/2)] xl:pl-[calc((100vw-1216px)/2)] 2xl:pl-[calc((100vw-1472px)/2)]"
      :style="
        $getLocale() === 'ar'
          ? 'direction: rtl !important'
          : 'direction: ltr !important'
      "
    >
      <h2
        class="text-center text-2xl text-balance md:text-start md:text-3xl lg:text-5xl"
      >
        {{ slice.primary.section_title }}
      </h2>
      <div class="mt-10 grid grid-cols-3 gap-20 md:mt-12 lg:mt-16">
        <div
          v-for="(item, index) in slice.primary.schools_logos"
          :key="index"
          class="mx-auto grid aspect-square size-[7.5rem] place-items-center p-4 md:size-40"
        >
          <NuxtImg
            v-if="item.logo.url"
            :src="item.logo.url!"
            :alt="item.logo.alt!"
            :width="item.logo.dimensions?.width"
            :height="item.logo.dimensions?.height"
            class="aspect-square h-full w-full object-contain"
            :class="{
              '!h-[calc(100%-25%)] !w-[calc(100%-25%)]': index === 1,
            }"
          />
        </div>
      </div>
    </div>
    <Map
      :dubai="slice.primary.total_schools_in_emirates[0]"
      :abudhabi="slice.primary.total_schools_in_emirates[1]"
      :sharjah="slice.primary.total_schools_in_emirates[2]"
      :alain="slice.primary.total_schools_in_emirates[3]"
    />
  </section>
</template>

<script setup lang="ts">
import Map from "~/components/Map.vue";
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.LocationsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>
