import {head} from "./head";

export default defineNuxtConfig({
  css: [
    "~/assets/css/normalize.css",
    "~/assets/css/variables.css",
  ],

  srcDir: "src/",
  devtools: { enabled: false },
  plugins: ["~/plugins/vue-the-mask.js"],

  app: {
    head,
  },

  gtag: {
    id: 'G-LCD121PD2N',  // Ваш уникальный ID Google Analytics 4
  },

  compatibilityDate: "2024-11-29",
  modules: ["nuxt-gtag"],
});