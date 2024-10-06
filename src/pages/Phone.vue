<template>
  <v-layout
    title="Расписание автобусов онлайн"
    subtitle="Для получения результатов введите ваш номер телефона"
    has-additional-footer>
    <form-phone />
    <v-about />
  </v-layout>
</template>

<script>
import VLayout from '@/components/v-layout/VLayout.vue'
import FormPhone from '@/components/forms/form-phone/FormPhone.vue'
import VAbout from '@/components/blocks/v-about/VAbout.vue'
export default {
  name: 'PhonePage',
  components: {
    VLayout,
    FormPhone,
    VAbout,
  },
}
</script>
