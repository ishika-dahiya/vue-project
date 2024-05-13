<template>
  <div class="admin-page max-w-lg mx-auto">
    <h2 class="text-2xl font-semibold m-4 text-center">Submitted Data</h2>

    <div v-if="submissions.length === 0" class="text-gray-500 text-center">
      No submissions yet.
    </div>

    <div
      v-for="(submission, index) in submissions"
      :key="index"
      class="submission-card bg-gray-100 rounded-3xl p-4 mb-4"
    >
      <h3 class="text-lg font-semibold mb-0.5">{{ submission.name }}</h3>
      <p class="mb-2 text-gray-500">{{ submission.email }}</p>
      <p class="m-2 p-4 rounded-2xl border border-gray-500 bg-white text-end">{{ submission.message }}</p>

      <div class="flex justify-center">
         <button
        @click="deleteSubmission(index)"
        class="bg-red-500 text-white px-10 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
      >
        Delete
      </button>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submissions: [],
    };
  },

  created() {
    const storedSubmissions = localStorage.getItem("submits");
    if (storedSubmissions) {
      this.submissions = JSON.parse(storedSubmissions);
    }
  },

  methods: {
    deleteSubmission(index) {
      this.submissions.splice(index, 1);
      localStorage.setItem("submits", JSON.stringify(this.submissions));
    },
  },
};
</script>
