<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
.navbar {
  background-color: #333;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar a {
  color: white;
  text-decoration: none;
  margin: 0px 50px ;
}
</style>
