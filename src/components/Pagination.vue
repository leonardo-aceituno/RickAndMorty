<template>
  <div>
    <div class="box">
      <a @click="pages(info.prev)" :class="{ disabled: validatePrev }" class="a_class"> Prev </a>

      <a @click="pages(info.next)" :class="{ disabled: validateNext }" class="a_class"> Next </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Pagination",
  props: ["info"],
  methods: {
    ...mapActions(["page"]),

    pages(page) {
      this.page(page);
    },
  },
  computed: {
    validatePrev() {
      let info = this.info;
      return info.prev == null;
    },
    validateNext() {
      let info = this.info;
      return info.next == null;
    },
  },
};
</script>

<style scoped>
.disabled.a_class {
  pointer-events: none;
  color: rgb(148, 148, 148);
  display: none;
}
.box {
  display: flex;
  justify-content: center;
  /* padding: 20px 0; */
  margin: 0px 0 40px 0;
}
.a_class {
  font-size: 30px;
  color: rgb(148, 148, 148);
  border-bottom: 1px solid transparent;
  margin: 0 20px;
}

.a_class:hover {
  /* text-decoration: underline; */
  color: var(--primary-color-1);
  border-color: #dba904;
}

@media only screen and (max-width: 768px) {
  .a_class {
    font-size: 20px;
  }
}
</style>
