<template>
  <v-layout >
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            type="email"
            name="email"
            v-model="email"
            placeholder="email">
          </v-text-field>
          <br>
          <v-text-field
            type="password"
            name="password"
            v-model="password"
            placeholder="password">
          </v-text-field>
          <br>
          <div class="error" v-html="error"/>
          <br>
          <v-btn
            @click="login">
            Login
          </v-btn>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    Panel
  },
  methods: {
    ...mapActions([
      'setToken',
      'setUser'
    ]),
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.setToken(response.data.token)
        this.setUser(response.data.user)
        console.log(response.data)
        this.error = null
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
