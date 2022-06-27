<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "@/components/Navbar.vue";
import Footer from './components/Footer.vue'


export default {
  name: "App",
  components: { Navbar,Footer },
  data: () => ({}),
  created() {
    this.getCharacters();
  },
  methods: {
    ...mapActions(["getCharacters"]),
  },
};
</script>

<style >
@import "@/assets/base.css";
#app{
  background-color:#EDEDED;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
