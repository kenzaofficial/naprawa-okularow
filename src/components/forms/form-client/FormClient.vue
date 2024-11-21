<template>
  <form @submit.prevent="validateAndSend" class="form-client">
    <fieldset class="form-client__fieldset">
      <legend class="form-client__legend">{{ title }}</legend>
      <v-input
        :error="error"
        class="form-client__field"
        v-model="form.phoneNumber"
        label="Telefon"
        type="tel"
        placeholder="Twój numer telefonu" />
      <v-textarea
        class="form-client__field"
        v-model="form.message"
        placeholder="Tutaj możesz opisać podział okularów" />
      <file-upload
        class="form-client__field"
        @files-uploaded="handleFileUpload" />
      <v-button type="submit" text="Aplikuj do nas" />
    </fieldset>
  </form>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import VInput from '../../atoms/v-input/VInput.vue'
import VTextarea from '../../atoms/v-textarea/VTextarea.vue'
import VButton from '../../atoms/v-button/VButton.vue'
import FileUpload from '../../atoms/file-upload/FileUpload.vue'

export default {
  name: 'FormClient',
  components: {
    VInput,
    VTextarea,
    VButton,
    FileUpload,
  },
  props: {
    title: {
      type: String,
      default: 'fill the form',
    },
  },
  setup() {
    const form = ref({
      phoneNumber: '',
      message: '',
    })
    const photos = ref([])
    const error = ref('') // Реактивное свойство для ошибки

    const handleFileUpload = (files) => {
      photos.value = files
    }

    const validateAndSend = () => {
      if (!form.value.phoneNumber.trim()) {
        error.value = 'pole jest wymagane'
        return
      }
      // Проверка длины номера телефона
      if (form.value.phoneNumber.trim().length !== 17) {
        error.value = 'Numer telefonu musi mieć dokładnie 11 cyfr'
        return
      }
      // Очистка ошибки перед отправкой
      error.value = ''
      sendMessage()
    }

    const sendMessage = async () => {
      const token = '8106494538:AAGxISQenkDbjtfISzIeYuNwXz4FgIpng-Y'
      const chatId = '-4547095465'
      const text = `Телефон: ${form.value.phoneNumber}\nСообщение: ${form.value.message}`
      try {
        await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
          chat_id: chatId,
          text: text,
        })
        for (const photo of photos.value) {
          const formData = new FormData()
          formData.append('chat_id', chatId)
          formData.append('photo', photo)

          await axios.post(
            `https://api.telegram.org/bot${token}/sendPhoto`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            },
          )
        }
        alert('Сообщение и фотографии отправлены!')
      } catch (error) {
        console.error(
          'Ошибка при отправке:',
          error.response ? error.response.data : error.message,
        )
        alert('Ошибка при отправке.')
      }
    }
    return {
      form,
      photos,
      error,
      handleFileUpload,
      validateAndSend,
    }
  },
}
</script>

<style scoped>
.form-client {
  max-width: 500px;
  width: 100%;
  padding: 20px;
  background-color: var(--bg-primary-opacity);
  border-radius: var(--default-radius);
  box-shadow: 0 1px 3px 1px var(--bg-primary-opacity);
}
.form-client__fieldset {
  border: none;
}

.form-client__field {
  margin-bottom: 10px;
}

.form-client__legend {
  color: var(--text-secondary);
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}
</style>
