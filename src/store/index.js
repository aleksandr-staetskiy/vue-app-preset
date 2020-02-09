import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cnt: 1,
    price: 1000,
  },
  mutations: {
    plus(state) {
      state.cnt += 1;
    },
    minus(state) {
      state.cnt -= 1;
    },
  },
  getters: {
    total(state) {
      return state.cnt * state.price;
    },
  },
  actions: {},
  modules: {},
});
