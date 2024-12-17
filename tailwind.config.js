/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './app.vue', // Make sure this is also included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
