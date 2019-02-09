<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <v-btn flat to="/">
        TabTracker
        </v-btn>
    </v-toolbar-title>

      <v-toolbar-items>
        <v-btn flat dark to="/songs">
          Browse
        </v-btn>
      </v-toolbar-items>
      <v-spacer/>
      <v-toolbar-items
        v-if="!isUserLoggedin()">
        <v-btn flat dark to="/login">
          Log In
        </v-btn>
        <v-btn flat dark to="/register">
          Sign Up
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
          <v-btn flat dark
            @click="logout">
            Log Out
          </v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
    ...mapGetters([
      'isUserLoggedin'
    ]),
    ...mapActions([
      'setToken',
      'setUser'
    ]),
    logout () {
      this.setToken(null)
      this.setUser(null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>

</style>
