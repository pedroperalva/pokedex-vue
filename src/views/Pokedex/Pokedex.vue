<template>
  <div style="height: 100%" class="main-pokedex-container">
    <generation-btns
      @gen1="getPokemonList(pokemonGens.gen1)"
      @gen2="getPokemonList(pokemonGens.gen2)"
      @gen3="getPokemonList(pokemonGens.gen3)"
      @gen4="getPokemonList(pokemonGens.gen4)"
      @gen5="getPokemonList(pokemonGens.gen5)"
      @gen6="getPokemonList(pokemonGens.gen6)"
      @gen7="getPokemonList(pokemonGens.gen7)"
      @gen8="getPokemonList(pokemonGens.gen8)"
    />
    <pokemon-list
      :imageURL="imageURL"
      :loadingStatus="loadingStatus"
      :inputValue="inputValue"
      :filterPokemon="filterPokemon"
      @click:search="searchPokemonInfos"
      @input="inputValue = $event"
    />
  </div>
</template>

<script>
import GenerationBtns from "./components/GenerationBtns.vue";
import PokemonList from "./components/PokemonList.vue";
import { onMounted, ref, computed } from "@vue/composition-api";
import { useState, useMutations, useActions } from "vuex-composition-helpers";
export default {
  name: "Pokedex",
  components: {
    PokemonList,
    GenerationBtns,
  },
  setup(_, { root }) {
    const imageURL = ref(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    );
    const inputValue = ref("");

    const { pokemonList, loadingStatus } = useState("pokedex", [
      "pokemonList",
      "loadingStatus",
    ]);

    const { resetPokemonInfos } = useMutations(["resetPokemonInfos"]);

    const { getPokemonList, getPokemonInfos } = useActions([
      "getPokemonList",
      "getPokemonInfos",
    ]);
    const filterPokemon = computed(() => {
      if (inputValue.value !== "") {
        return pokemonList.value.filter((pokemon) =>
          pokemon.name.includes(inputValue.value.toLowerCase())
        );
      } else {
        return pokemonList.value;
      }
    });

    const pokemonGens = {
      gen1: {
        offset: "0",
        limit: "151",
      },
      gen2: {
        offset: "151",
        limit: "100",
      },
      gen3: {
        offset: "251",
        limit: "135",
      },
      gen4: {
        offset: "386",
        limit: "107",
      },
      gen5: {
        offset: "494",
        limit: "155",
      },
      gen6: {
        offset: "649",
        limit: "72",
      },
      gen7: {
        offset: "721",
        limit: "88",
      },
      gen8: {
        offset: "809",
        limit: "905",
      },
    };

    const searchPokemonInfos = (e) => {
      resetPokemonInfos();
      getPokemonInfos(e);
      root.$router.push({ name: "PokemonBio" });
    };

    onMounted(() => {
      getPokemonList(pokemonGens.gen1);
    });

    return {
      imageURL,
      pokemonList,
      loadingStatus,
      inputValue,
      pokemonGens,

      getPokemonList,
      searchPokemonInfos,
      filterPokemon,
    };
  },
};
</script>
