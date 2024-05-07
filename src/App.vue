<template>
  <!-- Root element of the Vue application -->
  <div id="vue-app">
    <!-- HelloWorld component -->
    <!-- Display a welcome message using text interpolation -->
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- NavBar component -->
    <!-- Display a navigation bar with links to different routes -->
    <NavBar></NavBar>

    <!-- Router view -->
    <!-- Display the component corresponding to the current route -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",

  // Registering components used in the template
  components: {
    HelloWorld,
    NavBar,
  },
};
</script>

<style>

#vue-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 60px;
}

.navbar {
  background-color: #333;
  padding: 10px;
}

.navbar a {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}
</style>
