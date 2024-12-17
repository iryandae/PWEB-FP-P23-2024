<template>
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <div class="flex-grow flex flex-col items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-4xl">
          <h2 class="text-2xl font-bold mb-6 text-center">Welcome, User!</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-gray-700">Invoice History</h3>
            <div class="mt-4">
              <ul>
                <li v-for="(invoice, index) in invoiceHistory" :key="index" class="mb-3">
                  <div class="flex justify-between text-gray-600">
                    <span>Bill: Rp {{ invoice.bill }}</span>
                    <span>{{ formatDate(invoice.created_at) }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
  
          <div class="mt-8 text-center">
            <button 
              class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              @click="navigateTo('/user/sewa')"
            >
              Go to Room Details
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '/components/Navbar.vue';
  import Footer from '/components/Footer.vue';
  
  export default {
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        invoiceHistory: [
          { bill: 6000000, created_at: '2024-12-01' },
          { bill: 12000000, created_at: '2024-06-01' }
        ]
      };
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      },
      navigateTo(path) {
        this.$router.push(path);
      }
    }
  };
  </script>
  
  <style scoped>
  @import '/assets/styles/tailwind.css';
  </style>
  