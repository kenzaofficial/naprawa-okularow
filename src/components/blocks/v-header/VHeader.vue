<template>
  <header class="header">
    <v-logo />
  </header>
</template>
<script>
import VLogo from '@/components/atoms/v-logo/VLogo.vue'
export default {
  name: 'VHeader',
  components: {
    VLogo,
  },
}
</script>
<style>
.header {
  padding: 15px 0;
}

@media (min-width: 767px) {
  .header {
    text-align: left;
    padding: 20px 0;
  }
}
</style>
