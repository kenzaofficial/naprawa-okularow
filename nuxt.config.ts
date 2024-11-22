export default defineNuxtConfig({
  css: [
    "~/assets/css/normalize.css",
    "~/assets/css/variables.css",
    "~/assets/css/fonts.css",
  ],
  devtools: { enabled: false },
  plugins: ["~/plugins/vue-the-mask.js"],
});
