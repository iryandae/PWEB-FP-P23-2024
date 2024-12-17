<template>
  <div class="min-h-screen flex flex-col">
    <Navbar :username="loggedInUser?.username" @logout="logout" />
    <div class="flex-grow flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>

        <form @submit.prevent="login" v-if="!loggedInUser">
          <div class="mb-4">
            <label for="username" class="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <div v-else class="text-center mt-6">
          <p class="text-xl mb-4">Welcome, {{ loggedInUser.username }}!</p>
          <NuxtLink
            to="/facility"
            class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 px-4"
          >
            Continue
          </NuxtLink>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

const username = ref('');
const password = ref('');
const loggedInUser = ref(null);

const login = () => {
  const users = [
    { username: 'admin', password: 'adminpass', role: 'admin' },
    { username: 'user', password: 'userpass', role: 'user' },
  ];

  const user = users.find(
    (u) => u.username === username.value && u.password === password.value
  );

  if (user) {
    loggedInUser.value = user;

    if (user.role === 'admin') {
      navigateTo('/'); 
    } else {
      navigateTo('/facility');
    }
  } else {
    alert('Invalid username or password.');
  }
};

const logout = () => {
  loggedInUser.value = null;
  navigateTo('/');
};
</script>

<style>
@import '~/assets/styles/tailwind.css';
</style>
