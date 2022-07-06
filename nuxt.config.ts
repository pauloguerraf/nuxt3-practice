import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxt/content"],
  unocss: {
    preflight: true,
  },
  content: {
    highlight: {
      theme: "dark-plus",
    },
  },
});
