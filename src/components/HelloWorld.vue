<template>
  <div class="hello p-4 bg-white rounded shadow-md">
    <!--  text interpolation using the “Mustache” syntax to display value of 'msg' prop-->
    <h1 class="text-2xl font-bold text-center">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  // this component accepts a prop called msg, which is of type String. 
  props: {
    // Props are used to pass data from a parent component to child component.
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
</style>
