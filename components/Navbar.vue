<template>
  <nav class="bg-gray-800 p-6 flex justify-between items-center">
    <div class="text-white text-2xl font-bold">
      <NuxtLink to="/facility">StaySync</NuxtLink>
    </div>

    <div class="relative text-white text-lg">
      <template v-if="username">
        <button @click="toggleDropdown" class="focus:outline-none">
          {{ username }}
        </button>

        <div
          v-if="dropdownOpen"
          class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20"
        >
          <NuxtLink
            to="/dashboard"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Dashboard
          </NuxtLink>
          <NuxtLink
            to="/facility"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Facility
          </NuxtLink>
          <NuxtLink
            to="/rules"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Rules
          </NuxtLink>
          <button
            @click="logout"
            class="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </template>

      <template v-else>
        <NuxtLink to="/" class="text-white no-underline">Login</NuxtLink>
      </template>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  username: {
    type: String,
    default: '',
  },
});

import { ref } from 'vue';
const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const emit = defineEmits(['logout']);
const logout = () => {
  emit('logout');
  dropdownOpen.value = false;
};
</script>
