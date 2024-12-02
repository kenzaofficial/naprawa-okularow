export default defineNuxtConfig({
  css: [
    "~/assets/css/normalize.css",
    "~/assets/css/variables.css",
    "~/assets/css/fonts.css",
  ],

  devtools: { enabled: false },
  plugins: ["~/plugins/vue-the-mask.js"],

  app: {
    head: {
      title: "Naprawa okularów Wrcolaw",
      meta: [
        {
          name: "description",
          content:
            "Profesjonalna naprawa okularów w szybkim czasie we Wroclawiu. Usługi wysokiej jakości dla każdego rodzaju okularów – zapraszamy!",
        },
        {
          name: "keywords",
          content:
            "naprawa okularów Wroclaw, naprawa okularow Borek, CH Borek, serwis nawrawy okularów, szybka naprawa, okulary, pilna naprawa okularow",
        },
        {
          name: "author",
          content: "Naprawa okularow",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          "http-equiv": "Content-Language",
          content: "pl",
        },
      ],
    },
  },

  compatibilityDate: "2024-11-29",
});