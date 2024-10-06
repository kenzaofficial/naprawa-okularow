<template>
  <ul class="payment-method-list">
    <li
      v-for="(paymentMethod, index) in paymentMethods"
      :key="index"
      class="payment-method-list__item">
      <payment-method
        :cards="paymentMethod.cards"
        :title="paymentMethod.title"
        :description="paymentMethod.description" />
    </li>
  </ul>
</template>
<script>
import PaymentMethod from '@/components/atoms/payment-method/PaymentMethod.vue'
export default {
  name: 'PaymentMethodList',
  components: {
    PaymentMethod,
  },
  props: {
    paymentMethods: {
      type: Array,
      default: () => [
        {
          title: 'способ номер 1',
          description: 'описание 1',
          cards: [{ imgName: 'megafon', cardAlt: 'мегафон' }],
        },
        { title: 'способ номер 2', description: 'описание 2' },
      ],
    },
  },
}
</script>
<style>
@media (min-width: 767px) {
  .payment-method-list {
    display: grid;
    grid-template-columns: repeat(3, 340px);
    gap: 10px 70px;
  }
}
</style>
