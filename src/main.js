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
  apiKey: "AIzaSyCVJ3LAD-WHQwPe4jAji5bLKjXH01IvNYs",
  authDomain: "projects-vue-leoaceituno.firebaseapp.com",
  projectId: "projects-vue-leoaceituno",
  storageBucket: "projects-vue-leoaceituno.appspot.com",
  messagingSenderId: "376959026755",
  appId: "1:376959026755:web:556b74bccde951cfca76f6",
  measurementId: "G-LP089KCGR8"
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
