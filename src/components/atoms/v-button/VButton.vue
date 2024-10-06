<template>
  <button type="button" class="button" :class="{ 'button--wide': isWide }">
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
  background: var(--gradient-base);
}

.button:hover {
  background: var(--gradient-hover);
}

.button:active {
  background: var(--gradient-active);
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
