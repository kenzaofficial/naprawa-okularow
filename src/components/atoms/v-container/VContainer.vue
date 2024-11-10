<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VContainer',
}
</script>
<style>
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 5px;
  max-width: 1200px;
}
</style>
