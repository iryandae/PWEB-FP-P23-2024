<template>
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <div class="flex-grow flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <h2 class="text-2xl font-bold mb-6 text-center">Laporan Kerusakan Fasilitas</h2>
          <form @submit.prevent="submitReport">
            <div class="mb-4">
              <label for="room" class="block text-gray-700">Nomor Kamar</label>
              <input type="text" id="room" v-model="room" class="w-full px-3 py-2 border rounded" required>
            </div>
            <div class="mb-4">
              <label for="facility" class="block text-gray-700">Fasilitas yang Rusak</label>
              <input type="text" id="facility" v-model="facility" class="w-full px-3 py-2 border rounded" required>
            </div>
            <div class="mb-6">
              <label for="description" class="block text-gray-700">Deskripsi Kerusakan</label>
              <textarea id="description" v-model="description" class="w-full px-3 py-2 border rounded" rows="4" required></textarea>
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Kirim Laporan</button>
          </form>
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
        room: '',
        facility: '',
        description: ''
      };
    },
    methods: {
      submitReport() {
        if (this.room && this.facility && this.description) {
          // Dummy report submission logic
          alert(`Laporan telah diterima! \nNomor Kamar: ${this.room}\nFasilitas Rusak: ${this.facility}\nDeskripsi Kerusakan: ${this.description}`);
          this.room = '';
          this.facility = '';
          this.description = '';
        } else {
          alert('Harap lengkapi semua informasi.');
        }
      }
    }
  };
  </script>
  
  <style>
    @import 'assets/styles/tailwind.css';
  </style>
  