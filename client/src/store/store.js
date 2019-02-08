import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  getters: {
    isUserLoggedin (state) {
      return state.isUserLoggedIn
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
      console.log(state)
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})

export default createStore
