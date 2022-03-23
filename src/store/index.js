import Vue from "vue";
import Vuex from "vuex";

import pokedex from "./modules/pokedex";
import pokebio from "./modules/pokebio";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    pokedex,
    pokebio,
  },
});
