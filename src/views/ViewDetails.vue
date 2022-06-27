<template>
  <div class="background">
    <div class="info-favorite d-flex justify-end">
      <a v-if="!isFavorite" @click="add()">Add Favorites</a>
      <a v-else @click="remove()">Remove Favorites</a>
    </div>
    <section class="container info-section">
      <div class="top">
        <div class="image">
          <img :src="character.image" :alt="character.name" />
        </div>

        <div class="person">
          <div class="person-name">
            <h2>{{ character.name }}</h2>
            <Fav v-if="isFavorite" fav="true" />
          </div>
          <div class="person-data">
            <ul class="person-data-list">
              <li>
                <h4 class="pe-2">Status : </h4>
                <p>{{ character.status }}</p>
              </li>
              <li>
                <h4 class="pe-2">Species : </h4>
                <p>{{ character.species }}</p>
              </li>
              <li>
                <h4 class="pe-2">Gender : </h4>
                <p>{{ character.gender }}</p>
              </li>
              <li>
                <h4 class="pe-2">Origin : </h4>
                <p>{{ character.origin.name }}</p>
              </li>
              <li>
                <h4 class="pe-2">Location : </h4>
                <p>{{ character.location.name }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="episodes">
        <h4>Episodes :</h4>
        <ul>
          <li v-for="(item, index) in episode" :key="index">{{ item.episode }} - {{ item.name }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Fav from "@/components/Fav.vue";
export default {
  name: "viewDetails",
  components: { Fav },
  data: () => ({
    character: "",
    episodes: [],
  }),
  computed: {
    ...mapState(["characters", "episode", "favorites"]),

    isFavorite() {
      let item = this.item;
      return this.favorites.some((fav) => fav.id === this.character.id);
    },
  },
  methods: {
    ...mapActions(["getEpisode"]),
    ...mapActions(["addFavorites", "removeFavorites"]),

    add() {
      console.log("here");
      this.addFavorites(this.character);
    },
    remove() {
      this.removeFavorites(this.character);
    },
  },
  created() {
    this.character = this.characters.results.find((item) => item.id == this.$route.params.id);

    let episode = this.character.episode;
    episode.forEach((element) => {
      this.getEpisode(element);
    });
  },
};
</script>

<style scoped>
.info-section {
  padding: 20px;
  margin: 10px auto;
  max-width: 650px;
  background-color: white;
  border-radius: 10px;
}
.top {
  padding: 0px;
  max-width: 900px;
  background-color: white;
  display: flex;
  width: 100%;
}
.image img {
  height: 190px;
  width: 190px;
  object-fit: cover;
  object-position: right;
}

.person {
  margin-left: 20px;
}

.person-name {
  min-width: 400px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  padding-bottom: 20px;
}

h2 {
  font-size: 24px;
  font-weight: 600;
  color: #444;
  text-align: center;
  text-size-adjust: inherit;
}

h4 {
  display: inline;
  font-size: 15px;
  font-weight: 600;
  color: #444;
}
.person-data-list > li {
  margin: -8px 0 0 -30px;
  list-style: none;
  display: flex;
}

.background {
  min-height: 80vh;
  padding-top: 50px;
  padding-bottom: 40px;
  margin-bottom: 0;
}
.info-favorite {
  /* padding: 20px; */
  margin: 10px auto;
  max-width: 650px;
}
a {
  font-size: 16px;
  color: rgb(148, 148, 148);
  margin: 0 10px;
}
a:hover {
  /* text-decoration: underline; */
  color: var(--primary-color-1);
}
p {
  color: #666;
  font-style: italic;
}
/* ********************************** */

@media only screen and (max-width: 768px) {
  .background {
    padding: 40px 5px;
  }
  .info-section {
    padding: 10px;
  }
  .top {
    flex-direction: column;
  }
  .episodes {
    margin-top: -10px
  }
  h2 {
    font-size: 18px;
  }
  .person-data-list > li {
    margin: -8px 0 0 -45px;
    list-style: none;
    display: flex;
  }
  .image {
    display: flex;
    justify-content: center;
  }
}
</style>
