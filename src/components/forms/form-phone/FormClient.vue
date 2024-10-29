<template>
  <form
    ref="form"
    class="form-client"
    @submit.prevent="onFormSend"
    method="POST"
    id="form-client">
    <fieldset class="form-client__fieldset">
      <legend class="form-client__legend">{{ title }}</legend>
      <div class="form-client__field">
        <v-input
          placeholder="Введите номер телефона"
          class="form-client__input" />
      </div>
      <v-button
        type="submit"
        text="Продолжить"
        class="form-client__submit-button"></v-button>
    </fieldset>
  </form>
</template>
<script>
import VButton from '@/components/atoms/v-button/VButton.vue'
import VInput from '@/components/atoms/v-input/VInput.vue'
import { ref } from 'vue'

export default {
  name: 'FormClient',
  components: {
    VButton,
    VInput,
  },
  props: {
    title: {
      type: String,
      default: 'default title',
    },
  },
  setup() {
    const form = ref(null)

    const onFormSend = async () => {
      if (form.value) {
        const formData = new FormData(form.value)

        try {
          let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData,
          })
          console.log('Ответ сервера:', await response.text())
        } catch (error) {
          console.error('Ошибка при отправке формы:', error)
        }

        console.log('Форма отправлена:', form.value)
      } else {
        console.error('Ссылка на форму не найдена')
      }
    }

    return {
      form,
      onFormSend,
    }
  },
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
