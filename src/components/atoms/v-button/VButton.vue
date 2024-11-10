<template>
  <button :type="type" class="button" :class="{ 'button--wide': isWide }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    isWide: {
      type: Boolean,
      default: true,
    },
    text: {
      type: String,
      default: 'buttonText',
    },
    type: {
      type: String,
      default: 'button',
    },
  },
}
</script>

<style>
.button {
  font-family: 'Golos text', sans-serif;
  display: inline-block;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  padding: 15px;
  line-height: 1;
  background-color: var(--background-success);
  border-radius: var(--default-radius);
  transition: 0.3s;
}

.button:hover {
  background-color: var(--background-success-hover);
}

.button:active {
  background-color: var(--background-success-active);
}

.button--wide {
  width: 100%;
}

@media (min-width: 767px) {
  .button {
    font-size: 20px;
    padding: 20px;
  }
}
</style>
