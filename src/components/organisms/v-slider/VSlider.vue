<template>
  <div class="v-slider" :class="{ 'v-slider--ready': isReady }">
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :modules="[Navigation, Pagination, EffectCoverflow]"
      :slides-per-view="slidesPerView"
      :space-between="10"
      :pagination="{ clickable: true, modifierClass: 'v-slider__' }"
      :navigation="{ nextEl: '.v-slider__next-arrow', prevEl: '.v-slider__prev-arrow' }"
      class="v-slider__container"
      @slide-change="onChange"
      @swiper="isReady = true"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <slot :slide="slide" :index="index" />
      </swiper-slide>
    </swiper>
    <button
      class="v-slider__prev-arrow"
      :class="{ 'v-slider__prev-arrow--hidden': activeIndex === 0 }"
    >
      <v-arrow />
    </button>
    <button
      class="v-slider__next-arrow"
      :class="{ 'v-slider__next-arrow--hidden': activeIndex === slides.length - 1 }"
    >
      <v-arrow />
    </button>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import VArrow from './arrow.vue';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';

const slidesPerView = ref(1);
const activeIndex = ref(0);
const isReady = ref(false);

const onChange = (data) => {
  activeIndex.value = data.activeIndex;
};

onMounted(() => {
  const getSlidesPerView = (width) => {
    if (width >= 500 && width <= 1024) {
      return 2;
    } else if (width >= 1024) {
      return 3;
    } else {
      return 1;
    }
  }

  slidesPerView.value = getSlidesPerView(document.body.offsetWidth);

  const resizeObserver = new ResizeObserver((entries) => {
    const width = entries[0].contentRect.width;
    slidesPerView.value = getSlidesPerView(width);
  });
  resizeObserver.observe(document.body);
}); 

defineProps({
  slides: {
    type: Array,
    required: true,
  },
});
</script>

<style>
@keyframes opacity {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.v-slider {
  position: relative;
  width: 90%;
  margin: 0 auto;
  opacity: 0;
}

.v-slider--ready {
  opacity: 1;
  animation: opacity 0.5s linear;
}

.v-slider__container {
  border-radius: 10px;
  overflow: hidden;
}

.slide-image {
  height: auto;
  display: block;
}

.v-slider .swiper-slide {
  opacity: 0.3;
  transform: scale(0.7) !important;
  transition: all 0.2s linear !important;
}

.v-slider .swiper-slide-active {
  transform: scale(1) !important;
  opacity: 1;
}

.v-slider__prev-arrow,
.v-slider__next-arrow  {
  position: absolute;
  top: 50%;
  display: none;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.8);
  width: 50px;
  font-size: 40px;
  z-index: 1;
}


@media screen and (min-width: 1024px) {
  .v-slider__next-arrow,
  .v-slider__prev-arrow {
    display: flex;
  }
}

.v-slider__prev-arrow {
  left: -60px;
  transform: translateY(-50%) rotate(180deg) scale(1.5);
}

.v-slider__next-arrow {
  right: -60px;
  transform: translateY(-50%) scale(1.5);
}

.v-slider__prev-arrow--hidden,
.v-slider__next-arrow--hidden {
  display: none;
}

.v-slider__bullets {
  position: absolute;
  bottom: 20px;
  left: 50%;
  display: flex;
  gap: 5px;
  transform: translateX(-50%);
  padding: 5px;
  border-radius: 8px;
  background-color: #49494b;
}
</style>
