<template>
  <div class="hero">
    <v-container class="hero__container">
      <div class="hero__text">
        <h1 class="hero__title">Naprawa wszystkich uszkodzeń okularów</h1>
        <h2 class="hero__subtitle">
          Myślisz, że Twoje okulary są nie do naprawienia? Udowodnimy, że się
          mylisz! Naprawiamy szybko, sprawnie i profesjonalnie.
        </h2>
      </div>
      <div class="hero__check">
        <h3 class="hero__check-title">Usługi:</h3>
        <ul class="hero__checklist">
          <li
            class="hero__checklist-item"
            v-for="(item, index) in checklistItems"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </v-container>
  </div>
</template>
<script setup>
import { ref } from "vue";
import VContainer from "@/components/atoms/v-container/VContainer.vue";

const checklistItems = ref([
  "Możliwość pilnej naprawy",
  "Naprawa zauszników",
  "Naprawa flexów",
  "Spawanie opraw metalowych",
  "Lutowianie opraw plastikowych",
  "Polerowanie oprawek",
]);
</script>

<style>
.hero {
  padding: 50px 0;
  position: relative;
  background: var(--body) url("@/assets/images/hero-background.jpeg") center /
    cover no-repeat;
  z-index: 1;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg-secondary-opacity);
  z-index: -1;
}

.hero__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero__text {
  padding: 0 10px;
  line-height: 1.4;
}

.hero__title {
  font-size: 32px;
  color: var(--color-primary);

  font-weight: bold;
  margin-bottom: 30px;
}

.hero__subtitle {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
}

.hero__check {
  width: 100%;
}
.hero__checklist {
  list-style-type: none;
  padding-left: 0;
  text-align: left;
}
.hero__check-title {
  margin-bottom: 10px;
  color: var(--color-primary);
}

.hero__checklist-item::before {
  content: "✔";
  color: var(--color-primary);
  font-size: 20px;
  margin-right: 10px;
}

@media (min-width: 500px) {
  .hero__container {
    flex-direction: row;
  }
  .hero__checklist {
    /* display: grid;
    grid-template-columns: repeat(2, auto); */
  }
}
@media (min-width: 767px) {
  .hero {
    padding: 100px 0;
  }

  .hero__text {
    text-align: left;
    max-width: 500px;
  }

  .hero__title {
    margin-bottom: 10px;
  }
}
</style>
