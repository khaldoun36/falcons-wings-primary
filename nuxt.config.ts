import { repositoryName, apiEndpoint } from "./slicemachine.config.json";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    // The private keys which are only available within server-side
    formAccessKey:
      process.env.FORM_ACCESS_KEY || "aec20e4c-f688-4136-bd0b-6395c10d079b",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: "Prismic + Nuxt Minimal Starter",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  modules: [
    "@nuxtjs/prismic",
    "@nuxt/fonts",
    "nuxt-i18n-micro",
    "@nuxt/image",
    "@nuxt/icon",
    "radix-vue/nuxt",
  ],

  prismic: {
    endpoint: apiEndpoint || repositoryName,
    preview: false,
    toolbar: false,
    clientConfig: {
      routes: [
        {
          type: "page",
          path: "/:uid",
        },
        {
          type: "page",
          uid: "home",
          path: "/",
        },
      ],
    },
  },

  fonts: {
    families: [
      { name: "Poppins", provider: "google", weight: "400" },
      { name: "Open Sans", provider: "google", weight: "750" },
    ],
  },

  i18n: {
    locales: [
      { code: "en", iso: "en-US", dir: "ltr" },
      { code: "ar", iso: "ar-AE", dir: "rtl" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    meta: true,
  },

  image: {
    prismic: {},
  },
});
