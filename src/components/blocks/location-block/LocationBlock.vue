<template>
  <section class="location-block">
    <shop-list :list="shopList" />
    <v-map :markers="markers" :center-coordinates="centerCoordinates" />
  </section>
</template>

<script setup>
import ShopList from "../../organisms/shop-list/ShopList.vue";
import VMap from "~/components/organisms/v-map/VMap.vue";

const markers = ref([
  { lat: 51.088018738902036, lng: 16.99839199590372, text: 'aleja Generała Józefa Hallera 52' },
  { lat: 51.130706250056114, lng: 17.040409014874797, text: 'Zakładowa 2/4' },
]);

const centerCoordinates = ref({ lat: 51.10916321407935, lng: 17.032055777865775 });

const shopList = ref([
  {
    letterOption: 'A',
    name: 'Pilna naprawa okularów',
    address: 'aleja Generała Józefa Hallera 52',
    phone: '881 554 779',
    openingHours: {
      nd: { from: null, to: null },
      pn: { from: 9, to: 17 },
      wt: { from: 9, to: 17 },
      śr: { from: 9, to: 17 },
      cz: { from: 9, to: 17 },
      pt: { from: 9, to: 17 },
      sb: { from: 9, to: 17 },
    },
    coordinates: { x: 51.088018738902036, y: 16.99839199590372 },
  },
  {
    letterOption: 'B',
    name: 'Pilna naprawa okularów',
    address: 'Zakładowa 2/4',
    phone: '452 928 540',
    openingHours: {
      nd: { from: null, to: null },
      pn: { from: 10, to: 17 },
      wt: { from: 10, to: 17 },
      śr: { from: 10, to: 17 },
      cz: { from: 10, to: 17 },
      pt: { from: 10, to: 17 },
      sb: { from: 10, to: 17 },
    },
    coordinates: { x: 51.130706250056114, y: 17.040409014874797 },
  },
]);
</script>

<style>
.location-block {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
