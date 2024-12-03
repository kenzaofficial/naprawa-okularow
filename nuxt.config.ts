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
      title: "Naprawa okularów Wrocław",
      meta: [
        {
          name: "description",
          content:
            "Profesjonalna naprawa okularów w szybkim czasie we Wrocławiu. Usługi wysokiej jakości dla każdego rodzaju okularów – zapraszamy!",
        },
        {
          name: "keywords",
          content:
            "naprawa okularów Wrocław, naprawa okularów Borek, CH Borek, serwis naprawy okularów, szybka naprawa, okulary, pilna naprawa okularów",
        },
        {
          name: "author",
          content: "Naprawa okularów",
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
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-Z3G3WFL0G4",
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z3G3WFL0G4');
          `,
          type: "text/javascript",
        },
      ],
    },
  },

  compatibilityDate: "2024-11-29",
});