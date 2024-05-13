<template>
  <div class="contact-form max-w-md mx-auto p-4">
    <h2 class="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
    <form @submit.prevent="submitForm">
      <div
        v-for="(field, index) in formFields"
        :key="index"
        class="form-group mb-4 border border-gray-400 rounded-2xl p-4"
      >
        <label :for="field.id" class="block font-semibold" s
          >{{ field.label }}:</label
        >
        <input
          :type="field.type"
          v-model="formData[field.name]"
          :id="field.id"
          :placeholder="field.placeholder"
          :required="field.required"
          class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      formFields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          id: "name",
          placeholder: "Name",
          required: true,
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          id: "email",
          placeholder: "Email",
          required: true,
        },
        {
          name: "message",
          label: "Message",
          type: "text",
          id: "message",
          placeholder: "Message",
          required: true,
        },
      ],
    };
  },
  methods: {
    submitForm() {
      const submissions = JSON.parse(localStorage.getItem("submits")) || [];
      submissions.push(this.formData);
      localStorage.setItem("submits", JSON.stringify(submissions));

      this.formData = {
        name: "",
        email: "",
        message: "",
      };

      alert("Data submitted successfully!");
    },
  },
};
</script>
