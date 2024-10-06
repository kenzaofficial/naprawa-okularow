<template>
  <div :class="`layout layout--${mode}`">
    <v-header />
    <main class="layout__main">
      <div class="layout__main-inner">
        <div class="layout__hero">
          <div class="layout__hero-text">
            <h1 class="layout__title">{{ title }}</h1>
            <p class="layout__subtitle">{{ subtitle }}</p>
            <p v-if="additionalSubtitle" class="layout__subtitle">
              {{ additionalSubtitle }}
            </p>
          </div>
          <img
            v-if="mode === 'secondary' || mode === 'thirdly'"
            class="layout__hero-image"
            :src="require(`../../assets/images/${heroImgName}.svg`)"
            alt="Декоративное изображение" />
        </div>
        <slot />
      </div>
    </main>
    <v-footer :has-additional-info="hasAdditionalFooter"></v-footer>
  </div>
</template>

<script>
import VHeader from '@/components/blocks/v-header/VHeader.vue'
import VFooter from '@/components/blocks/v-footer/VFooter.vue'

export default {
  name: 'VLayout',
  components: { VHeader, VFooter },
  props: {
    title: {
      type: String,
      default: 'default title',
    },
    subtitle: {
      type: String,
      default: 'default subtitle',
    },
    hasAdditionalFooter: {
      type: Boolean,
      default: false,
    },
    additionalSubtitle: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: 'primary',
    },
    heroImgName: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>

<style>
.layout {
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.layout--secondary .layout__title {
  text-align: left;
}
.layout--secondary .layout__subtitle {
  text-align: left;
  color: var(--color-black);
}

.layout__title {
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 10px;
}
.layout__subtitle {
  font-size: 12px;
  line-height: 18px;
  color: var(--color-gray-02);
}
.layout__subtitle:not(:last-child) {
  margin-bottom: 20px;
}
.layout__main {
  flex-grow: 1;
}

.layout__hero-text {
  margin-bottom: 20px;
}
.layout__hero-image {
  display: none;
}

@media (min-width: 767px) {
  .layout {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1200px;
  }
  .layout--secondary .layout__subtitle {
    font-size: 20px;
    line-height: 26px;
    color: var(--color-gray-02);
  }
  .layout--secondary .layout__hero {
    display: flex;
    align-items: center;
  }
  .layout--secondary .layout__hero-text {
    max-width: 630px;
  }
  .layout--thirdly .layout__main {
    position: relative;
    padding-bottom: 50px;
  }
  .layout--thirdly .layout__main-inner {
    max-width: 520px;
  }
  .layout--thirdly .layout__hero-image {
    position: absolute;
    right: 0;
    top: 50px;
    z-index: -1;
  }
  .layout__title {
    margin-bottom: 20px;
    font-size: 32px;
  }
  .layout__subtitle {
    font-size: 18px;
  }
  .layout__subtitle:not(:last-child) {
    margin-bottom: 40px;
  }
  .layout__hero-text {
    margin-bottom: 40px;
  }
  .layout__hero-image {
    display: block;
    margin-left: auto;
  }
}
</style>
