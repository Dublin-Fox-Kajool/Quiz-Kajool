export default {
  namespaced: true,
  state: {
    question: ''
  },
  mutations: {
    'SOCKET_CONNECT'(state, payload) {
      console.log(payload)
      state.question = payload
    }
  },
}