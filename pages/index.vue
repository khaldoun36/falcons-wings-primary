<script setup lang="ts">
import { components } from "~/slices";
const { $getLocale } = useI18n();

const locale = computed(() => {
  if ($getLocale() === "en") {
    return "en-US";
  }
  return "ar-AE";
});

const prismic = usePrismic();
const { data: page } = useAsyncData("index", () =>
  prismic.client.getByUID("page", "home", {
    lang: locale.value,
  }),
);

useHead({
  title: prismic.asText(page.value?.data.title),
});

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <SliceZone :slices="page?.data.slices ?? []" :components="components" />
</template>
