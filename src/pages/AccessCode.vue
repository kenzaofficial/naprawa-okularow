<template>
  <v-layout
    title="Расписание автобусов онлайн"
    subtitle="На указанный номер телефона отправлен код подтверждения. Введите код из СМС"
    has-additional-footer>
    <form-client />
    <v-about />
  </v-layout>
</template>

<script>
import VLayout from '@/components/v-layout/VLayout.vue'
import FormClient from '@/components/forms/form-client/FormClient.vue'
import VAbout from '@/components/blocks/v-about/VAbout.vue'
export default {
  name: 'AccessCodePage',
  components: {
    VLayout,
    FormClient,
    VAbout,
  },
}
</script>
