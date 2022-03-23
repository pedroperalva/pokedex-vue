<template>
  <div style="height: 100%">
    <div
      v-if="loadingStatus"
      class="d-flex justify-center align-center"
      style="height: 100%; background-color: yellow"
    >
      <img
        src="https://i.imgur.com/aMz1Qtu.gif"
        width="480"
        height="360.000"
        frameBorder="0"
        allowFullScreen
      />
    </div>
    <div
      class="d-flex flex-column justify-center align-center"
      style="height: 100%"
      :style="{ 'background-color': backgroundColors[0] }"
      v-else
    >
      <div class="d-flex mb-10" style="width: 500px">
        <v-text-field
          label="Search Pokémon"
          solo
          hide-details="true"
          color="red"
          class="mr-4"
          v-model="inputValue"
        ></v-text-field>
        <v-btn style="height: 48px" @click="searchPokemon">Search</v-btn>
      </div>
      <v-card
        class="d-flex flex-column align-center pa-5"
        width="800"
        style="border: 2px solid black"
      >
        <h1 class="card-title text-uppercase text-center">
          {{ pokemonInfos.id }}. {{ pokemonInfos.name }}
        </h1>
        <div
          class="d-flex justify-space-between align-center"
          style="width: 100%"
        >
          <v-btn :color="backgroundColors[0]" dark @click="previousPokemon"
            >Previous</v-btn
          >
          <img
            :src="pokemonInfos.sprites.front_default"
            width="200"
            height="200"
            class="my-4"
          />
          <v-btn :color="backgroundColors[0]" dark @click="nextPokemon"
            >Next</v-btn
          >
        </div>

        <div class="d-flex mb-6">
          <p class="mr-1">TYPES:</p>
          <div v-for="(type, i) in pokemonInfos.types" :key="type.type.name">
            <p
              class="pokemon-types mr-1 text-uppercase"
              :style="{ 'background-color': backgroundColors[i] }"
            >
              {{ type.type.name }}
            </p>
          </div>
          <div class="d-flex ml-10">
            <p class="text-uppercase mr-4">weight:{{ pokemonInfos.weight }}</p>
            <p class="text-uppercase">height:{{ pokemonInfos.height }}</p>
          </div>
        </div>

        <v-data-table
          :headers="headers"
          :items="items"
          hide-default-footer
          class="table-stats elevation-3"
        >
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script>
import { useState, useGetters, useActions } from "vuex-composition-helpers";
import { computed, onMounted, ref } from "@vue/composition-api";
export default {
  name: "Pokedex",
  components: {},
  setup() {
    const { pokemonInfos, loadingStatus } = useState("pokebio", [
      "pokemonInfos",
      "loadingStatus",
    ]);
    const { backgroundColors } = useGetters(["backgroundColors"]);
    const { getPokemonInfos } = useActions(["getPokemonInfos"]);

    const inputValue = ref("");

    const headers = computed(() => {
      const array = [];
      for (let statname of pokemonInfos.value.stats) {
        array.push({
          text: statname.stat.name.toUpperCase(),
          value: statname.stat.name,
          align: "center",
        });
      }
      return array;
    });

    const items = computed(() => {
      const array = [];
      for (let statname of pokemonInfos.value.stats) {
        array.push(statname.base_stat);
      }
      const stats = [
        {
          hp: array[0],
          attack: array[1],
          defense: array[2],
          "special-attack": array[3],
          "special-defense": array[4],
          speed: array[5],
        },
      ];
      return stats;
    });

    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/`;

    const previousPokemon = () => {
      getPokemonInfos(pokeUrl + `${pokemonInfos.value.id - 1}`);
    };

    const nextPokemon = () => {
      getPokemonInfos(pokeUrl + `${pokemonInfos.value.id + 1}`);
    };

    const searchPokemon = () => {
      const pokemonName = inputValue.value.toLowerCase();
      getPokemonInfos(pokeUrl + pokemonName);
    };

    onMounted(() => {
      setTimeout(() => {
        if (Object.keys(pokemonInfos.value).length === 0) {
          getPokemonInfos(pokeUrl + `${1}`);
        }
      }, 500);
    });

    return {
      pokemonInfos,
      backgroundColors,
      headers,
      items,
      inputValue,

      loadingStatus,

      previousPokemon,
      nextPokemon,
      searchPokemon,
    };
  },
};
</script>

<style lang="scss">
.card-title {
  font-family: "Press Start 2P", cursive;
  font-size: 25px;
}
p {
  font-family: "Press Start 2P", cursive;
  font-size: 12px;
  margin: 0 !important;
  align-self: center;
}
.pokemon-types {
  border: 1px solid black !important;
  padding: 4px 8px;
  border-radius: 25px;
  color: white;
  font-family: "Press Start 2P", cursive;
  font-size: 12px;
}
.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  font-size: 10px !important;
  font-family: "Press Start 2P", cursive;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  font-size: 10px !important;
  font-family: "Press Start 2P", cursive;
}
</style>
