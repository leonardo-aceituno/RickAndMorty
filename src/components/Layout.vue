<template>
  <section v-if="data" class="container list-section">
    <ul>
      <Card v-for="item in data" :key="item.id" :item="item" />
    </ul>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Layout",
  props: ["data"],
  components: { Card },
  computed: {
    results() {
      let data = this.data;
      return data.info.count;
    },
  },
};
</script>

<style scoped>
.list-section {
  padding-bottom: 60px;
}
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 auto;
}
</style>
