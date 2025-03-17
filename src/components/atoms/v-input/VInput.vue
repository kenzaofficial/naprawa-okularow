<template>
  <div class="input" :class="{ 'input--error': error }">
    <label class="input__label">
      {{ label }}
      <input
        v-if="type === 'tel'"
        v-mask="'+48 ###-###-###'"
        v-bind="attrs"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <input
        v-else
        v-bind="attrs"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </label>
    <span v-if="error" class="input__error">{{ error }}</span>
  </div>
</template>

<script>
import VueTheMask from "vue-the-mask";

export default {
  name: "VInput",
  directives: {
    mask: VueTheMask.mask,
  },
  props: {
    type: String,
    placeholder: String,
    label: String,
    error: String,
  },
  computed: {
    attrs() {
      return {
        type: this.type,
        placeholder: this.placeholder,
        class: 'input__field',
      };
    }
  }
};
</script>

<style scoped>
.input {
  text-align: start;
}
.input__label {
  display: block;
  padding-left: 5px;
  margin-bottom: 2px;
  font-size: 12px;
}

.input__field {
  width: 100%;
  display: inline-block;
  padding: 10px;
  font-size: 16px;
  border: 1px solid var(--text-primary);
  border-radius: var(--default-radius);
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

.input__field:focus-within {
  border-color: var(--color-primary);
  outline: none;
}

.input:focus-within .input__label {
  color: var(--color-primary);
}

.input__field::placeholder {
  font-size: 12px;
  color: var(--text-primary-opacity);
}

.input--error .input__field {
  border: 1px solid var(--color-error);
}

.input--error .input__label {
  color: var(--color-error);
}

.input__error {
  color: var(--color-error);
  font-size: 14px;
  margin-top: 5px;
  position: relative;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 5px;
}

.input__error::before {
  content: "!";
  color: var(--color-error);
  border: 1px solid var(--color-error);
  font-weight: 600;
  font-size: 8px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

@media (min-width: 998px) {
  .input__field,
  .input__label,
  .input__field::placeholder {
    font-size: 20px;
  }
  .input__field {
    padding: 15px;
  }

  .input__error {
    font-size: 18px;
  }
  .input__error::before {
    font-size: 10px;
    width: 12px;
    height: 12px;
  }
}
</style>
