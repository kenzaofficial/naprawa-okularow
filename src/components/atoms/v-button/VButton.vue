<template>
  <button :type="type" class="button" :class="{ 'button--wide': isWide }">
    {{ text }}
  </button>
</template>

<script setup>

defineProps({
  isWide: {
    type: Boolean,
    default: true,
  },
  text: {
    type: String,
    default: "buttonText",
  },
  type: {
    type: String,
    default: "button",
  },
});

</script>

<style>
.button {
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  padding: 15px;
  line-height: 1;
  color: var(--text-secondary);
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary-intense);
  border-radius: var(--default-radius);
  transition: 0.3s;
}

.button:hover {
  color: var(--color-primary);
  background-color: var(--body);
}

.button:active {
  color: var(--text-primary);
  border-color: var(--color-primary);
  box-shadow: inset 0 0 3px 1px var(--color-primary);
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
