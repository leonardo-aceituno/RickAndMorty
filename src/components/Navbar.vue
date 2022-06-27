<template>
  <header>
    <nav class="container">
      <h1>
        <router-link to="/">Rick<span>&</span>Morty</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/characters">Characters</router-link>
        </li>
        <li>
          <router-link to="/favorites">
            <v-badge color="#FFC400" :content="favorite">Favorites</v-badge>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["favorites"]),

    favorite() {
      return this.favorites == "" ? "0" : this.favorites.length;
    },
  },
};
</script>

<style scoped>
header {
  background-color: black;
  color: var(--primary-color);
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
nav h1 a {
  color: white;
  font-size: 40px;
  font-weight: 500;
  text-decoration: none;
}
nav h1 a span {
  color: var(--primary-color-1);
  font-weight: bold;
}
ul {
  display: flex;
  list-style: none;
}
li a {
  padding: 10px 2px;
  margin: 0 20px;
  font-size: 20px;
  color: white;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease-out;
  text-decoration: none;
}
li a:hover,
li a:active,
li a.router-link-active {
  color: var(--primary-color-1);
  border-color: var(--primary-color-1);
  text-decoration: none;
}
@media only screen and (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
  }
  nav h1 a {
    font-size: 30px;
  }
  ul {
    justify-content: space-evenly;
    width: 100%;
    padding: 0;
    margin-top: 10px;
  }
  li a {
    font-size: 18px;
    border: none;
  }
  li a:hover,
  li a:active,
  li a.router-link-active {
    border: none;
  }
}
</style>
