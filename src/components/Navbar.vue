<template>
  <nav class="bg-gray-800 p-6 flex justify-between items-center">
    <div class="text-white text-2xl font-bold">
      StaySync
    </div>
    <div class="text-white text-lg">
      <template v-if="username">
        {{ username }}
      </template>
      <template v-else>
        <a href="/" class="text-white no-underline hover:underline">Login</a>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      username: ''
    };
  },
};
</script>

<style scoped>
  @import '../assets/styles/tailwind.css';
</style>
