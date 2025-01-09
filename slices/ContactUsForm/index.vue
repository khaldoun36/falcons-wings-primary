<template>
  <section
    class="full-width bg-primary-950 grid grid-cols-subgrid py-20 *:col-start-2 *:col-end-2 md:py-24 lg:py-32"
    id="contact-us"
  >
    <div class="grid gap-16 md:grid-cols-2 lg:gap-20">
      <div class="contact-info max-w-prose">
        <h3
          class="text-center text-xl text-balance !text-neutral-100 md:text-start md:text-2xl lg:text-4xl"
        >
          {{ slice.primary.form_title }}
        </h3>
        <p
          class="mt-4 text-center text-sm text-balance text-neutral-300/80 md:mt-5 md:text-start md:text-base"
        >
          {{ slice.primary.form_subtitle }}
        </p>
        <div class="mt-8 space-y-6 lg:mt-16">
          <div class="flex items-start gap-4 text-neutral-100">
            <div
              class="flex items-center justify-center rounded border border-white/10 p-2"
            >
              <Icon name="heroicons:envelope" class="size-5" />
            </div>
            <div class="mt-1 flex flex-col gap-1">
              <p class="text-xl">
                {{ $getLocale() === "en" ? "Email us at" : "راسلنا على" }}
              </p>
              <a
                :href="`mailto:${slice.primary.email || 'info@falconswings.ae'}`"
                class="text-base text-neutral-300/80"
                >{{ slice.primary.email || "info@falconswings.ae" }}</a
              >
            </div>
          </div>
          <div class="flex items-start gap-4 !text-neutral-100">
            <div
              class="flex items-center justify-center rounded border border-white/10 p-2"
            >
              <Icon name="heroicons:phone" class="size-5" />
            </div>
            <div class="mt-1 flex flex-col gap-1">
              <p class="text-xl">
                {{ $getLocale() === "en" ? "Call us" : "اتصل بنا" }}
              </p>
              <a
                :href="`tel:${slice.primary.phone_number?.replace(/\s+/g, '') || '+971585567875'}`"
                class="text-base !text-neutral-300/80"
                style="direction: ltr !important"
                >{{ slice.primary.phone_number || "+971 58 556 7875" }}</a
              >
            </div>
          </div>
        </div>
      </div>
      <ContactForm :message="slice.primary.message_placeholder" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from "./ContactForm.vue";
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ContactUsFormSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>
