<template>
  <a href="/" class="logo">
    <img src="../../../assets/images/logo.svg" alt="logo" class="logo__image" />
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
.logo__image {
  transition: 0.3s;
}
.logo__image:hover {
  transform: scale(1.1);
}
@media (min-width: 767px) {
  .logo__image {
    width: 185px;
    height: 47px;
  }
}
</style>
