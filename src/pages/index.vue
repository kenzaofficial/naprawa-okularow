<template>
  <v-hero city="Wrocław" />
  <other-city/>
  <v-services />
  <modal-window
    :is-open="isOpen"
    button-text="Jasne"
    heading="Twoje zgłoszenie zostało wysłane!"
    text="Skontaktujemy się z Tobą w najbliższym czasie. Dziękujemy za zaufanie!"
    @close="isOpen = false"
  />
</template>

<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";

import ModalWindow from "~/components/atoms/confirm-window/ConfirmWindow.vue";
import VHero from "~/components/blocks/v-hero/VHero.vue";
import OtherCity from "~/components/blocks/other-city/OtherCity.vue";
import VServices from "~/components/blocks/v-services/VServices.vue";

definePageMeta({
  layout: "default",
});

const isOpen = ref(false);

useHead({
  title: "Naprawa Okularów Wrocław - Serwis Okularów",
  meta: [
    {
      name: "description",
      content:
        "Pilna naprawa okularów we Wrocławiu. Szybka i profesjonalna naprawa okularów. Wymiana zawiasów, lutowanie oprawek, naprawa flexów i inne usługi. Skontaktuj się z nami!",
    },
    {
      name: "author",
      content: "Pilna Naprawa Okularów",
    },
  ],
});
</script>