<template>
  <div class="textarea">
    <label class="textarea__label" for="textarea">Napisz do nas</label>
    <textarea
      id="textarea"
      class="textarea__field"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "VTextarea",
  props: {
    placeholder: String,
  },
};
</script>

<style>
.textarea__field {
  width: 100%;
  display: inline-block;
  padding: 10px;
  font-size: 16px;
  border: 1px solid var(--text-primary);
  background-color: var(--bg-primary);
  border-radius: var(--default-radius);
  overflow-x: hidden;
  resize: vertical;
}

.textarea__field:focus-within {
  border-color: var(--color-primary);
  outline: none;
}

.textarea:focus-within .textarea__label {
  color: var(--color-primary);
}

.textarea__label {
  display: block;
  text-align: left;
  padding-left: 5px;
  margin-bottom: 2px;
  font-size: 12px;
}

.textarea__field::placeholder {
  font-size: 12px;
  color: var(--text-primary-opacity);
}
@media (min-width: 998px) {
  .textarea__field, .textarea__label,
  .textarea__field::placeholder {
    font-size: 20px;
  }
}
</style>
