<template>
  <v-layout
    mode="secondary"
    title="Способы оплаты"
    subtitle="Оплата премиум доступа возможна банковской картой, мобильным телефоном или Яндекс Деньгами."
    additional-subtitle="Если у вас есть вопросы по оплате исполнительных производств, свяжитесь с нашей технической поддержкой по email:  support@hphelp.me"
    has-additional-footer
    hero-img-name="payment-method-hero">
    <payment-method-list :payment-methods="PaymentMethods" />
  </v-layout>
</template>

<script>
import { ref } from 'vue'
import VLayout from '@/components/v-layout/VLayout.vue'
import PaymentMethodList from '@/components/blocks/payment-method-list/PaymentMethodList.vue'

export default {
  name: 'PayMethodPage',
  components: {
    VLayout,
    PaymentMethodList,
  },
  setup() {
    const PaymentMethods = ref([
      {
        title: 'Банковские карты',
        description:
          'Для оплаты премиум доступа с использованием банковской карты, вам понадобится номер карты, срок действия и CVV код. К оплате принимаются карты любых банков Российской Федерации.',
        cards: [
          { imgName: 'visa', cardAlt: 'Виза' },
          { imgName: 'mir', cardAlt: 'Мир' },
          { imgName: 'mastercard', cardAlt: 'Мастеркард' },
        ],
      },
      {
        title: 'Электронные деньги',
        description:
          'Вы можете оплатить премиум доступ используя электронный кошелек в системе YooMoney. Кошелек можно зарегистрировать на сайте платежной системы.',
        cards: [{ imgName: 'youmoney', cardAlt: 'Юмани' }],
      },
      {
        title: 'Мобильные операторы',
        description:
          'Для оплаты премиума при помощи мобильного телефона, введите номер в соответствующее поле, на ваш номер мобильного телефона будет отправлен код для подтверждения оплаты премиум доступа.',
        cards: [
          { imgName: 'mtc', cardAlt: 'МТС' },
          { imgName: 'megafon', cardAlt: 'Мегафон' },
          { imgName: 'beeline', cardAlt: 'Билайн' },
        ],
      },
    ])

    return {
      PaymentMethods,
    }
  },
}
</script>
