# PWEB-FP-P23-2024
Kerjakan bagian masing-masing sesuai file yang ada di tree

Silahkan tambah file jika diperlukan
```plaintext
manajemen-kost/
│
├── assets/                       # Folder untuk menyimpan asset seperti gambar, ikon, dll.
│   ├── images/                   # Gambar carousel, logo, dll.
│   └── styles/                   # File CSS/SCSS tambahan
│
├── components/                   # Komponen Vue yang reusable
│   ├── Navbar.vue                # Navbar untuk menampilkan nama user yang login
│   ├── Footer.vue                # Footer website
│   ├── FacilityCarousel.vue      # Komponen carousel fasilitas kos
│   ├── InvoiceHistory.vue        # Komponen riwayat tagihan untuk user
│   ├── RoomDetails.vue           # Komponen spesifikasi kamar
│   └── PaymentForm.vue           # Komponen form pembayaran
│
├── layouts/                      # Template layout untuk halaman
│   ├── default.vue               # Layout default dengan Navbar dan Footer
│   ├── user.vue                  # Layout untuk dashboard penghuni
│   └── admin.vue                 # Layout untuk dashboard admin
│
├── middleware/                   # Middleware untuk autentikasi
│   ├── auth.js                   # Middleware untuk memeriksa apakah user telah login
│
├── pages/                        # Semua halaman website
│   ├── index.vue                 # Landing page (form login)
│   ├── facility.vue              # Halaman fasilitas kos
│   ├── rules.vue                 # Halaman peraturan kos
│
│   ├── user/                     # Folder untuk dashboard user (penghuni)
│   │   ├── index.vue             # Landing Page Penghuni (history tagihan)
│   │   ├── sewa.vue              # Halaman spesifikasi kamar dan periode sewa
│   │   ├── sewa/                 # Subfolder pembayaran
│   │   │   └── bayar.vue         # Halaman form pembayaran
│   │   ├── laporan/              # Subfolder untuk laporan
│   │   │   ├── fasilitas.vue     # Form laporan kerusakan fasilitas kamar
│   │   │   └── penghuni.vue      # Form laporan penghuni mengganggu
│
│   ├── admin/                    # Folder untuk dashboard admin
│   │   ├── dashboard.vue         # Landing page admin (monitor occupancy kamar)
│   │   ├── penghuni/             # Subfolder detail penghuni
│   │   │   └── _id.vue           # Halaman detail penghuni berdasarkan ID
│   │   ├── laporan/              # Subfolder laporan
│   │   │   ├── fasilitas.vue     # Monitor laporan fasilitas kamar
│   │   │   └── penghuni.vue      # Monitor laporan penghuni (anonim)
│
├── plugins/                      # Plugin tambahan jika diperlukan
│   └── pdf-generator.js          # Plugin untuk generate invoice dalam format PDF
│
├── store/                        # Vuex store (state management)
│   ├── user.js                   # State untuk user (penghuni)
│   ├── admin.js                  # State untuk admin
│   └── room.js                   # State untuk occupancy kamar
│
├── static/                       # Static files seperti favicon
│   ├── favicon.ico               # Favicon website
│
├── utils/                        # Utility functions
│   ├── auth.js                   # Fungsi untuk autentikasi user
│   └── invoice.js                # Fungsi untuk perhitungan biaya invoice
```