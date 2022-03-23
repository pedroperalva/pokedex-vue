<template>
  <div style="height: 100%">
    <v-app-bar elevation="4" outlined>
      <img
        src="../assets/ball-icon-168685.png"
        :width="$vuetify.breakpoint.smAndDown ? 50 : 64"
        :height="$vuetify.breakpoint.smAndDown ? 50 : 64"
      />
      <a
        href="#"
        class="mx-10"
        @click.prevent="$router.push({ name: 'Pokedex' })"
        >Pokedex</a
      >
      <a href="#" @click.prevent="$router.push({ name: 'PokemonBio' })"
        >Search</a
      >
    </v-app-bar>
    <div class="content-division">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-division {
  height: calc(100% - 64px);
}
.header-title {
  font-family: "Press Start 2P", cursive;
}
a {
  font-family: "Press Start 2P", cursive;
  text-decoration: none;
  color: black !important;
}
@media screen and (max-width: 1024px) {
  .content-division {
    height: 100%;
  }
  a {
    font-size: 12px;
  }
}
</style>
