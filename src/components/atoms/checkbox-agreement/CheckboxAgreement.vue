<template>
  <div class="checkbox-agreement">
    <input type="checkbox" name="checkbox-agreement" id="agreement" />
    <label for="agreement" class="checkbox-agreement__text">
      {{ text }}
    </label>
  </div>
</template>
<script>
export default {
  name: 'CheckboxAgreement',
  props: {
    text: {
      type: String,
      default: 'default agreement text',
    },
  },
}
</script>
<style>
.checkbox-agreement {
  margin-top: 20px;
  display: flex;
  font-size: 10px;
  color: var(--color-gray-01);
}
.checkbox-agreement input[type='checkbox'] {
  display: none;
}
.checkbox-agreement__text {
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  text-align: left;
}

.checkbox-agreement__text::before {
  content: '';
  position: absolute;
  left: 0;
  width: 12px;
  height: 12px;
  background-color: var(--color-light-gray-01);
}

.checkbox-agreement__text::after {
  content: '';
  position: absolute;
  left: 3px;
  top: 0;
  transform: rotate(45deg);
  width: 6px;
  height: 9px;
  border: solid var(--color-green-03);
  border-width: 0 1px 1px 0;
  opacity: 0;
  transition: 0.2s;
}

.checkbox-agreement input[type='checkbox']:checked + label::after {
  opacity: 1;
}

@media (min-width: 767px) {
  .checkbox-agreement__text::before {
    width: 18px;
    height: 18px;
  }
  .checkbox-agreement__text::after {
    left: 4px;
    top: 1px;
    width: 10px;
    height: 13px;
    border-width: 0 2px 2px 0;
  }
}
</style>
