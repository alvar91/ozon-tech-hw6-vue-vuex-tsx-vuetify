import Vue from "vue";
import Vuex from "vuex";
import { createVuexStore } from "vuex-simple";

import { Store } from './store';

Vue.use(Vuex);

const store = createVuexStore(new Store(), {
  strict: false,
  modules: {},
  plugins: [],
});

export default store;
