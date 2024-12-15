<template>
  <form @submit.prevent="validateAndSend" class="form-client">
    <fieldset class="form-client__fieldset">
      <legend class="form-client__legend">{{ title }}</legend>
      <v-input
        :error="errorPhoneNumberText"
        class="form-client__field"
        v-model="form.phoneNumber"
        label="Telefon"
        type="tel"
        placeholder="Twój numer telefonu"
      />
      <v-textarea
        class="form-client__field"
        v-model="form.message"
        placeholder="Tutaj możesz opisać podział okularów"
      />
      <file-upload
        :error="ErrorPhotoUpload"
        class="form-client__field"
        @files-uploaded="handleFileUpload"
      />
      <v-button type="submit" text="Aplikuj do nas" />
    </fieldset>
  </form>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import VInput from "../../atoms/v-input/VInput.vue";
import VTextarea from "../../atoms/v-textarea/VTextarea.vue";
import VButton from "../../atoms/v-button/VButton.vue";
import FileUpload from "../../atoms/file-upload/FileUpload.vue";

export default {
  name: "FormClient",
  components: {
    VInput,
    VTextarea,
    VButton,
    FileUpload,
  },
  props: {
    title: {
      type: String,
      default: "fill the form",
    },
  },
  setup() {
    const form = ref({
      phoneNumber: "",
      message: "",
    });
    const photos = ref([]);
    const error = ref(""); // Реактивное свойство для ошибки
    const ErrorPhotoUpload = ref(""); // Реактивное свойство для ошибки
    const errorPhoneNumberText = ref(""); // Реактивное свойство для ошибки

    const handleFileUpload = (files) => {
      photos.value = files;
    };

    const validateAndSend = () => {
      let hasError = false; // Флаг, указывающий, есть ли ошибки

      // Проверка номера телефона
      if (!form.value.phoneNumber.trim()) {
        errorPhoneNumberText.value = "Pole jest wymagane";
        hasError = true;
      } else if (form.value.phoneNumber.trim().length !== 17) {
        errorPhoneNumberText.value =
          "Numer telefonu musi mieć dokładnie 11 cyfr";
        hasError = true;
      } else {
        errorPhoneNumberText.value = ""; // Очищаем ошибку, если номер валиден
      }

      // Проверка наличия фотографий
      if (!photos.value.length) {
        ErrorPhotoUpload.value = "Musisz dodać co najmniej jedno zdjęcie";
        hasError = true;
      } else {
        ErrorPhotoUpload.value = ""; // Очищаем ошибку, если фотографии загружены
      }

      // Если есть ошибки, не отправляем форму
      if (hasError) {
        return;
      }

      sendMessage();
    };

    const sendMessage = async () => {
      const token = "8106494538:AAGxISQenkDbjtfISzIeYuNwXz4FgIpng-Y";
      const chatId = "-4547095465";
      const text = `Телефон: ${form.value.phoneNumber}\nСообщение: ${form.value.message}`;
      try {
        await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
          chat_id: chatId,
          text: text,
        });
        for (const photo of photos.value) {
          const formData = new FormData();
          formData.append("chat_id", chatId);
          formData.append("photo", photo);

          await axios.post(
            `https://api.telegram.org/bot${token}/sendPhoto`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
        }
        alert("Сообщение и фотографии отправлены!");
      } catch (error) {
        console.error(
          "Ошибка при отправке:",
          error.response ? error.response.data : error.message
        );
        alert("Ошибка при отправке.");
      }
    };
    return {
      form,
      photos,
      error,
      handleFileUpload,
      validateAndSend,
      errorPhoneNumberText,
      ErrorPhotoUpload,
    };
  },
};
</script>

<style scoped>
.form-client {
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  background-color: var(--bg-primary-opacity);
  border-radius: var(--default-radius);
  box-shadow: 0 0 5px 2px var(--color-primary);
}
.form-client__fieldset {
  border: none;
}

.form-client__field {
  margin-bottom: 10px;
}

.form-client__legend {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}

@media (min-width: 998px) {
  .form-client {
    max-width: 900px;
    padding: 40px;
  }

  .form-client__field {
    margin-bottom: 20px;
  }
}
</style>
