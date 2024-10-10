<template>
  <router-view />
</template>

<script>
export default {
  name: 'HomePage',
  components: {},
}
</script>

<style>
#app {
  font-family: var(--font-main);
  text-align: center;
  background-color: var(--main-background);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
