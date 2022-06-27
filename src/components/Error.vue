<template>
  <div class="container box">
    <h3>Personaje no encontrado</h3>
    <p class="back" @click="restore">Volver</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["cleanError", "getCharacters"]),

    restore() {
      this.cleanError();
      this.getCharacters();
    },
  },
};
</script>

<style scoped>
.box {
  padding: 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back {
  color: blue;
}

.back:hover{
    text-decoration: underline;
}
</style>
