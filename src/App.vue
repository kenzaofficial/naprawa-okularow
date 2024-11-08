<template>
  <v-layout title="naprawa okularow">
    <form-client title="wypełnij formularz" />
  </v-layout>
</template>

<script>
import VLayout from './components/v-layout/VLayout.vue'
import FormClient from './components/forms/form-client/FormClient.vue'

export default {
  name: 'HomePage',
  components: { FormClient, VLayout },
}
</script>

<style>
#app {
  font-family: var(--font-main);
  text-align: center;
  background-color: var(--main-background);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
