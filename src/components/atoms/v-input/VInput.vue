<template>
  <div class="input" :class="{ 'input--error': error }">
    <label class="input__label" for="input">{{ label }}</label>
    <input
      id="input"
      :type="type"
      class="input__field"
      :placeholder="placeholder"
      v-if="type === 'tel'"
      v-mask="'+48 (###) ###-###'"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <input
      v-else
      id="input"
      :type="type"
      class="input__field"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <span v-if="error" class="input__error">{{ error }}</span>
  </div>
</template>

<script>
import VueTheMask from "vue-the-mask";

export default {
  name: "VInput",
  directives: {
    mask: VueTheMask.mask,
  },
  props: {
    type: String,
    placeholder: String,
    label: String,
    error: String,
  },
};
</script>

<style scoped>
.input {
  text-align: start;
}
.input__label {
  display: block;
  padding-left: 5px;
  margin-bottom: 2px;
  font-size: 12px;
}
.input__field {
  width: 100%;
  display: inline-block;
  padding: 10px;
  font-size: 10px;
  border: 1px solid var(--text-primary);
  border-radius: var(--default-radius);
  background-color: transparent;
  color: var(--text-primary);
}
.input__field:focus-within {
  border-color: var(--color-primary);
  outline: none;
}
.input:focus-within .input__label {
  color: var(--color-primary);
}
.input__field::placeholder {
  font-size: 12px;
  color: var(--text-primary-opacity);
}
.input__error {
  color: var(--color-error);
  font-size: 10px;
  margin-top: 5px;
}
.input--error .input__field {
  border: 1px solid var(--color-error);
}
.input--error .input__label {
  color: var(--color-error);
}
.input__error {
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
@media (min-width: 767px) {
  .input__field {
    font-size: 14px;
  }
}
</style>
