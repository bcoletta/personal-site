<template>
  <v-container>
    <CheckPassword v-if="!authenticated" @validated="authenticated = true"/>
    <AddMovie v-else />
  </v-container>
</template>

<script>
import AddMovie from '@/components/admin/AddMovie';
import CheckPassword from '@/components/admin/CheckPassword';

export default {
  name: 'Admin',
  components: {
    AddMovie,
    CheckPassword,
  },
  data: () => ({
    authenticated: false,
  }),
}
</script>
