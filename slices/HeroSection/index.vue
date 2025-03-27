<template>
  <main class="full-width hero-section" id="hero-section">
    <div class="hero-visual">
      <NuxtImg
        v-if="slice.primary.hero_image?.url"
        preload
        :src="slice.primary.hero_image.url"
        :alt="slice.primary.hero_image.alt!"
        :width="slice.primary.hero_image.dimensions?.width"
        :height="slice.primary.hero_image.dimensions?.height"
        sizes="100vw sm:100vw md:100vw"
      />
    </div>
    <div class="hero-content mx-auto">
      <h1
        class="text-3xl text-balance !text-neutral-100 sm:text-4xl md:text-5xl lg:text-6xl"
        :class="{ 'tracking-wide': $getLocale() === 'en' }"
      >
        {{ slice.primary.section_title }}
      </h1>
      <p
        class="mx-auto mt-8 max-w-prose text-base text-balance !text-neutral-300/80 md:text-lg"
      >
        {{ slice.primary.section_description }}
      </p>
      <i18n-link
        to="/#contact-us"
        class="btn mx-auto mt-10 max-w-fit !px-12 !py-6"
      >
        {{ $getLocale() === "ar" ? "تواصل معنا" : "Contact Us" }}
      </i18n-link>
    </div>
  </main>
</template>

<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroSectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<style scoped>
/* Layout */
.hero-section {
  position: relative;
  isolation: isolate;
  height: 100dvh;
  display: grid;
  place-items: center;
  grid-template-columns: subgrid;
}

.hero-section > *:not(.hero-visual) {
  grid-column: 2;
}

/* Visual Elements */
.hero-visual {
  position: absolute;
  inset: 0;
  overflow: clip;
  background: linear-gradient(
    to bottom,
    var(--color-neutral-500),
    var(--color-neutral-600),
    var(--color-neutral-900)
  );
}

.hero-visual img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  mix-blend-mode: overlay;
}

/* Content */
.hero-content {
  text-align: center;
  z-index: 1;
}
</style>
