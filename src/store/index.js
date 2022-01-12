import Vue from 'vue'
import Vuex from 'vuex'
import movies from './movies';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    password: null,
  },
  getters: {
    password: state => state.password,
  },
  mutations: {
    setPassword(state, pw) {
      state.password = pw;
    },
  },
  actions: {
  },
  modules: {
    movies,
  },
})
