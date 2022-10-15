<script setup>
definePageMeta({
  middleware: "guest",
});

const { $auth } = useNuxtApp();

async function login() {
  try {
    await $auth.loginWith("local", {
      body: {
        email: "fgneba@gmail.com",
        password: "password",
      },
    });
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div>
    <button
      class="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
      @click="login"
    >
      Login
    </button>
  </div>
</template>
