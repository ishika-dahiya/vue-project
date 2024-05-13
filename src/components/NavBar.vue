<template>
  <div class="navbar bg-gray-900 p-4 flex items-center justify-center">
    <router-link to="/" class="text-white mx-2">Home</router-link>
    <router-link to="/about" class="text-white mx-4">About</router-link>
    <router-link to="/contact" class="text-white mx-4">Contact</router-link>
    <router-link to="/submit" class="text-white mx-4">Submissions</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

