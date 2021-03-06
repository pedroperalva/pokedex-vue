import Vue from "vue";
import VueRouter from "vue-router";
import Default from "../layouts/Default.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        path: "/",
        name: "Pokedex",
        component: () => import("../views/Pokedex/Pokedex.vue"),
      },
      {
        path: "/pokemon-bios",
        name: "PokemonBio",
        component: () => import("../views/PokemonBio/PokemonBio.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
