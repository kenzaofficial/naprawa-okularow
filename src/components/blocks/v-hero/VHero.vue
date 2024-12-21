<template>
  <div class="hero" :class="{ 'hero--visible': isVisible }">
    <v-container class="hero__container">
      <div class="hero__text">
        <h1 class="hero__title">Ekspresowa Naprawa okularów</h1>
        <h2 class="hero__subtitle">Naprawiamy wszystkie uszkodzeńia</h2>
        <p class="hero__description">Na terenie całej Polski</p>
        <div class="hero__contacts">
          <a class="hero__contact-link" href="tel:+48881554779">
            <img src="@/public/icons/telefon.svg" alt="telefon" width="20" />
            +48 (815) 547-79</a
          >
          <a
            class="hero__reviews-link"
            target="_blank"
            href="https://www.google.com/search?sca_esv=eab14d77fff45731&sxsrf=ADLYWIIN8O3N10C_evj46bkj6NvvZbS39Q:1734281444430&uds=ADvngMjcH0KdF7qGWtwTBrP0nt7dUa4_jJMN3YeYI0BiCc94Z_aQg6xDJWTKKPMMt2ljeaVgjyfndZqxcKBYs8X25djPHbFx7iLwQq7JZ3A_dl6Dqvc8OdBVXR_guz2MtjS5HJDvlHMoWDSESkCgEbwloRR3dCANiA&si=ACC90nzZwgO0P4Qu3-A0NldYnwAKwrAmvjJXmiihL2mEqps3A1lBqjFrkVXveYCIeG5HnY1pmQ7P2tdj04wFh0PsnS4jz1Gmv3qYyVnnSmGnzh9Go1TzDdk%3D&q=Naprawa+Okular%C3%B3w+pilna.+CH+Borek.+Repair+of+all+damage+to+glasses+%D0%9E%D1%82%D0%B7%D1%8B%D0%B2%D1%8B&sa=X&sqi=2&ved=2ahUKEwjy9L3rnaqKAxVMX_EDHVMAJgIQ3PALegQIVhAF&biw=1920&bih=911&dpr=1"
          >
            Nasze opinie w
            <div class="hero__google-logo">
              <span class="g-blue">G</span>
              <span class="o-red">o</span>
              <span class="o-yellow">o</span>
              <span class="g-blue">g</span>
              <span class="l-green">l</span>
              <span class="e-red">e</span>
            </div>
          </a>
          <a
            class="hero__address-link"
            href="https://maps.app.goo.gl/KUjSfp7xy2pU284F8"
            target="_blank"
            >Wroclaw, Centrum Handlowe Borek. ul. Hallera 52. lokal na przeciwko
            RESERVED Pn-Sb. 9.00-21.00
          </a>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import VContainer from "@/components/atoms/v-container/VContainer.vue";

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
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 30px;
}

.hero__contact-link {
  display: inline-flex;
  align-items: center;
  column-gap: 5px;
  margin-bottom: 20px;
  justify-content: center;
  color: var(--color-primary);
  font-size: 18px;
  transition: 0.3s;
  text-decoration: underline;
}

.hero__contact-link:hover {
  transform: scale(1.1);
}

.hero__reviews-link {
  display: block;
  text-align: center;
  padding: 10px;
  font-size: 18px;
  max-width: 400px;
  margin: 0 auto 20px;
  color: var(--text-secondary);
  background-color: var(--text-primary);
  border-radius: var(--default-radius);
  transition: 0.3s;
}

.hero__reviews-link:hover {
  background-color: var(--color-primary);
  color: var(--text-secondary);
}

.hero__google-logo {
  display: inline;
  font-weight: 600;
}
.g-blue {
  color: #4285f4; /* Синий */
}

.o-red {
  color: #ea4335; /* Красный */
}

.o-yellow {
  color: #fbbc05; /* Желтый */
}

.l-green {
  color: #34a853; /* Зеленый */
}

.e-red {
  color: #ea4335; /* Красный */
}

.hero__address-link {
  color: var(--text-primary-opacity);
  transition: 0.3s;
}

.hero__address-link:hover {
  color: var(--color-primary);
}

@media (min-width: 767px) {
  .hero {
    padding: 80px 0 100px;
  }

  .hero__container {
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
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

  .hero__contacts {
    max-width: 400px;
  }

  .hero__contact-link {
    justify-content: flex-start;
  }

  .hero__reviews-link {
    font-size: 22px;
    padding: 15px;
  }
}

@media (min-width: 998px) {
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
