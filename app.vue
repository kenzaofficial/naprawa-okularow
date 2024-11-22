<template>
  <v-layout>
    <v-hero />
  </v-layout>
</template>

<script setup>
import VHero from "./components/blocks/v-hero/VHero.vue";
import VLayout from "./components/v-layout/VLayout.vue";

definePageMeta({
  title: "Naprawa Okularów - Profesjonalna Usługa | Wroclaw",
  meta: [
    {
      name: "description",
      content:
        "Profesjonalna naprawa okularów we Wroclawiu. Szybka i dokładna obsługa.",
    },
    {
      name: "keywords",
      content: "naprawa okularów, serwis okularów, naprawa oprawek, pilna naprawa okularów",
    },
    { name: "author", content: "Naprawa Okularów" },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content: "Naprawa Okularów - Profesjonalna Usługa | Wroclaw",
    },
    {
      property: "og:description",
      content:
        "Profesjonalna naprawa okularów w Twoim mieście. Szybka i dokładna obsługa.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://naprawa-okularow.online" },
    {
      property: "og:image",
      content: "https://www.twojastrona.pl/og-image.jpg",
    },
  ],
});
</script>
