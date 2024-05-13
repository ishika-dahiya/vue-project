import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactForm from "./components/ContactForm.vue";
import SubmitPage from "./components/SubmitPage.vue";

// Define routes for Vue Router
const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/contact", component: ContactForm },
  { path: "/submit", component: SubmitPage },
];

export default routes;
