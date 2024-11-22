<template>
  <header class="header">
    <v-container class="header__container">
      <v-logo />
      <button
        class="header__burger"
        :class="{ 'header__burger--active': isMenuOpen }"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <span class="header__burger-line"></span>
      </button>
      <nav class="header__navigation">
        <ul class="header__menu-list">
          <li
            cl
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
      <a class="header__contact-link" href="tel:+48881554779"
        >+48 (815) 547-79</a
      >
    </v-container>
  </header>
</template>

<script>
import { ref } from "vue";
import VLogo from "@/components/atoms/v-logo/VLogo.vue";
import VContainer from "../../atoms/v-container/VContainer.vue";

export default {
  name: "VHeader",
  components: {
    VLogo,
    VContainer,
  },
  setup() {
    const menuItems = ref([
      { link: "Prośba", href: "#form-client" },
      { link: "Kontakty", href: "#contacts" },
      { link: "Usługi", href: "#services" },
      { link: "Galeria", href: "#gallery" },
    ]);

    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      menuItems,
      isMenuOpen,
      toggleMenu,
    };
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 2px solid #ffffff1a;
  /* padding: 10px 0; */
  background: var(--base-gradient-01);
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
}

.header__burger {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  order: 2;
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
  background-color: var(--bg-primary);
  position: absolute;
  right: 0;
  top: -500px;
  width: 100%;
  max-width: 300px;
  transition: 0.3s;
}

.header__burger--active ~ .header__navigation {
  padding-top: 40px;
  top: 0;
  border-bottom-left-radius: var(--default-radius);
  border-bottom-right-radius: var(--default-radius);
  overflow: hidden;
}

.header__burger--active ~ .header__navigation::before {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  width: 100%;
  background-color: var(--base-gradient-01);
  height: 40px;
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

.header__contact-link {
  order: 1;
  color: var(--color-primary);
  transition: 0.3s;
  padding: 10px;
}
.header__contact-link:hover {
  transform: scale(1.1);
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
    max-width: none;
  }
  .header__menu-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: none;
  }
  .header__contact-link {
    display: block;
  }
}
</style>
