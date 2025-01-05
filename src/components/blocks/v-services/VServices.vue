<template>
  <div class="services" id="Galeria">
    <v-container>
      <v-title text="Galeria"/>
      <ul class="services__list">
        <li
          v-for="(serviceItem, index) in services"
          :key="index"
          class="services__item"
        >
          <service-card :img="serviceItem" />
        </li>
      </ul>
    </v-container>
  </div>
</template>

<script setup>
import VTitle from "~/components/atoms/v-title/VTitle.vue";
import VContainer from "~/components/atoms/v-container/VContainer.vue";
import ServiceCard from "../../atoms/service-card/ServiceCard.vue";
import example01 from "./images/example_01.jpg";
import example02 from "./images/example_02.jpg";
import example03 from "./images/example_03.jpg";
import example04 from "./images/example_04.jpg";
import example05 from "./images/example_05.jpg";

const services = ref([
  { text: "Zausznik: wymiana", path: example01 },
  { text: "Zausznik: spawanie końcówki", path: example02 },
  { text: "Zausznik: lutowanie", path: example03 },
  { text: "Flex: wymiana", path: example04 },
  { text: "Flex: lutowanie", path: example05 },
]);
</script>

<style>
.services {
  padding: 20px 0;
}

.services__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}
</style>
