<template>
  <div class="file-upload">
    <label for="file-upload" class="file-upload__button">
      Dodaj zdjęcia okularów
    </label>
    <span v-if="error" class="input__error">{{ error }}</span>
    <input id="file-upload" type="file" @change="onFileChange" multiple />
    <div v-if="filePreviews.length" class="file-upload__previews">
      <div
        v-for="(file, index) in filePreviews"
        :key="index"
        class="file-upload__preview"
      >
        <img
          v-if="file.type.startsWith('image/')"
          :src="file.url"
          :alt="file.name"
        />
        <p>{{ file.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";
defineProps({
  error:{
    type:String,
    default:'222'
  },
});
const emit = defineEmits();
const filePreviews = ref([]);

const onFileChange = (event) => {
  const files = Array.from(event.target.files);
  filePreviews.value = files.map((file) => ({
    name: file.name,
    type: file.type,
    url: URL.createObjectURL(file),
  }));
  emit("files-uploaded", files);
};

onBeforeUnmount(() => {
  filePreviews.value.forEach((file) => URL.revokeObjectURL(file.url));
});
</script>

<style scoped>
.input__error {
  color: var(--color-error);
  font-size: 10px;
  margin-top: 5px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 2px;
}
.input__error::before {
  content: "!";
  color: var(--color-error);
  border: 1px solid var(--color-error);
  font-weight: 600;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.file-upload {
  display: block;
}

.file-upload__button {
  width: 100%;
  display: inline-block;
  color: var(--color-primary);
  padding: 10px 20px;
  cursor: pointer;
  background-color: var(--bg-secondary);
  border-radius: var(--default-radius);
  font-size: 16px;
  text-align: center;
  transition: background-color 0.3s;
  box-shadow: inset 0 0 3px 1px var(--color-tertiary);
}

.file-upload__button:hover {
  color: var(--text-secondary);
  background-color: var(--color-tertiary);
}

.file-upload__button:active {
  color: var(--text-primary);
  background-color: var(--bg-secondary);
  box-shadow: none;
}

.file-upload__previews {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.file-upload__preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
}

.file-upload__preview img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: var(--default-radius);
}

.file-upload__preview p {
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
  word-wrap: break-word;
}
</style>
