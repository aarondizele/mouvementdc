import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/parti-politique",
    component: () => import("../views/About.vue")
  },
  {
    path: "/actualites",
    component: () => import("../views/Publications.vue")
  },
  {
    path: "/activites",
    component: () => import("../views/Activities.vue")
  },
  {
    path: "/membres",
    component: () => import("../views/Team.vue")
  },
  {
    path: "/contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "**",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // linkActiveClass: "activeLink",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

export default router
