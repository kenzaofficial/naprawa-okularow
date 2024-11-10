<template>
  <div class="hero">
    <div class="hero__text">
      <h2 class="hero__title">Naprawa wszystkich uszkodzeń okularów</h2>
      <span class="hero__description">Tego nie naprawią u optyka!</span>
    </div>
    <v-container class="hero__container">
      <form-client title="Prośba o naprawę okularów" />
    </v-container>
  </div>
</template>

<script>
import FormClient from '../../forms/form-client/FormClient.vue'
import VContainer from '../../atoms/v-container/VContainer.vue'
export default {
  name: 'VHero',
  components: { FormClient, VContainer },
}
</script>

<style>
.hero {
  padding: 0 0 50px;
  background: url('../../../assets/images/hero-background.webp') center / cover
    no-repeat;
}

.hero__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero__text {
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  background-color: #313131cc;
}

.hero__description {
  display: block;
  font-weight: 700;
  width: 100%;
  font-size: 10px;
  text-align: right;
}
</style>
