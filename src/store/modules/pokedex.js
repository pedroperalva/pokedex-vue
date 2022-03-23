import axios from "axios";

const state = {
  pokemonList: [],
  loadingStatus: true,
};

const mutations = {
  setPokemonList(state, payload) {
    state.pokemonList = [];

    payload.list.map((el, i) => {
      state.pokemonList.push({
        name: el.name,
        id: payload.offset + i + 1,
        url: el.url,
      });
    });
  },

  changeLoadingToFalse(state) {
    state.loadingStatus = false;
  },
  changeLoadingToTrue(state) {
    state.loadingStatus = true;
  },
};

const actions = {
  async getPokemonList({ commit }, values) {
    commit("changeLoadingToTrue");

    try {
      const resp = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${values.offset}&limit=${values.limit}`
      );

      const data = {
        list: resp.data.results,
        offset: parseInt(values.offset),
      };

      commit("setPokemonList", data);
      commit("changeLoadingToFalse");
    } catch (error) {
      alert(error, "Recarregue a página");
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
