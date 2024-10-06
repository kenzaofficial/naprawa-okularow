<template>
  <ul class="payment-card-list">
    <li
      v-for="(paymentCard, index) in paymentCards"
      :key="index"
      class="payment-card-list__item">
      <payment-card
        :sum="paymentCard.sum"
        :title="paymentCard.title"
        :benefits="paymentCard.benefits"
        :subtitle="paymentCard.subtitle" />
    </li>
  </ul>
</template>
<script>
import PaymentCard from '@/components/atoms/payment-card/PaymentCard.vue'
export default {
  name: 'PaymentCardList',
  components: {
    PaymentCard,
  },
  props: {
    paymentCards: {
      type: Array,
      default: () => [
        {
          sum: { amount: '2', per: 'year' },
          title: 'поменял',
          benefits: ['one', 'two'],
        },
      ],
    },
  },
}
</script>
<style>
.payment-card-list {
  padding: 20px 0;
}
.payment-card-list__item:not(:last-child) {
  margin-bottom: 20px;
}

@media (min-width: 767px) {
  .payment-card-list {
    padding: 50px 0;
    display: grid;
    grid-template-columns: repeat(2, 450px);
    gap: 20px 40px;
    justify-content: center;
  }
  .payment-card-list__item:not(:last-child) {
    margin-bottom: 0;
  }
}
</style>
