<template>
  <header>
    <div class="storybook-header">
      <h1>Acme</h1>
      <div>
        <span class="welcome" v-if="user">
          Welcome,
          <b>{{ user.name }}</b>
          !
        </span>
        <v-button
          size="small"
          @click="$emit('logout')"
          label="Log out"
          v-if="user" />
        <v-button
          size="small"
          @click="$emit('login')"
          label="Log in"
          v-if="!user" />
        <v-button
          primary
          size="small"
          @click="$emit('createAccount')"
          label="Sign up"
          v-if="!user" />
      </div>
    </div>
  </header>
</template>

<script>
import './header.css'
import VButton from '../components/v-button/VButton.vue'

export default {
  name: 'my-header',

  components: { VButton },

  props: {
    user: {
      type: Object,
    },
  },

  emits: ['login', 'logout', 'createAccount'],
}
</script>
../components/atoms/v-button/VButton.vue
