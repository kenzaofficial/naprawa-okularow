<template>
  <a href="/" class="logo">
    <img
      src="@/assets/images/logo.jpg"
      alt="logo"
      class="logo__image"
      height="30"
    />
  </a>
</template>

<script setup>
defineOptions({
  name: "VLogo",
});
</script>

<style scoped>
.logo {
  display: inline-block;
  flex-shrink: 0;
}
.logo__image {
  border-radius: var(--default-radius);
}
@media (min-width: 767px) {
  .logo__image {
    height: 40px;
  }
}
</style>
