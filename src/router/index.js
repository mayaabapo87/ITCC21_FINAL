import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import SkillsPage from "../views/SkillsPage.vue";
import ContactPage from "../views/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage
    },
    {
      path: "/skills",
      name: "skills",
      component: SkillsPage
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage
    }
  ]
});

export default router;
