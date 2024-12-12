<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup>
defineOptions({
  name: "VContainer",
});
</script>

<style>
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  max-width: 1400px;
}
@media (min-width: 767px) {
  .container {
    padding: 0 20px;
  }
}
@media (min-width: 1190px) {
  .container {
    padding: 0 40px;
  }
}
</style>
