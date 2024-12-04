<template>
  <div class="services">
    <v-container>
    <h3 class="services__title">Nasze usługi</h3>
    <ul class="services__list">
      <li
        v-for="(serviceItem, index) in Services"
        :key="index"
        class="services__item"
      >
        <service-card :text="serviceItem.text" :img-path="serviceItem.path" />
      </li>
    </ul>
    </v-container>
  </div>
</template>

<script setup>
import VContainer from "~/components/atoms/v-container/VContainer.vue";
import ServiceCard from "../../atoms/service-card/ServiceCard.vue";
import example01 from "./images/example_01.jpg";
import example02 from "./images/example_02.jpg";
import example03 from "./images/example_03.jpg";
import example04 from "./images/example_04.jpg";
import example05 from "./images/example_05.jpg";
import example06 from "./images/example_06.jpg";

const Services = ref([
  { text: "212", path: example01 },
  { text: "21sdsad2", path: example02 },
  { text: "212222222222222", path: example03 },
  { text: "21dsfsdfdsfdsasdasd2", path: example04 },
  { text: "212ghghnnh2", path: example05 },
  { text: "21dfvbcv 2", path: example06 },
]);
</script>

<style>
.services {padding: 20px 0}

.services__list {
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 20px;
}
</style>
