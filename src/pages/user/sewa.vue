<template>
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <div class="flex-grow flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 class="text-2xl font-bold mb-6 text-center">Sewa</h2>
          <form @submit.prevent="submitSewa">
            <div class="mb-4">
              <label for="nama" class="block text-gray-700">Nama</label>
              <input type="text" id="nama" v-model="nama" class="w-full px-3 py-2 border rounded" required>
            </div>
            <div class="mb-4">
              <label for="tanggalSewa" class="block text-gray-700">Tanggal Sewa</label>
              <input type="date" id="tanggalSewa" v-model="tanggalSewa" class="w-full px-3 py-2 border rounded" required>
            </div>
            <div class="mb-6">
              <label for="durasi" class="block text-gray-700">Durasi Sewa (bulan)</label>
              <input type="number" id="durasi" v-model="durasi" min="1" class="w-full px-3 py-2 border rounded" required>
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Ajukan Sewa</button>
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
        nama: '',
        tanggalSewa: '',
        durasi: 1
      };
    },
    methods: {
      submitSewa() {
        // Simulasi pengajuan sewa, bisa diubah sesuai kebutuhan backend
        const sewaData = {
          nama: this.nama,
          tanggalSewa: this.tanggalSewa,
          durasi: this.durasi
        };
  
        // Tampilkan data yang diajukan
        console.log('Data Sewa:', sewaData);
        alert('Pengajuan sewa berhasil!');
      }
    }
  };
  </script>
  
  <style>
    @import 'src/assets/styles/tailwind.css';
  </style>
  