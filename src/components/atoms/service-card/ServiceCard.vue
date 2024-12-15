<template>
  <div class="service-card">
    <!-- <div class="service-card__text">
      <h4 class="service-card__title">{{ img.text }}</h4>
    </div> -->
    <img class="service-card__img" :src="img.path" alt="repair case example" />
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: Object,
    required: true,
    default: { text: "default text", path: "#" },
  },
});
</script>

<style>
.service-card {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  background-color: var(--bg-card)
}

.service-card__img {
  max-width: 100%;
}

.service-card__text {
  text-align: left;
  word-break: break-word;
  padding: 10px;
  background-color: var(--bg-card);
  height: 100%;
}

.service-card__title {
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  color: var(--color-primary);
}
</style>
