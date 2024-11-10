<template>
  <div class="input">
    <label class="input__label" for="input">{{ label }}</label>
    <input
      id="input"
      :type="type"
      class="input__field"
      :placeholder="placeholder"
      v-mask="type === 'tel' ? '+48 (###) ###-###' : ''"
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
  padding: 13px;
  font-size: 14px;
  border-radius: 2px;
  background-color: var(--background-input-text);
  color: var(--color-light-main);
}
.input__field:focus-within {
  outline: 1px solid var(--color-blue-01);
}
.input__field::placeholder {
  color: var(--color-gray-02);
}
@media (min-width: 767px) {
  .input__field {
    font-size: 20px;
  }
}
</style>
