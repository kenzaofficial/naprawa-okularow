<template>
  <form
    ref="form"
    class="form-client"
    @submit.prevent="submitForm"
    method="POST"
    id="form-client">
    <fieldset class="form-client__fieldset">
      <legend class="form-client__legend">{{ props.title }}</legend>
      <div class="form-client__field">
        <v-input
          v-model="formData.name"
          placeholder="Введите Имя"
          class="form-client__input" />
      </div>
      <v-button
        type="submit"
        text="Продолжить"
        class="form-client__submit-button"></v-button>
    </fieldset>
  </form>
</template>
<script setup>
import VButton from '@/components/atoms/v-button/VButton.vue'
import VInput from '@/components/atoms/v-input/VInput.vue'
import axios from 'axios'
import { ref, defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})

const formData = ref({
  name: '',
})

const submitForm = async () => {
  try {
    const response = await axios.post(
      'https://naprawa-okularow.online/send_email.php',
      formData.value,
    )
    console.log(response.data)
    alert('Форма успешно отправлена!')
  } catch (error) {
    console.error('Ошибка при отправке формы:', error)
    alert('Произошла ошибка при отправке.')
  }
}
</script>

<style>
.form-client__input {
  margin-bottom: 15px;
}

.form-client__legend {
  margin-bottom: 10px;
}

@media (min-width: 767px) {
  .form-client__input {
    margin-bottom: 0;
    min-height: 60px;
  }
  .form-client__fieldset {
    border: none;
    display: grid;
    column-gap: 8px;
    grid-template-columns: 1fr 320px;
  }
  .form-client__submit-button {
    align-self: flex-start;
  }
}
</style>
