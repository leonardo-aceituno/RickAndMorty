import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/characters" },
  {
    path: "/characters",
    name: "home",
    component: Home,
    // component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("../views/Favorites.vue"),
  },
  { path: "/characters/:id",
    name:"viewDetails",
    component: () => import("../views/ViewDetails.vue"),
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
