<template>
  <v-layout
    mode="secondary"
    title="Тарифы на услуги"
    subtitle="Регистрация на сайте бесплатная, осуществление мониторинга зарасписанием по добавленным маршрутам осуществляется при активном режиме Премиум доступа для учетной записи."
    additional-subtitle="Премиум доступ позволяет вести ежедневный мониторинг за обновлением расписаниый по выбранным направленим в указанные даты. Премиум доступ позволяет добавить до 10 объектов мониторинга автобусных маршрутов."
    has-additional-footer
    hero-img-name="tariff-hero">
    <payment-card-list :payment-cards="paymentCards" />
  </v-layout>
</template>
<script>
import VLayout from '@/components/v-layout/VLayout.vue'
import PaymentCardList from '@/components/blocks/payment-card-list/PaymentCardList.vue'
export default {
  name: 'TariffPage',
  components: {
    VLayout,
    PaymentCardList,
  },
  setup() {
    const paymentCards = [
      {
        sum: { amount: 399, per: 'месяц' },
        title: 'премиум подписка',
        benefits: [
          'Премиум на 30 дней',
          'Оплата раз в месяц',
          'Без лимитов на запросы',
        ],
        subtitle:
          'Премиум доступ активируется при оплате зарегистрированным пользователем платежа в размере 399 рублей в месяц.',
      },
      {
        sum: { amount: '30', per: 'день' },
        title: 'единоразовая оплата',
        benefits: [
          'Премиум на 1 сутки',
          'Оплата раз в сутки',
          'Без лимитов на запросы',
        ],
        subtitle:
          'Платеж проводится единовременно, либо путем активирования подписки посредством мобильного телефона с ежедневным списанием 30 рублей.',
      },
    ]
    return {
      paymentCards,
    }
  },
}
</script>

<style></style>
