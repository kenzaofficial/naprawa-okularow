<template>
  <v-layout>
    <v-hero />
  </v-layout>
</template>

<script>
import VHero from './components/blocks/v-hero/VHero.vue'
import VLayout from './components/v-layout/VLayout.vue'

export default {
  name: 'HomePage',
  components: { VHero, VLayout },
}
</script>

<style>
#app {
  font-family: var(--font-main);
  text-align: center;
  display: flex;
  flex-direction: column;
  color: var(--color-text-light);
  min-height: 100vh;
  background-color: var(--main-background);
  margin: 0 auto;
}
</style>
