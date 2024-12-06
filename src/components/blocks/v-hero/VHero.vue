<template>
  <div class="hero" :class="{ 'hero--visible': isVisible }">
    <v-container class="hero__container">
      <div class="hero__text">
        <h1 class="hero__title">Naprawa okularów</h1>
        <h2 class="hero__subtitle">
          Myślisz, że Twoje okulary są nie do naprawienia? Udowodnimy, że się
          mylisz! Naprawiamy szybko, sprawnie i profesjonalnie.
        </h2>
      </div>
      <ul class="hero__checklist">
        <li
            class="hero__checklist-item"
            v-for="(item, index) in checklistItems"
            :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import VContainer from "@/components/atoms/v-container/VContainer.vue";

const checklistItems = ref([
  "Możliwość pilnej naprawy",
  "Naprawa zauszników",
  "Naprawa flexów",
  "Spawanie opraw metalowych",
  "Lutowianie opraw plastikowych",
  "Polerowanie oprawek",
]);

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 1);
});
</script>

<style>
.hero {
  padding: 50px 0;
  position: relative;
  z-index: 1;
   background: var(--body) url("@/assets/images/hero-background.webp") center /
   cover no-repeat;
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

.hero__title {
  font-size: 48px;
  color: var(--color-primary);
  font-weight: bold;
  margin-bottom: 15px;
}

.hero__subtitle {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 20px;
}

.hero__checklist {
  list-style-type: none;
  padding-left: 0;
  text-align: left;
}

.hero__checklist-item::before {
  content: "✔";
  color: var(--color-primary);
  font-size: 20px;
  margin-right: 10px;
}

@media (min-width: 767px) {
  .hero {
    padding: 100px 0;
  }

  .hero__title {
    font-size: 60px;
    margin-bottom: 10px;
  }
  .hero__checklist {
    font-size: 20px;
  }
  .hero__checklist-item:not(:last-child) {
    margin-bottom: 10px;
  }
}
@media (min-width: 998px) {
  .hero__container {
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }
  .hero__text {
    max-width: 600px;
  }
  .hero__title {
    font-size: 120px;
  }
  .hero__subtitle {
    font-size: 18px;
  }
}
.hero__container
 {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.hero--visible .hero__container {
  opacity: 1;
  transform: translateY(0);
}
</style>
