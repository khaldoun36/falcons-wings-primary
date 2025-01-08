<template>
  <div class="layout-container">
    <div aria-label="decorative" style="height: 0.25px" />
    <PrimaryHeader />
    <NuxtPage />
    <PrimaryFooter />
  </div>
</template>

<script setup>
// CSS import
import "@/assets/css/index.css";
import "@/assets/css/container.css";
import "@/assets/css/typography.css";
import "@/assets/css/button.css";

// Components import
import PrimaryFooter from "@/components/PrimaryFooter.vue";
import PrimaryHeader from "@/components/PrimaryHeader.vue";
</script>

<style></style>
