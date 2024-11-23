<template>
  <footer class="footer">
    <v-logo />
    <ul class="footer__list">
      <li class="footer__item" v-for="(item, index) in items" :key="index">
        <a class="footer__link" :href="item.href">{{ item.text }}</a>
      </li>
    </ul>
  </footer>
</template>

<script setup>
import VLogo from "@/components/atoms/v-logo/VLogo.vue";

defineProps({
  items: {
    type: Array,
    default: () => [
      { text: "Тарифы", href: "/tariff" },
      { text: "Полититика конфидециальности", href: "#" },
      { text: "Способы оплаты", href: "/paymethod" },
      { text: "Пользовательское соглашение", href: "#" },
    ],
  },
});
</script>

<style scoped>
.footer {
  padding: 20px 0;
}

.footer__list {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  margin-top: 20px;
  column-gap: 5px;
}
.footer__link {
  font-size: 12px;
  font-weight: 500;
  transition: 0.3s;
}
.footer__link:hover {
  color: var(--bg-tertiary);
}

@media (min-width: 767px) {
  .footer {
    padding: 40px 0;
  }
  .footer__list {
    margin-top: 0;
    margin-left: auto;
    grid-template-columns: repeat(4, auto);
    column-gap: 30px;
  }
  .footer__link {
    font-size: 16px;
  }
}
</style>
