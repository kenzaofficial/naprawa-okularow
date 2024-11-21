<template>
  <v-layout>
    <v-hero />
    <v-slider />
  </v-layout>
</template>

<script>
import VHero from './components/blocks/v-hero/VHero.vue'
import VLayout from './components/v-layout/VLayout.vue'
import VSlider from './components/atoms/v-slider/VSlider.vue'

export default {
  name: 'HomePage',
  components: { VHero, VLayout, VSlider },
}
</script>

<style>
#app {
  font-family: var(--font-main);
  text-align: center;
  display: flex;
  flex-direction: column;
  color: var(--text-primary);
  min-height: 100vh;
  background-color: var(--body);
  margin: 0 auto;
}
</style>
