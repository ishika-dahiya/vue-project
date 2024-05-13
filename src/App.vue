<template>
  <!-- Root element of the Vue application -->
  <div id="vue-app" class="font-sans mt-14">
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