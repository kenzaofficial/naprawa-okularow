<template>
  <a href="/" class="logo">
    <img
      src="../../../assets/images/logo.jpg"
      alt="logo"
      class="logo__image"
      height="20px" />
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
  display: inline-block;
  flex-shrink: 0;
  max-width: 126px;
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
