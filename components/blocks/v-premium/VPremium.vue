<template>
  <div class="premium">
    <h4 class="premium__title">{{ title }}</h4>
    <ul class="premium__benefits-list">
      <li
        v-for="(benefit, index) in benefits"
        :key="index"
        class="premium__benefits-item">
        {{ benefit }}
      </li>
    </ul>
    <v-button text="Оплатить 5 рублей" />
    <checkbox-agreement
      text="Согласен с правилами обработки персональных данных, правилами пользования сервисом и получением чеков на внутреннюю почту сервиса. Стоимость 30 ₽ в сутки." />
  </div>
</template>

<script>
import VButton from '@/components/atoms/v-button/VButton.vue'
import CheckboxAgreement from '@/components/atoms/checkbox-agreement/CheckboxAgreement.vue'

export default {
  name: 'VPremium',
  components: {
    VButton,
    CheckboxAgreement,
  },
  props: {
    title: {
      type: String,
      default: 'default title',
    },
    benefits: {
      type: Array,
      default: () => ['one', 'two'],
    },
  },
}
</script>

<style>
.premium {
  padding: 30px 0 50px;
  text-align: left;
}
.premium__title {
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 700;
}
.premium__benefits-list {
  padding: 10px;
  margin-bottom: 30px;
}
.premium__benefits-item {
  position: relative;
  font-size: 12px;
  padding-left: 30px;
  line-height: 1;
}
.premium__benefits-item:not(:last-child) {
  margin-bottom: 10px;
}
.premium__benefits-item::before {
  content: '';
  position: absolute;
  left: 5px;
  top: -3px;
  transform: rotate(45deg);
  width: 10px;
  height: 13px;
  border: solid var(--background-success);
  border-width: 0 2px 2px 0;
  transition: 0.2s;
}
</style>
