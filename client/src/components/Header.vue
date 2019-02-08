<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <v-btn flat to="/">
        TabTracker
        </v-btn>
    </v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat dark>
          Browse
        </v-btn>
      </v-toolbar-items>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn flat dark to="/login">
          Login
        </v-btn>
        <v-btn flat dark to="/register">
          Sign Up
        </v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
