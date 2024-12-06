<template>
  <div class="service-card">
    <img class="service-card__img" :src="imgPath" alt="repair case example" />
    <div class="service-card__text">
      <h4 class="service-card__title">{{ text }}</h4>
      <span class="service-card__subtitle">mini opis mini opis</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "default text",
  },
  imgPath: {
    type: String,
    default: "path to image",
  },
});
</script>

<style>
.service-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--default-radius);
  overflow: hidden;
  height: 100%;
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
  margin-bottom: 10px;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: 0;
  color: var(--color-primary);
}

.service-card__subtitle {
  display: block;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: -0.15px;
}
</style>
