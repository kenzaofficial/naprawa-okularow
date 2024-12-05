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
.services__title {
  position: relative;
  font-size: 28px;
  font-weight: 400;
  line-height: 2.4;
  letter-spacing: 0.2em;
  text-align: center;
  margin-bottom: 30px;
}

.services__title:before {
  position: absolute;
  content: "usługi";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  font-weight: 900;
  letter-spacing: 0.18em;
  line-height: 1.5;
  color: var(--bg-card);
  text-transform: uppercase;
  z-index: -1;
}
.services__title:after {
  content: "";
  position: absolute;
  width: 200px;
  height: 2px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-primary);
}
.services__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

@media (min-width: 767px) {
  .services__title {
    font-size: 42px;
  }
  .services__title:before {
    font-size: 84px;
  }
}
</style>
