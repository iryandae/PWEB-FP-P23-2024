// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  hooks: {
    'pages:extend'(pages){
      pages.push({
        name: 'landing-page',
        path: '/',
        file: '@/app.vue',
      })
    }
  },
  pages:false,
  css: ['@/assets/styles/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
