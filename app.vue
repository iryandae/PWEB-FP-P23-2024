<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div class="flex-grow flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="username" class="block text-gray-700">Username</label>
            <input type="text" id="username" v-model="username" class="w-full px-3 py-2 border rounded" required>
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700">Password</label>
            <input type="password" id="password" v-model="password" class="w-full px-3 py-2 border rounded" required>
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './src/components/Navbar.vue';
import Footer from './src/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      const dummyData = {
        username: 'user',
        password: 'pass'
      };

      if (this.username === dummyData.username && this.password === dummyData.password) {
        
      } else {
        alert('Invalid username or password.');
      }
    }
  }
};
</script>

<style>
  @import 'src/assets/styles/tailwind.css';
</style>
