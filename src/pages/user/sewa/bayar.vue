<template>
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <div class="flex-grow flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 class="text-2xl font-bold mb-6 text-center">Pembayaran</h2>
          <form @submit.prevent="submitBayar">
            <div class="mb-4">
              <label for="nama" class="block text-gray-700">Nama Penyewa</label>
              <input type="text" id="nama" v-model="nama" class="w-full px-3 py-2 border rounded" required>
            </div>
            <div class="mb-4">
              <label for="jumlahBayar" class="block text-gray-700">Jumlah Pembayaran</label>
              <input type="number" id="jumlahBayar" v-model="jumlahBayar" min="1" class="w-full px-3 py-2 border rounded" required>
            </div>
            <div class="mb-6">
              <label for="metodeBayar" class="block text-gray-700">Metode Pembayaran</label>
              <select id="metodeBayar" v-model="metodeBayar" class="w-full px-3 py-2 border rounded" required>
                <option value="transfer">Transfer Bank</option>
                <option value="cash">Tunai</option>
              </select>
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Bayar</button>
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
        jumlahBayar: 0,
        metodeBayar: 'transfer'
      };
    },
    methods: {
      submitBayar() {
        // Simulasi proses pembayaran, bisa diubah sesuai backend atau API
        const pembayaranData = {
          nama: this.nama,
          jumlahBayar: this.jumlahBayar,
          metodeBayar: this.metodeBayar
        };
  
        // Tampilkan data pembayaran
        console.log('Data Pembayaran:', pembayaranData);
        alert('Pembayaran berhasil!');
      }
    }
  };
  </script>
  
  <style>
    @import 'src/assets/styles/tailwind.css';
  </style>
  