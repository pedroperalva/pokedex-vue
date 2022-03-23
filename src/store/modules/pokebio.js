import axios from "axios";

const state = {
  pokemonInfos: {},
  loadingStatus: true,
  errorMessage: "",
};

const mutations = {
  setPokemonInfo(state, payload) {
    state.pokemonInfos = payload;
  },
  changeLoadingToFalse(state) {
    state.loadingStatus = false;
  },
  changeLoadingToTrue(state) {
    state.loadingStatus = true;
  },
  resetPokemonInfos(state) {
    state.pokemonInfos = {};
  },
  setErrorMessage(state, error) {
    state.errorMessage = error;
  },
};

const actions = {
  async getPokemonInfos({ commit, state }, pokeUrl) {
    if (Object.keys(state.pokemonInfos).length === 0) {
      commit("changeLoadingToTrue");
    }

    try {
      const resp = await axios.get(pokeUrl);

      commit("setPokemonInfo", resp.data);
      commit("setErrorMessage", "");
      commit("changeLoadingToFalse");
    } catch (error) {
      commit("setErrorMessage", error);
    }
  },
};

const getters = {
  backgroundColors(state) {
    const types = state.pokemonInfos.types;
    const colorTypes = [];
    for (let type of types) {
      switch (type.type.name) {
        case "fire":
          colorTypes.push("#FB2C00");
          break;
        case "grass":
          colorTypes.push("#1EDC00");
          break;
        case "bug":
          colorTypes.push("#68E208");
          break;
        case "dark":
          colorTypes.push("#2C2C2C");
          break;
        case "dragon":
          colorTypes.push("#4400FA");
          break;
        case "electric":
          colorTypes.push("#D4DA00");
          break;
        case "fairy":
          colorTypes.push("#FF6FDE");
          break;
        case "fighting":
          colorTypes.push("#711500");
          break;
        case "flying":
          colorTypes.push("#0076C3");
          break;
        case "ghost":
          colorTypes.push("#2000BF");
          break;
        case "ground":
          colorTypes.push("#B96829");
          break;
        case "ice":
          colorTypes.push("#0DFEEC");
          break;
        case "normal":
          colorTypes.push("#959595");
          break;
        case "poison":
          colorTypes.push("#9802C0");
          break;
        case "psychic":
          colorTypes.push("#F700A1");
          break;
        case "rock":
          colorTypes.push("#B92929");
          break;
        case "steel":
          colorTypes.push("#C2C2C2");
          break;
        case "water":
          colorTypes.push("#00AAFF");
          break;
      }
    }
    return colorTypes;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
