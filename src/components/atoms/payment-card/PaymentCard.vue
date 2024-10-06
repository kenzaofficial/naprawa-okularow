<template>
  <div class="payment-card">
    <span class="payment-card__sum-amount">
      {{ sum.amount }} ₽ в {{ sum.per }}
    </span>
    <h4 class="payment-card__title">{{ title }}</h4>
    <ul class="payment-card-advantages-list">
      <li
        v-for="(benefit, index) in benefits"
        :key="index"
        class="payment-card-advantages-item">
        {{ benefit }}
      </li>
    </ul>
    <p class="payment-card__subtitle">{{ subtitle }}</p>
    <v-button text="Подключить" class="payment-card__button" />
  </div>
</template>

<script>
import VButton from '@/components/atoms/v-button/VButton.vue'
export default {
  name: 'PaymentCard',
  components: {
    VButton,
  },
  props: {
    sum: {
      type: Object,
      default: () => ({
        amount: 123,
        per: 'day',
      }),
    },
    title: {
      type: String,
      default: 'default card title',
    },
    benefits: {
      type: Array,
      default: () => ['lox', 'чмо'],
    },
    subtitle: {
      type: String,
      default: 'default card subtitle',
    },
  },
}
</script>

<style>
.payment-card {
  display: flex;
  flex-direction: column;
  padding: 10px 25px 25px;
  text-align: left;
  height: 100%;
}
.payment-card__sum-amount {
  display: inline-block;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px;
  background: var(
    --gradient-base,
    linear-gradient(to right, var(--color-orange-01), var(--color-yellow-01))
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.payment-card__title {
  margin-bottom: 15px;
  text-transform: uppercase;
}
.payment-card-advantages-list {
  margin-bottom: 15px;
}
.payment-card-advantages-item {
  padding-left: 30px;
  position: relative;
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
  color: var(--color-gray-02);
}
.payment-card-advantages-item:not(:last-child) {
  margin-bottom: 20px;
}
.payment-card-advantages-item::before {
  content: '';
  position: absolute;
  left: 5px;
  top: -3px;
  transform: rotate(45deg);
  width: 10px;
  height: 13px;
  border: solid var(--color-green-03);
  border-width: 0 2px 2px 0;
  transition: 0.2s;
}
.payment-card__button {
  margin-top: auto;
}
.payment-card__subtitle {
  margin-bottom: 15px;
  text-align: center;
  font-size: 10px;
  line-height: 14px;
  font-weight: 700;
  color: var(--color-gray-01);
}
@media (min-width: 767px) {
  .payment-card__sum-amount {
    font-size: 28px;
    margin-bottom: 20px;
  }
  .payment-card {
    padding: 30px 50px;
  }
  .payment-card__title {
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
  }
  .payment-card-advantages-list {
    margin-bottom: 30px;
    padding: 0 30px;
  }
  .payment-card-advantages-item {
    font-size: 18px;
  }
  .payment-card__subtitle {
    margin-bottom: 20px;
    padding: 0 15px;
    font-size: 12px;
  }
}
</style>
