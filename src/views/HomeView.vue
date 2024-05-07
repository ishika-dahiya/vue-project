<template>
  <div class="home-view">
    <!-- Introduction Box -->
    <div class="introduction-box">
      <h2>Welcome to Vue.js Basics</h2>
      <p>
        Vue.js is a progressive JavaScript framework used for building user
        interfaces. It is designed from the ground up to be incrementally
        adoptable and can be integrated into existing projects easily.
      </p>
    </div>

    <!-- Features Box -->
    <div class="features-box">
      <h3>Features:</h3>

      <!-- Data Binding Example -->
      <div class="feature-item">
        <h4>Data Binding:</h4>
        <input type="text" v-model="message" placeholder="Type something..." />
        <p v-if="message">Message: {{ message }}</p>
      </div>

      <!-- Computed Properties Example -->
      <div class="feature-item">
        <h4>Computed Properties:</h4>
        <p>Original Message: {{ message }}</p>
        <p v-if="message">Reversed Message: {{ reversedMessage }}</p>
      </div>

      <!-- Watchers Example -->
      <div class="feature-item">
        <h4>Watchers:</h4>
        <!-- Checkbox to toggle displaying message -->
        <input type="checkbox" v-model="showMessage" /> Show Message
        <p v-if="showMessage && message">Message: {{ message }}</p>
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

<style scoped>
.home-view {
  margin: 0 auto;
  text-align: center;
}

.introduction-box {
  margin: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.features-box {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.feature-item {
  margin-bottom: 20px;
  margin: 0 10px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 0 0 auto;
  text-align: left;
}
</style>
