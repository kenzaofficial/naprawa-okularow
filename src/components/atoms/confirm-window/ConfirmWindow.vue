<template>
  <client-only>
    <teleport to="body">
      <div
        class="confirm-window"
        :class="[
          `confirm-window--${mode}`, 
          {
            'confirm-window--open': isOpen,
            'confirm-window--closed': !isOpen,
          }
        ]"
      >
        <div class="confirm-window__content">
          <h2 class="confirm-window__heading" v-if="heading">{{ heading }}</h2>
          <p class="confirm-window__text" v-if="text">{{ text }}</p>
          <v-button class="confirm-window__button" @click="$emit('close')" :text="buttonText" />
        </div>
      </div>
    </teleport>
  </client-only>
</template>

<script>
import VButton from '../v-button/VButton.vue';

export default {
  props: {
    isOpen: Boolean,
    heading: String,
    text: String,
    buttonText: String,
    mode: {
      type: String,
      default: 'default', // default, error
    },
  },
  components: { VButton },
  emits: ['close'],
  watch: {
    isOpen(val) {
      if (val) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    },
  }
}
</script>

<style scoped>
.confirm-window {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1000;
}

.confirm-window--open {
  opacity: 1;
}

.confirm-window--closed {
  opacity: 0;
  z-index: -1;
  transition: all 0.3s;
}

.confirm-window__content {
  background: white;
  padding: 20px;
  margin: 0 10px;
  border-radius: 8px;
  max-width: 410px;
  color: #000;
  text-align: center;
  font-size: 14px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.confirm-window--error .confirm-window__content {
  background: rgb(255, 88, 88);
  color: white;
}

.confirm-window__heading {
  font-size: 20px;
  margin-bottom: 10px;
}

.confirm-window__text {
  margin: 20px 0;
  line-height: 24px;
}

.confirm-window--error .confirm-window__button {
  background: white;
}

.confirm-window--error .confirm-window__button:hover {
  color: rgb(255, 88, 88);
}
</style>
