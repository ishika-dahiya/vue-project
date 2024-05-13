import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes";
import './assets/style.css'

Vue.config.productionTip = false;

Vue.use(VueRouter);

// Create a new Vue Router instance with routes configuration
const router = new VueRouter({
  routes,
});

//creating new Vue Instance by calling Vue constructor with object as an argument.
new Vue({ 
  router, 
  render: (h) => h(App) 
}).$mount("#app"); //Mount the Vue instance to the DOM element with the id 'app'
