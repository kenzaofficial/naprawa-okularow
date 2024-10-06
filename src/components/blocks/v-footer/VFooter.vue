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
    <p v-if="hasAdditionalInfo" class="footer__additional-information">
      Ввод номера телефона на сайте и нажатие кнопки "Получить код" инициирует
      запрос Сервиса соответствующего Оператора, позволяющего совершить оплату
      услуги. Каждый день со счета моего мобильного телефона будет списываться
      стоимость доступа пока действует подписка. В любой момент подписку можно
      отключить в личном кабинете. Стоимость доступа составляет 30 рублей (все
      налоги и комиссии включены) в сутки для абонентов Tele2. Для отключения
      подписки абонентам Теле2, необходимо отправить SMS сообщение с кодом СТОП
      на номер 2583. Стоимость доступа составляет 30 рублей (все налоги и
      комиссии включены) в сутки для абонентов ПАО «МегаФон». Для отключения
      подписки абонентам ПАО «МегаФон» необходимо отправить SMS сообщение с
      кодом СТОП RUDAT на номер 7522. Вводя телефон на сайте, пользователь
      принимает условия оферт: РНКО «Единая Касса», МегаФон, Теле2, Договор -
      публичная оферта. Нажимая кнопку «Получить код», Вы даете согласие на
      получение фискального чека на эл. почту: "ваш номер
      телефона@rudatingclub.com". Чтобы изменить адрес эл. почты, отправьте
      запрос с адресом на
      <a href="mailto:support@hphelp.me" class="footer__contact-link">
        | support@hphelp.me
      </a>
      Все права защищены. VIVA OOO.
      <span class="footer__contacts">
        Служба поддержки:
        <a href="tel:84951282655" class="footer__contact-link">
          8-495-128-2655
        </a>
        &nbsp;
        <a href="mailto:support@hphelp.me" class="footer__contact-link">
          support@hphelp.me
        </a>
      </span>
    </p>
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
