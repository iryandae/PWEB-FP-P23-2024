<template>
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <div class="flex-grow flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <h2 class="text-2xl font-bold mb-6 text-center">Laporan Penghuni Mengganggu</h2>
          <form @submit.prevent="submitReport">
            <div class="mb-4">
              <label for="name" class="block text-gray-700">Nama Penghuni</label>
              <input type="text" id="name" v-model="name" class="w-full px-3 py-2 border rounded" required>
            </div>
            <div class="mb-4">
              <label for="room" class="block text-gray-700">Nomor Kamar</label>
              <input type="text" id="room" v-model="room" class="w-full px-3 py-2 border rounded" required>
            </div>
            <div class="mb-6">
              <label for="complaint" class="block text-gray-700">Deskripsi Pengaduan</label>
              <textarea id="complaint" v-model="complaint" class="w-full px-3 py-2 border rounded" rows="4" required></textarea>
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
        name: '',
        room: '',
        complaint: ''
      };
    },
    methods: {
      submitReport() {
        if (this.name && this.room && this.complaint) {
          // Dummy report submission logic
          alert(`Laporan telah diterima! \nNama: ${this.name}\nKamar: ${this.room}\nPengaduan: ${this.complaint}`);
          this.name = '';
          this.room = '';
          this.complaint = '';
        } else {
          alert('Harap lengkapi semua informasi.');
        }
      }
    }
  };
  </script>
  
  <style>
    @import '/assets/styles/tailwind.css';
  </style>
  