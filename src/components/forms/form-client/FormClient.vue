<template>
  <form :key="form.resetKey" @submit.prevent="sendMessage" class="form-client">
    <fieldset class="form-client__fieldset">
      <legend class="form-client__legend">{{ title }}</legend>
      <v-input
        :error="errors.errorPhoneNumberText"
        class="form-client__field"
        v-model="form.phoneNumber"
        label="Telefon*"
        type="tel"
        placeholder="Twój numer telefonu"
      />
      <v-input
        :error="errors.errorFullNameText"
        class="form-client__field"
        v-model="form.fullName"
        label="Imię i Nazwisko*"
        placeholder="Twoje Imię i Nazwisko"
      />
      <v-input
        :error="errors.errorInpostNumberText"
        class="form-client__field"
        v-model="form.inpostNumber"
        label="Numer paczkomatu Inpost*"
        placeholder="Wpisz numer pazckomatu Inpost"
      />
      <v-input
        class="form-client__field"
        v-model="form.city"
        label="Miasto"
        placeholder="Twoje Miasto"
      />
      <v-textarea
        class="form-client__field"
        v-model="form.message"
        placeholder="Tutaj możesz opisać podział okularów"
      />
      <file-upload
        :error="errors.errorPhotoUpload"
        class="form-client__field"
        @change-photos="photos = $event"
      />
      <v-button :disabled="loading" type="submit" text="Aplikuj do nas" />
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
  emits: ['sent'],

  setup(_, { emit }) {
    const form = ref({
      phoneNumber: "",
      message: "",
      city: "",
      fullName: "",
      inpostNumber: "",
      resetKey: 0,
    });
    const photos = ref([]);
    const loading = ref(false);
    const submitted = ref(false);

    const resetForm = () => {
      form.value.phoneNumber = "";
      form.value.message = "";
      form.value.city = "";
      form.value.fullName = "";
      form.value.inpostNumber = "";
      form.value.resetKey++;
      photos.value = [];
    };

    const errors = computed(() => {
      if (!submitted.value) return {};

      const errorFullNameText = form.value.fullName.trim() ? '' : 'Pole jest wymagane';
      const errorInpostNumberText = form.value.inpostNumber.trim() ? '' : 'Pole jest wymagane';
      const errorPhoneNumberText = 
        !form.value.phoneNumber.trim()
          ? 'Pole jest wymagane'
          : form.value.phoneNumber.trim().length !== 15
          ? 'Numer telefonu musi mieć dokładnie 11 cyfr'
          : '';
      const errorPhotoUpload = photos.value.length ? '' : 'Musisz dodać co najmniej jedno zdjęcie';

      return {
        errorFullNameText,
        errorInpostNumberText,
        errorPhoneNumberText,
        errorPhotoUpload,
        hasError: errorFullNameText || errorInpostNumberText || errorPhoneNumberText || errorPhotoUpload,
      };
    });

    const sendMessage = async () => {
      submitted.value = true;
      if (errors.value.hasError) return;

      const token = "8106494538:AAGxISQenkDbjtfISzIeYuNwXz4FgIpng-Y";
      const chatId = "-4547095465";
      const text = `Телефон: ${form.value.phoneNumber}\nИмя и Фамилия: ${form.value.fullName}\nПачкомат: ${form.value.inpostNumber}\nСообщение: ${form.value.message}\nГород: ${form.value.city}`;

      try {
        loading.value = true;
        const requests = [];
        requests.push(
          axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
            chat_id: chatId,
            text: text,
          }
        ));
        
        photos.value.forEach((photo) => {
          const formData = new FormData();
          formData.append("chat_id", chatId);
          formData.append("photo", photo);
          requests.push(
            axios.post(
              `https://api.telegram.org/bot${token}/sendPhoto`,
              formData,
              { headers: { "Content-Type": "multipart/form-data" } }
            )
          );
        });
        await Promise.all(requests);
        resetForm();
        emit('sent');
        submitted.value = false;
      } catch (error) {
        emit('error');
        console.error("Error:", error.response ? error.response.data : error.message);
      } finally {
        loading.value = false;
      }
    };

    return { form, loading, photos, sendMessage, errors };
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
