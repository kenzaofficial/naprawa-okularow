<template>
  <form @submit.prevent="sendMessage">
    <v-input v-model="form.name" type="text" placeholder="Ваше имя" required />
    <input v-model="form.email" type="email" placeholder="Ваш email" required />
    <textarea
      v-model="form.message"
      placeholder="Ваше сообщение"
      required></textarea>
    <input type="file" @change="handleFileUpload" multiple />
    <button type="submit">Отправить</button>
  </form>
</template>

<script>
import axios from 'axios'
import VInput from '../../atoms/v-input/VInput.vue'
export default {
  components: {
    VInput,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      photos: [],
    }
  },
  methods: {
    handleFileUpload(event) {
      this.photos = Array.from(event.target.files)
    },
    async sendMessage() {
      const token = '8106494538:AAGxISQenkDbjtfISzIeYuNwXz4FgIpng-Y'
      const chatId = '-4547095465'
      const text = `Имя: ${this.form.name}\nEmail: ${this.form.email}\nСообщение: ${this.form.message}`

      try {
        // Отправка текста
        await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
          chat_id: chatId,
          text: text,
        })

        // Отправка фотографий
        for (const photo of this.photos) {
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
    },
  },
}
</script>

<style scoped>
/* Добавьте стили, если необходимо */
</style>
