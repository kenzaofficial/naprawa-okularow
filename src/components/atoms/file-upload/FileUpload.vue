<template>
  <div class="file-upload">
    <label for="file-upload" class="file-upload__button">
      Dodaj zdjęcia okularów
    </label>
    <input id="file-upload" type="file" @change="onFileChange" multiple />
    <div v-if="filePreviews.length" class="file-upload__previews">
      <div
        v-for="(file, index) in filePreviews"
        :key="index"
        class="file-upload__preview">
        <img
          v-if="file.type.startsWith('image/')"
          :src="file.url"
          :alt="file.name" />
        <p>{{ file.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue'

export default {
  name: 'FileUpload',
  setup(_, { emit }) {
    const filePreviews = ref([])

    const onFileChange = (event) => {
      const files = Array.from(event.target.files)
      filePreviews.value = files.map((file) => ({
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
      }))
      emit('files-uploaded', files)
    }

    onBeforeUnmount(() => {
      filePreviews.value.forEach((file) => URL.revokeObjectURL(file.url))
    })

    return {
      filePreviews,
      onFileChange,
    }
  },
}
</script>

<style scoped>
.file-upload {
  display: block;
}

.file-upload__button {
  width: 100%;
  display: inline-block;
  background-color: var(--background-upload-button);
  padding: 10px 20px;
  cursor: pointer;
  border-radius: var(--default-radius);
  font-size: 16px;
  text-align: center;
  transition: background-color 0.3s;
}

.file-upload__button:hover {
  background-color: var(--background-upload-button-hover);
}
.file-upload__button:active {
  background-color: var(--background-upload-button-active);
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
