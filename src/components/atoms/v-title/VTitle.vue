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
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.2em;
  text-align: center;
  margin-bottom: 50px;
}

.title:before {
  position: absolute;
  content: "usługi";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  font-weight: 900;
  letter-spacing: 0.18em;
  line-height: 1.5;
  color: var(--bg-card);
  text-transform: uppercase;
  z-index: -1;
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
