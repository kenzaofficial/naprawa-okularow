<template>
  <v-layout
    title="Расписание автобусов онлайн"
    subtitle="Введите данные чтобы узнать расписание интересующего вас рейса">
    <form-search />
    <v-about />
  </v-layout>
</template>

<script>
import VLayout from '@/components/v-layout/VLayout.vue'
import FormSearch from '@/components/forms/form-search/FormSearch.vue'
import VAbout from '@/components/blocks/v-about/VAbout.vue'

export default {
  name: 'HomePage',
  components: {
    VLayout,
    FormSearch,
    VAbout,
  },
}
</script>
