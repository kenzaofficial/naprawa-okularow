<template>
  <v-layout>
    <v-hero />
  </v-layout>
</template>

<script>
import VHero from "./components/blocks/v-hero/VHero.vue";
import VLayout from "./components/v-layout/VLayout.vue";

export default {
  name: "HomePage",
  components: { VHero, VLayout},
};
</script>
