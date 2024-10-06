<template>
  <v-layout
    mode="thirdly"
    title="ПРЕМИУМ ДОСТУП"
    subtitle="Для получения информации оплатите доступ"
    has-additional-footer
    hero-img-name="premium-hero">
    <v-premium
      title="Полный доступ включает в себя:"
      :benefits="premiumBenefits" />
  </v-layout>
</template>

<script>
import VLayout from '@/components/v-layout/VLayout.vue'
import VPremium from '@/components/blocks/v-premium/VPremium.vue'

export default {
  name: 'PremiumPage',
  components: {
    VLayout,
    VPremium,
  },
  setup() {
    const premiumBenefits = [
      'Поиск маршрутов по всем проверенным источникам',
      'Актуальный рейтинг перевозчиков',
      'Информация о изменениях в расписании',
      'Гарантия конфиденциальности',
    ]
    return {
      premiumBenefits,
    }
  },
}
</script>
