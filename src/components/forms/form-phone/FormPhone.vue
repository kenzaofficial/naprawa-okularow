<template>
  <form class="form-phone" @submit.prevent="onSubmit" method="POST">
    <div class="form-phone__inner">
      <div class="form-phone__field">
        <v-input
          placeholder="Введите номер телефона"
          class="form-phone__input" />
        <checkbox-agreement
          text="Согласен с правилами обработки персональных данных, правилами пользования сервисом и получением чеков на внутреннюю почту сервиса." />
      </div>
      <v-button text="Продолжить" class="form-phone__submit-button"></v-button>
    </div>
  </form>
</template>
<script>
import VButton from '@/components/atoms/v-button/VButton.vue'
import VInput from '@/components/atoms/v-input/VInput.vue'
import CheckboxAgreement from '@/components/atoms/checkbox-agreement/CheckboxAgreement.vue'

export default {
  name: 'FormPhone',
  components: {
    VButton,
    VInput,
    CheckboxAgreement,
  },
}
</script>

<style>
.form-phone__input {
  margin-bottom: 15px;
}

@media (min-width: 767px) {
  .form-phone__input {
    margin-bottom: 0;
    min-height: 60px;
  }
  .form-phone__inner {
    display: grid;
    column-gap: 8px;
    grid-template-columns: 1fr 320px;
  }
  .form-phone__submit-button {
    align-self: flex-start;
  }
}
</style>
