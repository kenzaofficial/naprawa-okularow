<template>
  <header class="header">
    <v-container class="header__container">
      <v-logo :is-logo-full="isLogoFull" />
      <button
        class="header__burger"
        :class="{ 'header__burger--active': isMenuOpen }"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <span class="header__burger-line"></span>
      </button>
      <nav
        class="header__navigation"
        :class="{ 'header__navigation--active': isMenuOpen }"
      >
        <ul class="header__menu-list">
          <li
            v-for="(menuItem, index) in menuItems"
            :key="index"
            class="header__menu-item"
          >
            <a class="header__menu-link" :href="menuItem.href">
              {{ menuItem.link }}
            </a>
          </li>
        </ul>
      </nav>
      <a class="header__contact-link" href="tel:+48881554779">
        <img src="@/public/icons/telefon.svg" alt="telefon" width="10" />
        +48 (815) 547-79</a
      >
      <ul class="header__social-list">
        <li
          v-for="(social, index) in socials"
          :key="index"
          class="header__social-item"
        >
          <a class="header__social-link" :href="social.href" target="_blank">
            <img :src="social.icon" :alt="social.alt" width="20" />
          </a>
        </li>
      </ul>
    </v-container>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import VLogo from "@/components/atoms/v-logo/VLogo.vue";
import VContainer from "@/components/atoms/v-container/VContainer.vue";

const isLogoFull = ref(false);

const updateLogoVisibility = () => {
  isLogoFull.value = window.matchMedia("(min-width: 360px)").matches;
};

onMounted(() => {
  updateLogoVisibility(); // Устанавливаем начальное значение
  window.addEventListener("resize", updateLogoVisibility); // Отслеживаем изменения размера
});

onUnmounted(() => {
  window.removeEventListener("resize", updateLogoVisibility); // Удаляем слушатель при уничтожении компонента
});

const menuItems = ref([
  { link: "Prośba", href: "#" },
  { link: "Kontakty", href: "#" },
  { link: "Galeria", href: "#" },
]);

const socials = ref([
  {
    href: "https://www.facebook.com/share/1H7LsA1kHv/?mibextid=LQQJ4d",
    icon: "./icons/facebook.svg",
    alt: "facebook",
  },
  {
    href: "https://www.instagram.com/naprawa_okularow?igsh=b2ljbmZrNTRxOHNv",
    icon: "./icons/instagram.svg",
    alt: "instagram",
  },
  {
    href: "https://wa.me/+48881554779",
    icon: "./icons/whatsapp.svg",
    alt: "whatsapp",
  },
  {
    href: "https://t.me/naprawa_okularow",
    icon: "./icons/telegram.svg",
    alt: "telegram",
  },
]);

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style>
.header {
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  min-height: 42px;
  align-items: center;
  border-bottom: 2px solid #ffffff1a;
  background: var(--base-gradient-01);
  z-index: 2;
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
}

.header__burger {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  order: 2;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 25px;
  height: 15px;
  position: relative;
}

.header__burger-line {
  display: block;
  width: 100%;
  height: 3px;
  border-radius: var(--default-radius);
  background-color: var(--color-primary);
  transition: 0.3s;
}

.header__burger::before,
.header__burger::after {
  position: absolute;
  content: "";
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--color-primary);
  z-index: 10;
  transition: 0.3s;
  border-radius: var(--default-radius);
}

.header__burger::before {
  top: 0;
}

.header__burger::after {
  bottom: 0;
}

.header__burger--active::before {
  transform: rotate(45deg) translate(5px, 5px);
}

.header__burger--active .header__burger-line {
  opacity: 0;
}

.header__burger--active::after {
  transform: rotate(-45deg) translate(4px, -4px);
}

.header__navigation {
  background-color: var(--bg-primary);
  position: absolute;
  right: 0;
  top: -500px;
  width: 100%;
  max-width: 300px;
  transition: 0.3s;
}

.header__navigation--active {
  padding-top: 40px;
  top: 0;
  border-bottom-left-radius: var(--default-radius);
  border-bottom-right-radius: var(--default-radius);
  overflow: hidden;
}

.header__menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: start;
  border-bottom: 5px solid var(--bg-tertiary);
}

.header__menu-item {
  font-size: 16px;
}

.header__menu-link {
  padding: 15px 10px;
  transition: 0.3s;
  width: 100%;
  border-bottom: 2px solid transparent;
}

.header__menu-link:hover {
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
}

.header__social-list {
  display: flex;
  align-items: center;
}

.header__contact-link {
  display: none;
  align-items: center;
  column-gap: 3px;
  color: var(--color-primary);
  font-size: 10px;
  transition: 0.3s;
}

.header__social-link {
  display: block;
  transition: 0.3s;
  padding: 3px;
}

@media (min-width: 400px) {
  .header__contact-link {
    column-gap: 5px;
    font-size: 14px;
  }

  .header__contact-link img {
    width: 15px;
  }

  .header__social-link img {
    width: 25px;
  }
  .header__social-link {
    padding: 5px;
  }
}

@media (min-width: 600px) {
  .header__social-list {
    gap: 15px;
  }
  .header__contact-link {
    display: flex;
  }
}

@media (min-width: 767px) {
  .header {
    padding: 10px 0;
  }
  .header__contact-link {
    font-size: 18px;
  }
}

@media (min-width: 998px) {
  .header__burger {
    display: none;
  }

  .header__navigation {
    display: flex;
    background-color: transparent;
    position: static;
    width: auto;
    max-width: none;
  }

  .header__menu-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: none;
  }

  .header__contact-link {
    font-size: 20px;
  }

  .header__contact-link:hover,
  .header__social-link:hover {
    transform: scale(1.1);
  }
}
</style>
