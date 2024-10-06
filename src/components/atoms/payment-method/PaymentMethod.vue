<template>
  <div class="payment-method">
    <h4 class="payment-method__title">{{ title }}</h4>
    <p class="payment-method__description">{{ description }}</p>
    <ul class="payment-method__payment-card-list">
      <li
        v-for="(card, index) in cards"
        :key="index"
        class="payment-metods__payment-card-item">
        <img
          :src="
            require(`@/assets/images/payment-methods-icons/${card.imgName}.svg`)
          "
          :alt="card.alt" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'PaymentMethod',
  props: {
    title: {
      type: String,
      default: 'default string',
    },
    description: {
      type: String,
      default: 'default description',
    },
    cards: {
      type: Array,
      default: () => [
        { imgName: 'mir', cardAlt: 'мир' },
        { imgName: 'visa', cardAlt: 'виза' },
        { imgName: 'mastercard', cardAlt: 'мастеркард' },
      ],
    },
  },
}
</script>
<style>
.payment-method {
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 100%;
}
.payment-method__title {
  font-size: 16px;
  margin-bottom: 10px;
}
.payment-method__description {
  color: var(--color-gray-02);
  margin-bottom: 15px;
  font-size: 12px;
}
.payment-method__payment-card-list {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
}

@media (min-width: 767px) {
  .payment-method {
    padding: 40px 50px 20px;
  }
  .payment-method__title {
    font-size: 20px;
    margin-bottom: 15px;
  }
  .payment-method__description {
    font-size: 16px;
  }
  .payment-method__payment-card-list {
    justify-content: center;
    margin-bottom: 0;
    margin-top: auto;
  }
}
</style>
