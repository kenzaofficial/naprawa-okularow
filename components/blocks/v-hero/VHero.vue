<template>
  <div class="hero">
    <div class="hero__text">
      <h2 class="hero__title">Naprawa wszystkich uszkodzeń okularów</h2>
    </div>
    <v-container class="hero__container">
      <form-client title="Prośba o naprawę okularów" />
    </v-container>
  </div>
</template>

<script>
import VContainer from "@/components/atoms/v-container/VContainer.vue";
import FormClient from "@/components/forms/form-client/FormClient.vue";

export default {
  name: "VHero",
  components: { VContainer, FormClient },
};
</script>

<style scoped>
.hero {
  padding: 100px 0 50px;
  background:var(--body) url("@/assets/images/hero-background.jpeg") center / cover
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
  background-color: var(--bg-secondary-opacity);
  text-align: center;
}

.hero__title {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.hero__description {
  display: block;
  font-weight: 700;
  width: 100%;
  font-size: 10px;
  text-align: right;
}

@media (max-width: 767px) {
  .hero {
    padding: 50px 0 30px;
  }

  .hero__title {
    font-size: 18px;
  }

  .hero__description {
    font-size: 8px;
  }
}
</style>
