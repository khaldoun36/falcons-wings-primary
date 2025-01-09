<template>
  <section
    class="full-width grid grid-cols-subgrid bg-[hsl(46_74%_92%_/_.4)] py-20 md:py-24 lg:py-32"
    id="our-programs"
  >
    <div class="col-start-2 col-end-2">
      <h2
        class="text-center text-2xl md:text-3xl lg:text-5xl"
        :class="{ 'tracking-wide': $getLocale() === 'en' }"
      >
        {{ slice.primary.section_title }}
      </h2>
      <div class="mt-10 grid gap-16 md:mt-12 lg:mt-16 lg:grid-cols-3">
        <template v-if="posts">
          <div v-for="program in posts" :key="program.uid">
            <i18n-link
              :to="program.uid"
              class="flex min-h-full flex-col items-center justify-between gap-8"
            >
              <article
                class="flex flex-col items-center justify-center gap-6 text-center"
              >
                <NuxtImg
                  v-if="program.data.slices[0]?.primary"
                  :src="program.data.slices[0]?.primary.program_logo?.url"
                  :alt="program.data.slices[0]?.primary.program_logo?.alt"
                  :width="
                    program.data.slices[0]?.primary.program_logo?.dimensions
                      ?.width
                  "
                  :height="
                    program.data.slices[0]?.primary.program_logo?.dimensions
                      ?.height
                  "
                  class="relative h-auto w-full max-w-[280px]"
                  :class="{
                    'blur-md':
                      !program.data.slices[0]?.primary.is_program_active,
                  }"
                />

                <h3
                  class="relative mt-2 text-xl md:text-2xl lg:text-4xl"
                  :class="{ 'tracking-wide': $getLocale() === 'en' }"
                >
                  {{ program.data.slices[0]?.primary.program_title }}
                </h3>

                <p class="relative text-sm text-pretty md:text-base">
                  {{ program.data.slices[0]?.primary.short_description }}
                </p>
              </article>
              <button class="btn !min-w-full">
                {{ $getLocale() === "ar" ? "اعرف المزيد" : "Learn More" }}
              </button>
            </i18n-link>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type Content } from "@prismicio/client";

const { slice } = defineProps(
  getSliceComponentProps<Content.OurProgramsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const { $getLocale } = useI18n();

const locale = computed(() => {
  if ($getLocale() === "en") {
    return "en-US";
  }
  return "ar-AE";
});

const { client } = usePrismic();
const { data: posts } = await useAsyncData(
  "posts",
  () =>
    client.getAllByType("single_program_page", {
      orderings: {
        field: "document.first_publication_date",
        direction: "asc",
      },
      lang: locale.value,
    }),
  {
    watch: [computed(() => locale.value)],
  },
);
</script>

<style scoped></style>
