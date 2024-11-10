<template>
  <a href="/" class="logo">
    <img src="../../../assets/images/logo.jpg" alt="logo" class="logo__image" height="20px" />
  </a>
</template>

<script>
export default {
  name: 'VLogo',
  props: {
    buttonText: {
      type: String,
      default: 'buttonText',
    },
  },
}
</script>

<style>
.logo {
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
