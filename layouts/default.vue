<template>
    <div class="min-h-screen font-poppins">
      <NuxtPage />
    </div>
  </template>
  
  <script setup>
  // Jika menggunakan Google Fonts secara langsung di sini, 
  // sebaiknya gunakan `useHead` dari Nuxt3 untuk menambahkan font.
  import { useHead } from '#imports'
  
  useHead({
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
      },
    ],
  })
  </script>
  
  <style>
  /* Menerapkan font Poppins secara global */
  html {
    font-family: 'Poppins', sans-serif;
  }
  </style>
  