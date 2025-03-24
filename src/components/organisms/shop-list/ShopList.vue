<template>
  <ul class="shop-list">
    <li
      v-for="(shop, index) of list"
      class="shop-list__item"
      :class="{ 'shop-list__item--last': index === list.length - 1 }"
      @mouseover="$emit('hover-start', shop.id)"
      @mouseleave="$emit('hover-end', shop.id)"
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
@media screen and (min-width: 1024px) {
  .shop-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
}

.shop-list__item {
  width: 100%;
  padding: 0 10px;
  border-bottom: 1px solid #5e5e5e;
  transition: 0.2s background-color linear;
  cursor: pointer;
}

.shop-list__item:hover {
  background-color: #222;
}

@media screen and (min-width: 1024px) {
  .shop-list__item {
    padding-right: 15px;
    border-bottom: none;
  }

  .shop-list__item:nth-child(2n) {
    border-left: 1px solid #444;
    padding-left: 15px;
  }
}

.shop-list__item--last {
  border-bottom: none;
}
</style>