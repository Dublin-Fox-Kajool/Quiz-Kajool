import Vue from 'vue'
import Vuex from 'vuex'
import QuestionModule from './question'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  modules: {
    question: QuestionModule
  },
  mutations: {
    'SOCKET_USER_CONNECTED' (state, payload) {
      console.log(payload, '<<<<< users dari server')
      state.users = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
