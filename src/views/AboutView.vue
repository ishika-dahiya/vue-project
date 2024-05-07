<template>
  <div class="about-view">
    <div class="introduction-box">
      <h2>About JavaScript Frameworks</h2>
      <p>
        JavaScript frameworks are essential tools for building modern web
        applications. They provide developers with the necessary tools and
        structure to create scalable and maintainable codebases.
      </p>
    </div>

    <div class="frameworks-box">
      <h3>Popular JavaScript Frameworks:</h3>
      <div
        class="framework"
        v-for="(framework, index) in frameworks"
        :key="index"
      >
        <h4>{{ framework.name }}</h4>
        <p>{{ framework.description }}</p>
        <a :href="framework.website" target="_blank">{{ framework.website }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Component name
  name: "AboutView",

  // Data properties
  data() {
    return {
      // Array of JavaScript frameworks
      frameworks: [
        {
          name: "Vue.js",
          description:
            "Vue.js is a progressive JavaScript framework for building user interfaces.",
          website: "https://vuejs.org/",
        },
        {
          name: "React",
          description:
            "React is a JavaScript library for building user interfaces, developed by Facebook.",
          website: "https://reactjs.org/",
        },
        {
          name: "Angular",
          description:
            "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google.",
          website: "https://angular.io/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.about-view {
  max-width: 600px;
  margin: 0 auto;
}

.introduction-box {
  margin: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.frameworks-box {
  margin-top: 20px;
}

.framework {
  margin-bottom: 20px;
}

.framework a {
  color: blue;
  text-decoration: underline;
}
</style>
