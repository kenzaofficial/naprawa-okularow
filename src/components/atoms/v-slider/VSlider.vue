<template>
  <div class="slider">
    <swiper :slides-per-view="3" :space-between="50">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Slide Image" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
// Импорт компонентов Swiper для Vue.js
import { Swiper, SwiperSlide } from 'swiper/vue'

// Импорт стилей Swiper
import 'swiper/css'
import { ref } from 'vue'

// Массив с путями к изображениям для слайдов
const images = ref([
  require('../../../assets/images/example_01.jpg'),
  require('../../../assets/images/example_02.jpg'),
  require('../../../assets/images/example_03.jpg'),
  require('../../../assets/images/example_04.jpg'),
  require('../../../assets/images/example_05.jpg'),
  require('../../../assets/images/example_06.jpg'),
])
</script>

<style>
.slider {
  background-color: rgb(39, 39, 39);
  padding: 20px;
}
.slider img {
  max-width: 200px;
  object-fit: cover;
}
</style>
