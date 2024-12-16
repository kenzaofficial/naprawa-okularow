<template>
  <h3 class="title">{{ text }}</h3>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "default text",
  },
});
</script>

<style>
.title {
  position: relative;
  font-size: 28px;
  padding: 0 5px 15px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.2em;
  text-align: center;
  margin-bottom: 40px;
}

.title:after {
  content: "";
  position: absolute;
  width: 200px;
  height: 2px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-primary);
}

@media (min-width: 767px) {
  .title {
    font-size: 42px;
  }
  
  .title:before {
    font-size: 84px;
  }
}
</style>
