<template>
  <div class="service-card">
    <img class="service-card__img" :src="imgPath" alt="repair case example" />
    <div class="service-card__text">
      <h6 class="service-card__title">{{ text }}</h6>
      <span class="service-card__subtitle">mini opis mini opis</span>
      <p class="service-card__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero
        voluptas velit, facilis, repellendus harum illo dolor officiis eum unde
        similiq
      </p>
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

// const imgUrl = new URL(this.imgPath, import.meta.url).href;
// console.log('loh', imgUrl);



</script>

<style>
.service-card {
  border-radius: var(--default-radius);
  overflow: hidden;
}

.service-card__img {
  max-width: 100%;
}

.service-card__text {
  text-align: left;
  padding: 20px;
  background-color: var(--bg-card);
}

.service-card__title {
  margin-bottom: 10px;
  display: inline-block;
  font-size: 32px;
  line-height: 0.9;
  letter-spacing: 0;
  color: var(--color-primary);
}

.service-card__subtitle {
  display: block;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: -0.15px;
}

.service-card__description {
  font-size: 13px;
  line-height: 1.5;
  letter-spacing: -0.16px;
}
</style>
