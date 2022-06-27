<template>
  <div>
    <div v-if="error">
      <Error/>
    </div>
    <div v-else>
      <div v-if="characters">
        <Search />
        <Results :data="characters"/>
        <Layout :data="characters.results" />
        <Pagination :info="characters.info" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Search from "@/components/Search.vue";
import Layout from "@/components/Layout.vue";
import Error from "@/components/Error.vue";
import Pagination from "@/components/Pagination.vue";
import Results from "@/components/Results.vue";

export default {
  name: "Home",
  components: { Search, Layout, Error,Pagination,Results },
  data: () => ({}),
  computed: {
    ...mapState(["characters","error"]),
  },
};
</script>

<style scoped></style>
