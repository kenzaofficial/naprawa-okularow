<template>
  <div class="textarea">
    <label class="textarea__label" for="textarea">Napisz do nas</label>
    <textarea
      id="textarea"
      class="textarea__field"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'VTextarea',
  props: {
    placeholder: String,
  },
}
</script>

<style>
.textarea__field {
  width: 100%;
  display: inline-block;
  padding: 13px;
  font-size: 14px;
  background-color: var(--background-input-text);
  border-radius: var(--default-radius);
  overflow-x: hidden;
  resize: vertical;
}
.textarea__field:focus-within {
  outline: 1px solid var(--bg-tertiary);
}
.textarea__label {
  display: block;
  text-align: left;
  padding-left: 5px;
  margin-bottom: 2px;
  font-size: 12px;
  color: var(--text-secondary);
}
.textarea__field::placeholder {
  color: var(--text-primary);
}
@media (min-width: 767px) {
  .textarea {
    font-size: 20px;
  }
}
</style>
