<template>
  <div class="home-view">
    <div
      class="introduction-box p-4 m-8 bg-gray-100 border border-gray-300 rounded max-w-xl mx-auto"
    >
      <h2 class="text-xl font-semibold">Welcome to Vue.js Basics</h2>
      <p class="mt-2">
        Vue.js is a progressive JavaScript framework used for building user
        interfaces. It is designed from the ground up to be incrementally
        adoptable and can be integrated into existing projects easily.
      </p>
    </div>

    <div class="features-box m-8 max-w-lg gap-8 flex flex-col flex-wrap justify-center mx-auto">
      <h3 class="font-bold text-2xl">Features:</h3>

      <!-- Data Binding Example -->
      <div
        class="feature-item p-4 bg-slate-300 border border-gray-500 rounded mr-4 mb-4"
      >
        <h4 class="text-lg font-semibold">Data Binding:</h4>
        <input
          type="text"
          v-model="message"
          placeholder="Type something..."
          class="mt-2 p-1 border border-gray-300 rounded-2xl w-full"
        />
        <p v-if="message" class="mt-2">Message: {{ message }}</p>
      </div>

      <!-- Computed Properties Example -->
      <div class="feature-item p-4 bg-slate-300 border border-gray-500 rounded mr-4 mb-4">
        <h4 class="text-lg font-semibold">Computed Properties:</h4>
        <p class="mt-2 p-1 bg-white border border-gray-300 rounded-2xl w-full">Original Message: {{ message }}</p>
        <p v-if="message" class="mt-2">Reversed Message: {{ reversedMessage }}</p>
      </div>

      <!-- Watchers Example -->
      <div class="feature-item p-4 bg-slate-300 border border-gray-500 rounded mr-4 mb-4">
        <h4 class="text-lg font-semibold">Watchers:</h4>
        <!-- Checkbox to toggle displaying message -->
        <input type="checkbox" v-model="showMessage" class="mt-2 mr-2" /> Show Message
        <p v-if="showMessage && message" class="mt-2 p-1 bg-white border border-gray-300 rounded-2xl w-full">Message: {{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      message: "",
      showMessage: false,
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
  },
  watch: {
    message(newValue, oldValue) {
      // Log message changes
      console.log("Message changed from", oldValue, "to", newValue);
    },
  },
};
</script>