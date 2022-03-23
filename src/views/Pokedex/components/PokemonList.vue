<template>
  <section class="main-container">
    <div v-if="loadingStatus" class="loading-container">
      <img
        src="https://i.imgur.com/aMz1Qtu.gif"
        :width="$vuetify.breakpoint.smAndDown ? 280 : 480"
        :height="$vuetify.breakpoint.smAndDown ? 220 : 360"
        frameBorder="0"
        allowFullScreen
      />
    </div>
    <div v-else class="d-flex flex-column align-center">
      <div class="search-bar my-10">
        <v-text-field
          label="Search Pokémon"
          solo
          hide-details="true"
          color="red"
          :value="inputValue"
          @input="$emit('input', $event)"
        ></v-text-field>
      </div>
      <div class="pokemon-container pa-6">
        <v-card
          v-for="(pokemon, index) in filterPokemon"
          :key="index"
          class="d-flex flex-column align-center justify-space-around"
          height="200"
          color="#EAEAEA"
          style="border: 3px solid white"
          @click="$emit('click:search', pokemon.url)"
        >
          <h1 class="pokemon-name text-uppercase">
            {{ pokemon.id }}. {{ pokemon.name }}
          </h1>
          <div class="img-container">
            <img
              :src="imageURL + pokemon.id + '.png'"
              width="120"
              height="120"
            />
          </div>
          <div></div>
        </v-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PokemonList",
  props: {
    imageURL: { type: String },
    filterPokemon: { type: Array },
    loadingStatus: { type: Boolean },
    inputValue: { type: String },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to right,
    rgb(0, 140, 255),
    rgb(174, 0, 255)
  );

  background-size: 100%;
  height: 100% !important;
}
.pokemon-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: row;
  grid-gap: 20px;
  width: 1024px;
}
.img-container {
  border-radius: 100%;

  padding: 5px;

  background-color: white;
}
.pokemon-name {
  font-family: "Press Start 2P", cursive;
  font-size: 10px;
}
.search-bar {
  background-color: white;
  width: 500px;
}
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1024px) {
  .pokemon-container {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
  .search-bar {
    width: 80%;
  }
  .loading-container {
    align-items: flex-start;
  }
}
</style>
