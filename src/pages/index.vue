<template>
  <v-hero />
  <other-city/>
  <v-services />
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import VHero from "~/components/blocks/v-hero/VHero.vue";
import OtherCity from "~/components/blocks/other-city/OtherCity.vue";
import VServices from "~/components/blocks/v-services/VServices.vue";

definePageMeta({
  layout: 'default'
})
</script>