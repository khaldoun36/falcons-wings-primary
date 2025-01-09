<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <div class="layout-container">
      <div aria-label="decorative" style="height: 0.2px" />
      <PrimaryHeader />
      <NuxtPage />
      <PrimaryFooter />
    </div>
  </Html>
</template>

<script setup>
// CSS import
import "@/assets/css/index.css";
import "@/assets/css/container.css";
import "@/assets/css/typography.css";
import "@/assets/css/button.css";

// Components import
import PrimaryFooter from "@/components/PrimaryFooter.vue";
import PrimaryHeader from "~/components/header/PrimaryHeader.vue";

const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});
</script>

<style></style>
