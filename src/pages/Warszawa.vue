<template>
    <v-hero city="Warszawa" />
    <other-city/>
    <v-services />
  </template>
  
  <script setup lang="ts">
  import {definePageMeta, useHead} from "#imports";
  import VHero from "~/components/blocks/v-hero/VHero.vue";
  import OtherCity from "~/components/blocks/other-city/OtherCity.vue";
  import VServices from "~/components/blocks/v-services/VServices.vue";
  
  definePageMeta({
    layout: "default",
  });
  
  useHead({
    title: "Naprawa Okularów Warszawa - Serwis Okularów",
    meta: [
      {
        name: "description",
        content:
          "Pilna naprawa okularów w Warszawie. Szybka i profesjonalna naprawa okularów. Wymiana zawiasów, lutowanie oprawek, naprawa flexów i inne usługi. Skontaktuj się z nami!",
      },
      {
        name: "author",
        content: "Pilna Naprawa Okularów",
      },
    ],
  });
  </script>