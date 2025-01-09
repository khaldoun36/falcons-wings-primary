<template>
  <SliceZone :slices="page?.data.slices ?? []" :components="components" />
</template>

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
const route = useRoute();

const uid = computed(() => {
  if ($getLocale() !== "en") {
    return route.params.uid.slice(2);
  }
  return route.params.uid;
});

const { data: page } = useAsyncData(
  uid.value as string,
  () =>
    prismic.client.getByUID("single_program_page", uid.value as string, {
      lang: locale.value,
    }),
  {
    watch: [computed(() => locale.value)],
  },
);

defineOptions({
  inheritAttrs: false,
});
</script>
