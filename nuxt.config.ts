// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [
    '~/plugins/fontawesome.ts', // Menambahkan plugin FontAwesome
  ],
  css: ['@/assets/css/main.css'], // ✅ Tambahkan ini
  build: {
    // Tidak perlu resourceHints
  },
  app: {
    head: {
      link: [
        // ✅ Tambahkan Google Fonts di sini jika perlu
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
})
