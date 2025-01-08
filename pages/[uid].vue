<template>
  <SliceZone :slices="page?.data.slices ?? []" :components="components" />
</template>

<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(route.params.uid as string, () =>
  prismic.client.getByUID("single_program_page", route.params.uid as string),
);
</script>
