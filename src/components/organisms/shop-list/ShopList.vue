<template>
  <ul class="shop-list">
    <li
      v-for="(shop, index) of list"
      class="shop-list__item"
      :class="{ 'shop-list__item--last': index === list.length - 1 }"
    >
      <shop-item
        :letter-option="shop.letterOption"
        :name="shop.name"
        :address="shop.address"
        :phone="shop.phone"
        :opening-hours="shop.openingHours"
        :coordinates="shop.coordinates"
      />
    </li>
  </ul>
</template>

<script setup>
import ShopItem from '~/components/atoms/shop-item/ShopItem.vue';

defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>

<style>
.shop-list__item {
  border-bottom: 1px solid #5e5e5e;
}

.shop-list__item--last {
  border-bottom: none;
}
</style>