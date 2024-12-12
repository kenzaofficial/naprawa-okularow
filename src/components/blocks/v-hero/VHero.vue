<template>
  <div class="hero" :class="{ 'hero--visible': isVisible }">
    <v-container class="hero__container">
      <div class="hero__text">
        <h1 class="hero__title">Pilna Naprawa okularów</h1>
        <h2 class="hero__subtitle">Naprawiamy wszystkie uszkodzeńia</h2>
        <p class="hero__description">Na terenie całej Polski</p>
        <a class="hero__contact-link" href="tel:+48881554779">
          <img src="@/public/icons/telefon.svg" alt="telefon" width="20" />
          +48 (815) 547-79</a
        >
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import VContainer from "@/components/atoms/v-container/VContainer.vue";

// const checklistItems = ref([
//   "Możliwość pilnej naprawy",
//   "Naprawa zauszników",
//   "Naprawa flexów",
//   "Spawanie opraw metalowych",
//   "Lutowianie opraw plastikowych",
//   "Polerowanie oprawek",
// ]);

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

.hero__text {
  text-align: center;
}

.hero__title {
  font-size: 48px;
  color: var(--color-primary);
  font-weight: bold;
  margin-bottom: 10px;
}

.hero__subtitle {
  font-size: 36px;
  color: var(--color-primary);
  font-weight: 400;
  margin-bottom: 30px;
}

.hero__description {
  color: var(--color-primary);
  font-size: 18px;
  margin-bottom: 30px;
}

.hero__contact-link {
  display: flex;
  align-items: center;
  column-gap: 5px;
  justify-content: center;
  color: var(--color-primary);
  font-size: 18px;
  transition: 0.3s;
  text-decoration: underline;
}

/* .hero__checklist {
  list-style-type: none;
  padding-left: 0;
  text-align: left;
}

.hero__checklist-item::before {
  content: "✔";
  color: var(--color-primary);
  font-size: 20px;
  margin-right: 10px;
} */

@media (min-width: 767px) {
  .hero {
    padding: 80px 0 100px;
  }

  .hero__text {
    text-align: left;
  }

  .hero__title {
    font-size: 60px;
    margin-bottom: 10px;
  }

  .hero__subtitle {
    margin-bottom: 10px;
  }

  .hero__description {
    font-size: 24px;
  }

  .hero__contact-link {
    justify-content: flex-start;
  }

  /* .hero__checklist {
    font-size: 20px;
  }

  .hero__checklist-item:not(:last-child) {
    margin-bottom: 10px;
  } */
}

@media (min-width: 998px) {
  .hero__container {
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }

  .hero__title {
    font-size: 120px;
  }

  .hero__subtitle {
    font-size: 72px;
  }
}

.hero__container {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.hero--visible .hero__container {
  opacity: 1;
  transform: translateY(0);
}
</style>
