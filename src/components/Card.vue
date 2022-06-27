<template>
  <li>
    <div class="back"></div>
    <article class="card">
      <div class="card-image">
        <div class="image">
          <img :src="item.image" :alt="item.name" />
        </div>
      </div>
      <div class="card-info">
        <header>
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.species }}</p>
          </div>

          <Fav v-if="isFavorite" fav="true" />
        </header>

        <div class="my-15 card-details">
          <v-icon small color="green darken-2"> mdi-earth </v-icon>
          <h4>Last known location:</h4>

          <p>{{ item.location.name }}</p>
        </div>
      </div>
    </article>

    <div class="actions">
      <div v-if="isFavorite">
        <v-btn color="#FFC400" class="rounded-pill" @click="remove()"> Remove Favorite </v-btn>
      </div>
      <div v-else>
        <v-btn outlined color="#FFC400" dark class="rounded-pill" @click="add"> Add Favorite </v-btn>
      </div>

      <v-btn color="#FFC400" class="rounded-pill ms-2" :to="`/characters/${item.id}`"> View Details </v-btn>
    </div>
  </li>
</template>

<script>
import Boton from "@/components/Button.vue";
import Fav from "@/components/Fav.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Card",
  props: ["item"],
  components: { Boton, Fav },
  methods: {
    ...mapActions(["addFavorites", "removeFavorites"]),
    add() {
      console.log("here");
      this.addFavorites(this.item);
    },
    remove() {
      this.removeFavorites(this.item);
    },
  },
  computed: {
    ...mapState(["favorites"]),

    isFavorite() {
      let item = this.item;
      return this.favorites.some((fav) => fav.id === item.id);
    },
  },
};
</script>

<style scoped>
li {
  position: relative;
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.8) 0px 30px 60px -30px;
  padding: 30px;
  border-radius: 5px;
  margin: 20px;
  min-width: 480px;
  height: 250px;
  flex: 1;
  background-color: rgb(255, 255, 255);
  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease-out;
}
.card {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.card-image {
  height: 190px;
  width: 190px;
}
img {
  width: 190px;
  height: 190px;
  object-fit: cover;
  object-position: right;
}
.card-info {
  flex: 1;
  margin-left: 30px;
}
header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}
h3 {
  font-size: 24px;
  font-weight: 600;
  color: #444;
}
h4 {
  display: inline;
  font-size: 15px;
  font-weight: 600;
  color: #444;
}
p {
  color: #666;
  font-style: italic;
}
.badges {
  margin-bottom: 10px;
}
.actions {
  display: flex;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
  opacity: 0;
  transition: all 0.2s ease-out;
  transition-delay: 0.3s;
  z-index: 1;
}
.actions div {
  margin-left: 10px;
  margin-bottom: 5px;
}
.back {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.849);
  transition: all 1s ease-out;
  z-index: 1;
  transform: scaleX(0);
}
li:hover .back {
  transform: scaleX(1);
  transform-origin: top;
}
li:hover .actions {
  opacity: 1;
}
@media only screen and (max-width: 1150px) {
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #444;
  }
}
@media only screen and (max-width: 768px) {
  li {
    padding: 10px;
    margin: 10px;
    height: 210px;
    min-width: 400px;
  }
  .card-info {
    margin-left: 10px;
  }
  h3 {
    font-size: 16px;
  }
}
@media only screen and (max-width: 425px) {
  li {
    min-width: 300px;
  }
  .card-image {
    /* display: none; */
  }
  .card-details{
    display: none;
  }
}
</style>
