<template>
  <v-layout title="naprawa okularów">
    <form-client title="wypełnij formularz" />
  </v-layout>
</template>

<script>
import VLayout from '@/components/v-layout/VLayout.vue'
import FormClient from '@/components/forms/form-phone/FormClient.vue'

export default {
  name: 'HomePage',
  components: {
    VLayout,
    FormClient,
  },
}
</script>
