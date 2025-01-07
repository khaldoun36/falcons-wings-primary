// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  contact_us_form: defineAsyncComponent(
    () => import("./ContactUsForm/index.vue"),
  ),
  frequently_asked_questions: defineAsyncComponent(
    () => import("./FrequentlyAskedQuestions/index.vue"),
  ),
  hero_section: defineAsyncComponent(() => import("./HeroSection/index.vue")),
  locations: defineAsyncComponent(() => import("./Locations/index.vue")),
  national_identity_framework: defineAsyncComponent(
    () => import("./NationalIdentityFramework/index.vue"),
  ),
  program_overview: defineAsyncComponent(
    () => import("./ProgramOverview/index.vue"),
  ),
});
