<template>
  <a href="/" class="logo">
    <img
      :src="isLogoFull ? logoLong : logoShort"
      alt="logo"
      class="logo__image"
      height="30"
    />
  </a>
</template>

<script setup>
import logoShort from "./logoIcons/logo_short.jpg";
import logoLong from "./logoIcons/logo_long.jpg";

defineProps({
  isLogoFull: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>

.logo__image {
  border-radius: var(--default-radius);
}
@media (min-width: 767px) {
  .logo__image {
    height: 50px;
  }
}
</style>
