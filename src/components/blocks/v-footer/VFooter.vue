<template>
  <footer class="footer">
    <div class="footer__primary-information">
      <v-logo />
      <ul class="footer__list">
        <li class="footer__item" v-for="(item, index) in items" :key="index">
          <a class="footer__link" :href="item.href">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import VLogo from '@/components/atoms/v-logo/VLogo.vue'
export default {
  name: 'VFooter',
  components: {
    VLogo,
  },
  props: {
    items: {
      type: Array,
      default: () => [
        { text: 'Тарифы', href: '/tariff' },
        { text: 'Полититика конфидециальности', href: '#' },
        { text: 'Способы оплаты', href: '/paymethod' },
        { text: 'Пользовательское соглашение', href: '#' },
      ],
    },
    hasAdditionalInfo: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
.footer {
  padding: 20px 0;
}

.footer__primary-information:not(:last-child) {
  margin-bottom: 30px;
}
.footer__additional-information {
  font-size: 10px;
  line-height: 16px;
  color: var(--color-gray-03);
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
  color: var(--color-violet-01);
}
.footer__contacts {
  display: block;
  margin-top: 20px;
}
.footer__contact-link {
  color: var(--color-orange-02);
}
.footer__contact-link:hover {
  color: var(--color-violet-01);
}
@media (min-width: 767px) {
  .footer {
    padding: 40px 0;
  }
  .footer__primary-information {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  .footer__primary-information:not(:last-child) {
    margin-bottom: 40px;
  }
  .footer__additional-information {
    text-align: left;
    font-size: 12px;
    line-height: 20px;
    color: var(--color-gray-01);
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
