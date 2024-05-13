<template>
  <div class="about-view p-4 bg-gray-300">
    <div
      class="introduction-box p-4 bg-gray-100 border rounded-lg mx-auto max-w-2xl"
    >
      <h2 class="text-xl font-semibold">About UI Frameworks</h2>
      <p class="mt-2">
        UI frameworks are important tools in web development. They offer
        ready-made components and styling options, making it easier for
        developers to create attractive and consistent user interfaces. These
        frameworks simplify the process of building the visual aspects of
        websites and applications, resulting in better-looking designs and
        smoother development workflows.
      </p>
    </div>

    <div
      class="frameworks-box flex flex-col flex-wrap justify-center mt-8 mx-auto max-w-lg"
    >
      <h3 class="font-bold text-2xl text-center">Popular UI Frameworks:</h3>
      <div
        class="framework p-4"
        v-for="(framework, index) in frameworks"
        :key="index"
      >
        <h4 class="text-lg font-bold text-center">
          {{ framework.name }}
        </h4>
        <div class="bg-white m-2 p-2 rounded-lg text-center">
          <p class="font-medium">{{ framework.description }}</p>
          <a
            :href="framework.website"
            target="_blank"
            class="text-blue-400 text-lg font-bold"
            >{{ framework.website }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      // Array of UI frameworks
      frameworks: [
        {
          name: "Tailwind CSS",
          description:
            "Tailwind CSS is a utility-first CSS framework for building custom designs without having to leave your HTML.",
          website: "https://tailwindcss.com/",
        },
        {
          name: "Vuetify",
          description:
            "Vuetify is a Material Design component framework for Vue.js.",
          website: "https://vuetifyjs.com/",
        },
        {
          name: "Element UI",
          description: "Element UI is a Vue.js 2.0 UI Toolkit for Web.",
          website: "https://element.eleme.io/",
        },
        {
          name: "BootstrapVue",
          description:
            "BootstrapVue provides one of the most comprehensive implementations of Bootstrap v4 components and grid system for Vue.js.",
          website: "https://bootstrap-vue.org/",
        },
      ],
    };
  },
};
</script>
