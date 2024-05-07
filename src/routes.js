import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";

// Define routes for Vue Router
const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
];

export default routes;
