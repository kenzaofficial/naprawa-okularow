<template>
  <div class="layout">
    <v-header />
    <main class="layout__main">
      <slot />
    </main>
    <v-footer />
  </div>
</template>

<script>
import VHeader from "@/components/blocks/v-header/VHeader.vue";
import VFooter from "@/components/blocks/v-footer/VFooter.vue";

export default {
  name: "VLayout",
  components: { VHeader, VFooter },
};
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 100%;
}

.layout__title {
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 10px;
}
.layout__main {
  flex-grow: 1;
}

.layout__hero-text {
  margin-bottom: 20px;
}

@media (min-width: 767px) {
  .layout__title {
    margin-bottom: 20px;
    font-size: 32px;
  }
  .layout__hero-text {
    margin-bottom: 40px;
  }
}
</style>
