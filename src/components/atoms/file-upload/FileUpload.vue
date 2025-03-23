<template>
  <div class="file-upload">
    <label for="file-upload" class="file-upload__button">
      Dodaj zdjęcia okularów
    </label>
    <span v-if="error" class="file-upload__error">{{ error }}</span>
    <input
      :key="files.length"
      accept=".png, .jpeg, .jpg"
      id="file-upload"
      type="file"
      @change="onFileChange"
      multiple
    />
    <div v-if="filePreviews.length" class="file-upload__previews">
      <div
        v-for="(file, index) in filePreviews"
        :key="index"
        class="file-upload__preview"
      >
        <button class="file-upload__delete" type="button" @click="deleteFile(index)" />
        <img
          v-if="file.type.startsWith('image/')"
          :src="file.url"
          :alt="file.name"
        />
        <p class="file-upload__name">{{ file.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";
defineProps({
  error: {
    type: String,
    default: '',
  },
});
const emit = defineEmits();

const files = ref([]);
const filePreviews = computed(() => files.value.map((file) => ({
  name: file.name,
  type: file.type,
  url: URL.createObjectURL(file),
})));

const onFileChange = (event) => {
  const filesArray = Array.from(event.target.files);
  files.value = filesArray;
  emit('change-photos', filesArray);
};

const deleteFile = (index) => {
  files.value.splice(index, 1);
  emit('change-photos', files.value);
};

onBeforeUnmount(() => {
  filePreviews.value.forEach((file) => URL.revokeObjectURL(file.url));
});
</script>

<style scoped>

.file-upload__error {
  color: var(--color-error);
  font-size: 14px;
  margin-top: 5px;
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
}

.file-upload__error::before {
  content: "!";
  color: var(--color-error);
  border: 1px solid var(--color-error);
  font-weight: 600;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  margin-top: 4px;
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

.file-upload__delete {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: red;
  transition: transform 0.1s linear;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 12px;
    background-color: white;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}

.file-upload__delete:hover {
  transform: scale(1.3);
}

.file-upload__name {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (min-width: 998px) {
  .file-upload__button {
    padding: 20px;
    font-size: 24px;
  }

  .file-upload__error {
    font-size: 18px;
  }

  .file-upload__error::before {
    font-size: 10px;
    width: 12px;
    height: 12px;
  }
}
</style>
