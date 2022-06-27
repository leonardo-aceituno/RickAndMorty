<template>
  <div class="container box">
    <h2>BUSCA TU PERSONAJE</h2>
    <div class="input-control">
      <input type="text" placeholder="nombre personaje" v-model="name" @keyup.enter="search" />
      <button @click="search">SEARCH</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { DATA_API } from "@/helpers/constantes";
export default {
  data: () => ({
    name: "",
  }),
  methods: {
    ...mapActions(["page", "cleanError"]),

    search() {
      let payload = DATA_API.URL + "/?name=" + this.name;
      this.page(payload);
    },
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
.input-control {
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  background-color: white;
  display: flex;
}

input {
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid black;
  font-weight: 500;
  white-space: nowrap;
  width: 100%;
  min-width: 450px;
  margin-right: 10px;
}

button {
  background-color: var(--primary-color-1);
  border: 2px solid var(--primary-color-1);
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 14px;
}

button:hover {
  background-color: var(--primary-color-2);
  border: 2px solid var(--primary-color-2);
}

@media only screen and (max-width: 768px) {
  .input-control {
    white-space: no-wrap;
    width: fit-content;
    transform: scale(0.9);
    min-width: 300px;
    display: flex;
    flex-direction: column;
  }

  input {
    min-width: 400px;
    margin-right: 5px;
  }

  button {
    margin-top: 15px;
  }

  .box {
    padding: 5px 0;
  }

  h2 {
  padding: 10px 10px;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: 2px;
  margin-bottom: 20px;
}
}
</style>
