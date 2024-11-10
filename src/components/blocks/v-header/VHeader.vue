<template>
  <header class="header">
    <v-container class="header__container">
      <v-logo />
      <button
        class="header__burger"
        :class="{ 'header__burger--active': isMenuOpen }"
        aria-label="Toggle menu"
        @click="toggleMenu">
        <span class="header__burger-line"></span>
      </button>
      <nav class="header__navigation">
        <ul class="header__menu-list">
          <li
            cl
            v-for="(menuItem, index) in menuItems"
            :key="index"
            class="header__menu-item">
            <a class="header__menu-link" :href="menuItem.href">
              {{ menuItem.link }}
            </a>
          </li>
        </ul>
      </nav>
    </v-container>
  </header>
</template>

<script>
import { ref } from 'vue'
import VLogo from '@/components/atoms/v-logo/VLogo.vue'
import VContainer from '../../atoms/v-container/VContainer.vue'

export default {
  name: 'VHeader',
  components: {
    VLogo,
    VContainer,
  },
  setup() {
    const menuItems = ref([
      { link: 'Zgłoszenie do naprawy', href: '#form-client' },
      { link: 'Nasze kontakty', href: '#contacts' },
      { link: 'Usługi', href: '#services' },
      { link: 'Galeria', href: '#gallery' },
    ])

    const isMenuOpen = ref(false)

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    return {
      menuItems,
      isMenuOpen,
      toggleMenu,
    }
  },
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 10px 0;
  background-color: #faef8a;
  position: relative;
  z-index: 10;
}

.header__container {
  display: flex;
  align-items: center;
}

.header__burger {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  margin-left: auto;
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
  background-color: var(--color-dark-main);
  transition: 0.3s;
}

.header__burger::before,
.header__burger::after {
  position: absolute;
  content: '';
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--color-dark-main);
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

.header__burger--active.header__burger::before {
  transform: rotate(45deg) translate(5px, 5px);
}

.header__burger--active .header__burger-line {
  opacity: 0;
}

.header__burger--active.header__burger::after {
  transform: rotate(-45deg) translate(4px, -4px);
}

.header__navigation {
  background-color: rgb(255, 243, 172);
  position: absolute;
  right: 100%;
  width: 100%;
}

.header__burger--active ~ .header__navigation {
  padding-top: 40px;
  max-width: 300px;
  top: 0;
  right: 0;
  border-bottom-left-radius: var(--default-radius);
  border-bottom-right-radius: var(--default-radius);
}

.header__burger--active ~ .header__navigation::before {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  height: 40px;
  width: 100%;
  background-color: var(--color-blue-01);
  z-index: 2;
}

.header__menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: start;
  color: black;
}

.header__menu-item {
  font-size: 14px;
  padding: 10px;
  box-shadow: inset 0 -2px 4px 1px #0000004d;
}

@media (min-width: 767px) {
  .header__burger {
    display: none; /* <-- скрываю бургер-меню на больших экранах */
  }
  .header__navigation {
    display: flex; /* <-- делаю меню видимым на больших экранах */
    background-color: transparent; /* <-- убираю цвет */
    position: static;
    width: auto;
  }
  .header__menu-list {
    display: flex;
  }
}
</style>
