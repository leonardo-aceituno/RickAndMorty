import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS-uqkR2CoFr-TuwcJ996PQAYhzq30H9U",
  authDomain: "projects-vue-b8c29.firebaseapp.com",
  projectId: "projects-vue-b8c29",
  storageBucket: "projects-vue-b8c29.appspot.com",
  messagingSenderId: "587297944719",
  appId: "1:587297944719:web:8e6521a94188e01c11ecfa",
  measurementId: "G-T9YRFE054E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
