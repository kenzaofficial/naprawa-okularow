<template>
  <form @submit.prevent="sendMessage" class="form-client">
    <fieldset class="form-client__fieldset">
      <legend class="form-client__legend">{{ title }}</legend>
      <v-input
        class="form-client__field"
        v-model="form.name"
        label="Imię"
        type="text"
        placeholder="Twoje imię"
        required />
      <v-input
        class="form-client__field"
        v-model="form.email"
        label="Email"
        type="email"
        placeholder="Twój e-mail"
        required />
      <v-textarea
        class="form-client__field"
        v-model="form.message"
        placeholder="Tutaj możesz opisać podział okularów" />
      <file-upload
        class="form-client__field"
        @files-uploaded="handleFileUpload" />
      <v-button type="submit" text="Wyślij aplikację" />
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
      name: '',
      email: '',
      message: '',
    })
    const photos = ref([])

    const handleFileUpload = (files) => {
      photos.value = files
    }

    const sendMessage = async () => {
      const token = '8106494538:AAGxISQenkDbjtfISzIeYuNwXz4FgIpng-Y'
      const chatId = '-4547095465'
      const text = `Имя: ${form.value.name}\nEmail: ${form.value.email}\nСообщение: ${form.value.message}`

      try {
        // Отправка текста
        await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
          chat_id: chatId,
          text: text,
        })

        // Отправка фотографий
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
      handleFileUpload,
      sendMessage,
    }
  },
}
</script>

<style scoped>
.form-client {
  max-width: 500px;
  width: 100%;
  box-shadow: 0 1px 3px 1px var(--color-white);
  padding: 20px;
  border-radius: var(--default-radius);
  background-color: var( --color-light-transparent);
}
.form-client__fieldset {
  border: none;
}

.form-client__field {
  margin-bottom: 10px;
}

.form-client__legend {
  color: var(--color-dark-main);
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}
</style>
