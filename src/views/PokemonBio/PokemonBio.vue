<template>
  <div style="height: 100%">
    <div
      v-if="loadingStatus"
      class="d-flex justify-center align-center"
      style="height: 100%; background-color: yellow"
    >
      <img
        src="https://i.imgur.com/aMz1Qtu.gif"
        :width="$vuetify.breakpoint.smAndDown ? 280 : 480"
        :height="$vuetify.breakpoint.smAndDown ? 220 : 360"
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
      <div class="search-bio mb-10">
        <v-text-field
          label="Search Pokémon"
          solo
          hide-details="true"
          color="red"
          class="text-field"
          v-model="inputValue"
        ></v-text-field>
        <v-btn
          style="height: 48px"
          :width="$vuetify.breakpoint.smAndDown ? '100%' : ''"
          @click="searchPokemon"
          >Search</v-btn
        >
      </div>
      <v-card
        class="d-flex flex-column align-center pa-5"
        :width="$vuetify.breakpoint.smAndDown ? 320 : 800"
        style="border: 2px solid black"
      >
        <div v-if="errorMessage" class="d-flex flex-column align-center">
          <h1>{{ errorMessage }}</h1>
          <img
            src="../../assets/ditto.png"
            :width="$vuetify.breakpoint.smAndDown ? 280 : 480"
            :height="$vuetify.breakpoint.smAndDown ? 280 : 360"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div v-else>
          <h1 class="card-title text-uppercase text-center">
            {{ pokemonInfos.id }}. {{ pokemonInfos.name }}
          </h1>
          <div class="pokemon-img-container" style="width: 100%">
            <v-btn
              class="prev-btn"
              :color="backgroundColors[0]"
              dark
              @click="previousPokemon"
              >Previous</v-btn
            >
            <img
              class="pokemon-img my-4"
              :src="pokemonInfos.sprites.front_default"
              width="200"
              height="200"
            />
            <v-btn
              class="next-btn"
              :color="backgroundColors[0]"
              dark
              @click="nextPokemon"
              >Next</v-btn
            >
          </div>

          <div class="types-container my-6">
            <div class="d-flex">
              <p class="mr-1">TYPES:</p>
              <div
                v-for="(type, i) in pokemonInfos.types"
                :key="type.type.name"
              >
                <p
                  class="pokemon-types mr-1 text-uppercase"
                  :style="{ 'background-color': backgroundColors[i] }"
                >
                  {{ type.type.name }}
                </p>
              </div>
            </div>

            <div
              class="d-flex"
              :class="$vuetify.breakpoint.smAndDown ? 'ml-0 mt-4' : 'ml-10'"
            >
              <p class="text-uppercase mr-4">
                weight:{{ pokemonInfos.weight }}
              </p>
              <p class="text-uppercase">height:{{ pokemonInfos.height }}</p>
            </div>
          </div>

          <v-data-table
            :headers="headers"
            :items="items"
            hide-default-footer
            disable-sort
            mobile-breakpoint="1024"
            class="table-stats elevation-3"
          >
          </v-data-table>
        </div>
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
    const { pokemonInfos, loadingStatus, errorMessage } = useState("pokebio", [
      "pokemonInfos",
      "loadingStatus",
      "errorMessage",
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

      errorMessage,
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
.pokemon-img-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search-bio {
  display: flex;
  width: 500px;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.types-container {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 1024px) {
  .search-bio {
    width: 80%;
    flex-direction: column;
    margin-top: 60px;
  }
  .text-field {
    width: 100%;
  }
  .pokemon-img-container {
    display: grid;
    grid-template-rows: repeat(200px, 30px);
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
  .pokemon-img {
    grid-area: 1 / 1 / 2 / 3;
    justify-self: center;
  }
  .prev-btn {
    grid-area: 2 / 1 / 3 / 2;
    width: 80px;
    justify-self: flex-end;
  }
  .next-btn {
    grid-area: 2 / 2 / 3 / 3;
    width: 80px;
  }
  .types-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
