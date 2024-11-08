<template>
  <input
    :type="type"
    class="input"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
export default {
  name: 'VInput',
  props: {
    type: String,
    placeholder: String,
  },
}
</script>

<style>
.input {
  width: 100%;
  display: inline-block;
  padding: 13px;
  font-size: 14px;
  border: 1px solid var(--color-gray-01);
}
.input::placeholder {
  color: var(--color-black-01);
}
@media (min-width: 767px) {
  .input {
    font-size: 20px;
  }
}
</style>
