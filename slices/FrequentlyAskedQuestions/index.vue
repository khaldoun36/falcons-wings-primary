<template>
  <section
    class="full-width bg-primary-700/20 grid grid-cols-subgrid py-10 md:py-12 lg:py-16"
  >
    <div class="col-start-2 col-end-2 grid gap-16 md:grid-cols-2 lg:gap-20">
      <div class="img-container hidden rounded-md shadow md:block">
        <NuxtImg
          v-if="slice.primary.image.url"
          :src="slice.primary.image.url!"
          :alt="slice.primary.image.alt!"
          :width="slice.primary.image.dimensions?.width"
          :height="slice.primary.image.dimensions?.height"
          class="aspect-square h-full w-full rounded-md object-cover"
        />
      </div>

      <div class="md:mt-3">
        <h2
          class="text-center text-2xl text-balance md:text-start md:text-3xl lg:text-5xl"
          :class="{ 'tracking-wide': $getLocale() === 'en' }"
        >
          {{ slice.primary.section_title }}
        </h2>
        <AccordionRoot
          class="mt-10 space-y-8 md:mt-12 lg:mt-16"
          :default-value="accordionItems[0].value"
          type="single"
          :collapsible="true"
          :data-id="accordionId"
        >
          <template
            v-for="item in accordionItems"
            :key="item.value"
            :data-id="accordionId"
          >
            <AccordionItem
              class="rounded-md border-[1.5px] border-black/10 bg-white"
              :value="item.value"
            >
              <AccordionHeader class="flex">
                <AccordionTrigger
                  class="group flex flex-1 cursor-default items-center justify-between p-5 leading-none outline-none"
                >
                  <h3
                    class="relative text-xl md:text-2xl"
                    :class="{ 'tracking-wide': $getLocale() === 'en' }"
                  >
                    {{ item.question }}
                  </h3>
                  <Icon
                    name="radix-icons:chevron-down"
                    class="text-green10 transition-transform duration-[250ms] ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                    aria-label="Expand/Collapse"
                  />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent class="accordion-content overflow-hidden">
                <div class="p-5">
                  <p class="text-sm text-pretty md:text-base">
                    {{ item.answer }}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </template>
        </AccordionRoot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type Content } from "@prismicio/client";
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "radix-vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const { slice } = defineProps(
  getSliceComponentProps<Content.FrequentlyAskedQuestionsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const accordionId = useId();

const frequentlyAskedQuestions = ref(slice.primary.frequently_asked_question);

const accordionItems = computed(() => {
  return frequentlyAskedQuestions.value.map((item) => ({
    question: item.question,
    answer: item.answer,
    value: Math.random().toString() + item.question,
  }));
});
</script>

<style scoped>
@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}

.accordion-content[data-state="open"] {
  animation: slideDown 250ms cubic-bezier(0.87, 0, 0.13, 1);
}

.accordion-content[data-state="closed"] {
  animation: slideUp 250ms cubic-bezier(0.87, 0, 0.13, 1);
}
</style>
