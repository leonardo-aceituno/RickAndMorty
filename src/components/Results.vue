<template>
  <div class="container box">
    <p class="results">Resultados: {{ results }}</p>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: ["data"],

  computed: {
    results() {
      let data = this.data;
      return data.info.count;
    },
  },
};
</script>

<style scoped>
.box{
    margin-top: 20px;
}
.results {
  padding: 10px 20px;
  display: inline;
  font-size: 15px;
  font-weight: 600;
  color: #444;
}
</style>
