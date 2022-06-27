import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { DATA_API } from "@/helpers/constantes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: "",
    error: false,
    favorites: [],
    episode: [],
  },
  getters: {},
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },

    setError(state, payload) {
      state.error = payload;
    },

    setFavorites(state, favorites) {
      state.favorites.push(favorites);
    },

    removeFavorites(state, favorites) {
      const index = state.favorites.findIndex((fav) => fav.id === favorites.id);
      state.favorites.splice(index, 1);
    },

    setEpisode(state, payload) {
      state.episode.push(payload);
    },
  },
  actions: {
    async getCharacters({ commit }) {
      let response = await axios.get(DATA_API.URL);
      commit("setCharacters", response.data);
    },

    async page({ commit }, payload) {
      try {
        let response = await axios.get(payload);
        commit("setCharacters", response.data);
      } catch (error) {
        commit("setError", true);
        commit("setCharacters", "");
      }
    },

    async cleanError({ commit }) {
      commit("setError", false);
    },

    addFavorites({ commit }, payload) {
      commit("setFavorites", payload);
    },

    removeFavorites({ commit, state }, character) {
      commit("removeFavorites", character);
    },

    async getEpisode({ commit }, payload) {
      let response = await axios.get(payload);
      commit("setEpisode", response.data);
    },
  },
  modules: {},
});
