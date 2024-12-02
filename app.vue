<template>
  <v-layout>
    <v-container>
      <ul class="service-list">
        <li>
          <service-card />
        </li>
        <li>
          <service-card />
        </li>
        <li>
          <service-card />
        </li>
        <li>
          <service-card />
        </li>
      </ul>
    </v-container>

    <v-hero />
    <form-client />
  </v-layout>
</template>

<script>
import VContainer from "./components/atoms/v-container/VContainer.vue";
import VHero from "./components/blocks/v-hero/VHero.vue";
import ServiceCard from "./components/atoms/service-card/ServiceCard.vue";
import VLayout from "./components/v-layout/VLayout.vue";
import FormClient from "./components/forms/form-client/FormClient.vue";

export default {
  name: "HomePage",
  components: { VHero, VLayout, FormClient, ServiceCard, VContainer },
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
<style>
.service-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
}
.service-list li {
}
</style>
