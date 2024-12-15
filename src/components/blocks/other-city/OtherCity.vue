<template>
  <div class="other-city">
    <v-title text="Nie jesteś z Wrocławia?" />
    <v-container class="other-city__content">
      <img
        class="other-city__inpost-logo"
        src="./inpost.png"
        alt="dostawa paczkomatem inPost"
        width="100"
      />
      <p class="other-city__text">
        Mieszkasz poza Wrocławiem? Obsługujemy klientów w całej Polsce! Możesz
        wysłać swoje okulary do naprawy za pomocą paczkomatu inPost. Wygodnie,
        szybko i bezpiecznie!
        <span class="other-city__post-address"
          >Inpost. WRO 10B Hallera 52, 53-324 Wrocław UWAGA !!! Proszę umieścić
          swój numer telefonu w etui.
          <b>Wysyłka zwrotna jest bezpłatna!</b></span
        >
      </p>
    </v-container>
  </div>
</template>
<script setup>
import VContainer from "~/components/atoms/v-container/VContainer.vue";
import VTitle from "~/components/atoms/v-title/VTitle.vue";
</script>
<style>
.other-city {
  padding: 20px 0;
}

.other-city__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.other-city__inpost-logo {
  margin-bottom: 10px;
}

.other-city__text {
  text-align: left;
  line-height: 1.3;
  font-size: 20px;
}

.other-city__post-address {
  display: grid;
  margin-top: 10px;
  font-size: 16px;
  color: var(--color-primary);
  text-align: right;
  max-width: 300px;
  margin-left: auto;
}

.other-city__post-address b {
  text-decoration: underline;
}

@media (min-width: 767px) {
  .other-city__content {
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
  }

  .other-city__inpost-logo {
    margin-bottom: 0;
  }

  .other-city__text {
    font-size: 24px;
  }
  .other-city__post-address {
    text-align: left;
    max-width: none;
    font-size: 20px;
  }
}
@media (min-width: 998px) {
  .other-city__inpost-logo {
    max-width: 300px;
    width: 100%;
  }
}
</style>
