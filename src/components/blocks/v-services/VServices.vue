<template>
  <div class="services" id="Galeria">
    <v-container>
      <v-title text="Galeria"/>
      <v-slider :slides="services">
        <template #default="{ slide }">
          <service-card :img="slide" />
        </template>
      </v-slider>
    </v-container>
  </div>
</template>

<script setup>
import VTitle from "~/components/atoms/v-title/VTitle.vue";
import VContainer from "~/components/atoms/v-container/VContainer.vue";
import ServiceCard from "../../atoms/service-card/ServiceCard.vue";
import VSlider from "~/components/organisms/v-slider/VSlider.vue";
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
</style>
