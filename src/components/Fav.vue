<template>
  <div>
    <div v-if="fav">
      <v-icon large color="#FFC400"> mdi-star-circle </v-icon>
    </div>
    <div v-else>
      <v-icon large color="#FFC400"> mdi-star-circle-outline </v-icon>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "fav",
  props: ["fav"],
};
</script>
