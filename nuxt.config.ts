import {head} from "./head";

export default defineNuxtConfig({
  css: [
    "~/assets/css/normalize.css",
    "~/assets/css/variables.css",
    "~/assets/css/fonts.css",
  ],
  srcDir: "src/",

  devtools: { enabled: false },
  plugins: ["~/plugins/vue-the-mask.js"],

  app: {
    head,
  },

  compatibilityDate: "2024-11-29",
});