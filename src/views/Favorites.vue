<template>
  <div class="container ">
    <h2 class="box">PERSONAJES FAVORITOS</h2>
    <Layout :data="favorites" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Layout from "@/components/Layout.vue";

export default {
  name: "favorites",
  components: { Layout },
  computed: {
    ...mapState(["favorites", "error"]),
  },
};
</script>

<style scoped>
.box {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  padding: 0 10px;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

</style>
