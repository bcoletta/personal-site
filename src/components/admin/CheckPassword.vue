<template>
  <v-form @submit.prevent="checkPassword">
    <v-text-field v-model="password" label="Password" type="password"></v-text-field>
    <v-btn type="submit">Check Password</v-btn>
    <v-alert type="error" v-if="invalidPassword" class="mt-4">Invalid Password!</v-alert>
  </v-form>
</template>

<script>
import { validateUser } from '@/services/api/user-service';

export default {
  name: 'CheckPassword',
  data: () => ({
    authenticated: false,
    invalidPassword: false,
    password: '',
  }),
  methods: {
    checkPassword() {
      validateUser(this.password).then(res => {
        if (!res.valid) this.invalidPassword = true;
        else {
          this.$store.commit('setPassword', this.password)
          this.$emit('validated')
        }
      });
    },
  },
}
</script>

<style scoped>

</style>