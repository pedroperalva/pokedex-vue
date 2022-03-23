<template>
  <div class="button-container pt-10">
    <v-btn @click="$emit('gen1')">GEN I</v-btn>
    <v-btn @click="$emit('gen2')">GEN II</v-btn>
    <v-btn @click="$emit('gen3')">GEN III</v-btn>
    <v-btn @click="$emit('gen4')">GEN IV</v-btn>
    <v-btn @click="$emit('gen5')">GEN V</v-btn>
    <v-btn @click="$emit('gen6')">GEN VI</v-btn>
    <v-btn @click="$emit('gen7')">GEN VII</v-btn>
    <v-btn @click="$emit('gen8')">GEN VIII</v-btn>
  </div>
</template>

<style lang="scss" scoped>
.button-container {
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to right,
    rgb(0, 140, 255),
    rgb(174, 0, 255)
  );
  gap: 20px;
}
@media screen and (max-width: 1024px) {
  .button-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    padding: 30px;
  }
}
</style>
