(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44c15352"],{"11b2":function(e,n,t){},"56e2":function(e,n,t){"use strict";t("11b2")},"7d51":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"main-pokedex-container",staticStyle:{height:"100%"}},[t("generation-btns",{on:{gen1:function(n){return e.getPokemonList(e.pokemonGens.gen1)},gen2:function(n){return e.getPokemonList(e.pokemonGens.gen2)},gen3:function(n){return e.getPokemonList(e.pokemonGens.gen3)},gen4:function(n){return e.getPokemonList(e.pokemonGens.gen4)},gen5:function(n){return e.getPokemonList(e.pokemonGens.gen5)},gen6:function(n){return e.getPokemonList(e.pokemonGens.gen6)},gen7:function(n){return e.getPokemonList(e.pokemonGens.gen7)},gen8:function(n){return e.getPokemonList(e.pokemonGens.gen8)}}}),t("pokemon-list",{attrs:{imageURL:e.imageURL,loadingStatus:e.loadingStatus,inputValue:e.inputValue,filterPokemon:e.filterPokemon},on:{"click:search":e.searchPokemonInfos,input:function(n){e.inputValue=n}}})],1)},i=[],s=(t("4de4"),t("d3b7"),t("caad"),t("2532"),t("b0c0"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"button-container pt-10"},[t("v-btn",{on:{click:function(n){return e.$emit("gen1")}}},[e._v("GEN I")]),t("v-btn",{on:{click:function(n){return e.$emit("gen2")}}},[e._v("GEN II")]),t("v-btn",{on:{click:function(n){return e.$emit("gen3")}}},[e._v("GEN III")]),t("v-btn",{on:{click:function(n){return e.$emit("gen4")}}},[e._v("GEN IV")]),t("v-btn",{on:{click:function(n){return e.$emit("gen5")}}},[e._v("GEN V")]),t("v-btn",{on:{click:function(n){return e.$emit("gen6")}}},[e._v("GEN VI")]),t("v-btn",{on:{click:function(n){return e.$emit("gen7")}}},[e._v("GEN VII")]),t("v-btn",{on:{click:function(n){return e.$emit("gen8")}}},[e._v("GEN VIII")])],1)}),r=[],c=(t("56e2"),t("2877")),a=t("6544"),u=t.n(a),l=t("8336"),m={},f=Object(c["a"])(m,s,r,!1,null,"31f072ce",null),g=f.exports;u()(f,{VBtn:l["a"]});var k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"main-container"},[e.loadingStatus?t("div",{staticClass:"loading-container"},[t("img",{attrs:{src:"https://i.imgur.com/aMz1Qtu.gif",width:e.$vuetify.breakpoint.smAndDown?280:480,height:e.$vuetify.breakpoint.smAndDown?220:360,frameBorder:"0",allowFullScreen:""}})]):t("div",{staticClass:"d-flex flex-column align-center"},[t("div",{staticClass:"search-bar my-10"},[t("v-text-field",{attrs:{label:"Search Pokémon",solo:"","hide-details":"true",color:"red",value:e.inputValue},on:{input:function(n){return e.$emit("input",n)}}})],1),t("div",{staticClass:"pokemon-container pa-6"},e._l(e.filterPokemon,(function(n,o){return t("v-card",{key:o,staticClass:"d-flex flex-column align-center justify-space-around",staticStyle:{border:"3px solid white"},attrs:{height:"200",color:"#EAEAEA"},on:{click:function(t){return e.$emit("click:search",n.url)}}},[t("h1",{staticClass:"pokemon-name text-uppercase"},[e._v(" "+e._s(n.id)+". "+e._s(n.name)+" ")]),t("div",{staticClass:"img-container"},[t("img",{attrs:{src:e.imageURL+n.id+".png",width:"120",height:"120"}})]),t("div")])})),1)])])},p=[],d={name:"PokemonList",props:{imageURL:{type:String},filterPokemon:{type:Array},loadingStatus:{type:Boolean},inputValue:{type:String}}},v=d,b=(t("ce77"),t("b0af")),P=t("8654"),h=Object(c["a"])(v,k,p,!1,null,"506938b7",null),L=h.exports;u()(h,{VCard:b["a"],VTextField:P["a"]});var I=t("ed09"),G=t("8d7e"),_={name:"Pokedex",components:{PokemonList:L,GenerationBtns:g},setup:function(e,n){var t=n.root,o=Object(I["e"])("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"),i=Object(I["e"])(""),s=Object(G["d"])("pokedex",["pokemonList","loadingStatus"]),r=s.pokemonList,c=s.loadingStatus,a=Object(G["c"])(["resetPokemonInfos"]),u=a.resetPokemonInfos,l=Object(G["a"])(["getPokemonList","getPokemonInfos"]),m=l.getPokemonList,f=l.getPokemonInfos,g=Object(I["a"])((function(){return""!==i.value?r.value.filter((function(e){return e.name.includes(i.value.toLowerCase())})):r.value})),k={gen1:{offset:"0",limit:"151"},gen2:{offset:"151",limit:"100"},gen3:{offset:"251",limit:"135"},gen4:{offset:"386",limit:"107"},gen5:{offset:"494",limit:"155"},gen6:{offset:"649",limit:"72"},gen7:{offset:"721",limit:"88"},gen8:{offset:"809",limit:"905"}},p=function(e){u(),f(e),t.$router.push({name:"PokemonBio"})};return Object(I["d"])((function(){m(k.gen1)})),{imageURL:o,pokemonList:r,loadingStatus:c,inputValue:i,pokemonGens:k,getPokemonList:m,searchPokemonInfos:p,filterPokemon:g}}},$=_,w=Object(c["a"])($,o,i,!1,null,null,null);n["default"]=w.exports},"8f25":function(e,n,t){},ce77:function(e,n,t){"use strict";t("8f25")}}]);
//# sourceMappingURL=chunk-44c15352.7a252ad6.js.map