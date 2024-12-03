<template>
  <v-layout>
    <v-hero />
    <v-serivces />
    <form-client />
  </v-layout>
</template>

<script>
import VContainer from "./components/atoms/v-container/VContainer.vue";
import VHero from "./components/blocks/v-hero/VHero.vue";
import VLayout from "./components/v-layout/VLayout.vue";
import FormClient from "./components/forms/form-client/FormClient.vue";
import VSerivces from "./components/blocks/v-services/VSerivces.vue";

export default {
  name: "HomePage",
  components: {
    VHero,
    VLayout,
    FormClient,
    VContainer,
    VSerivces,
  },
  head() {
    return {
      title: "Главная страница - Мой сайт",
      meta: [
        {
          name: "description",
          content: "Добро пожаловать на главную страницу моего сайта.",
        },
        { name: "keywords", content: "главная, сайт, SEO, пример" },
      ],
    };
  },
};
</script>
