<template>
  <v-layout
    title="Расписание автобусов онлайн"
    subtitle="На указанный номер телефона отправлен код подтверждения. Введите код из СМС"
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
  name: 'AccessCodePage',
  components: {
    VLayout,
    FormPhone,
    VAbout,
  },
}
</script>
