<template>
  <div class="input">
    <label class="input__label" for="input">{{ label }}</label>
    <input
      id="input"
      :type="type"
      class="input__field"
      :placeholder="placeholder"
      v-if="type === 'tel'"
      v-mask="type === 'tel' ? '+48 (###) ###-###' : ''"
      @input="$emit('update:modelValue', $event.target.value)" />

    <input
      v-else
      id="input"
      :type="type"
      class="input__field"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  name: 'VInput',
  directives: {
    mask,
  },
  props: {
    type: String,
    placeholder: String,
    label: String,
  },
}
</script>

<style>
.input {
  text-align: start;
}
.input__label {
  display: block;
  padding-left: 5px;
  margin-bottom: 2px;
  font-size: 12px;
  color: var(--color-black);
}
.input__field {
  width: 100%;
  display: inline-block;
  border: none;
  padding: 10px;
  font-size: 10px;
  border-radius: var(--default-radius);
  background-color: var(--background-input-text);
  color: var(--color-light-main);
}
.input__field:focus-within {
  outline: 1px solid var(--color-blue-01);
}
.input__field::placeholder {
  font-size: 12px;
  color: var(--color-gray-02);
}
@media (min-width: 767px) {
  .input__field {
    font-size: 14px;
  }
}
</style>
