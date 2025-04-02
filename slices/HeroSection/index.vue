<template>
  <main class="full-width hero-section" id="hero-section">
    <div class="hero-visual">
      <video
        ref="heroVideo"
        muted
        loop
        playsinline
        preload="metadata"
        class="hero-video__element"
      >
        <source :src="heroVideoSrc" type="video/mp4" />
      </video>
      <div class="video-overlay"></div>
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
import heroVideoSrc from "@/assets/hero-section-video.mp4";

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

const heroVideo = ref<HTMLVideoElement | null>(null);
const heroVisual = ref<HTMLElement | null>(null);

onMounted(() => {
  if (heroVideo.value) {
    heroVideo.value.play().catch((error) => {
      console.warn("Autoplay prevented:", error);
    });

    heroVideo.value.addEventListener("canplaythrough", () => {
      heroVideo.value?.play();
    });
  }
});
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
  overflow: hidden; /* Changed from clip to hidden to contain the video */
  background-size: cover; /* Ensure the blurred image covers the area */
  background-position: center;
  transition:
    background-image 0.3s ease-in-out,
    filter 0.3s ease-in-out; /* Optional smooth transition */
}

.hero-video__element {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

/* Style for the overlay */
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Black with 20% opacity */
  z-index: 1; /* Ensure it's on top of the video */
}

/* Content */
.hero-content {
  text-align: center;
  z-index: 1; /* Keep content above the overlay */
}
</style>
