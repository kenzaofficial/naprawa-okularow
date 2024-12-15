<template>
  <div class="layout">
    <v-header />
    <main class="layout__main">
      <slot />
    </main>
    <v-footer />
  </div>
</template>

<script setup>
import VHeader from "~/components/blocks/v-header/VHeader.vue";
import VFooter from "~/components/blocks/v-footer/VFooter.vue";
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 100%;
}
.layout__main {
  padding-bottom: 20px;
  flex-grow: 1;
}

</style>