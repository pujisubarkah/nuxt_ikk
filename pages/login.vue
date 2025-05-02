<template>
    <div class="relative min-h-screen flex flex-col overflow-hidden">
      <!-- Background Carousel -->
      <div
        class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        :style="{
          backgroundImage: `url(${bannerImages[currentImageIndex]})`,
          zIndex: -2,
        }"
      />
      <div class="absolute inset-0 bg-black/30 z-[-1]" />
  
    
  
      <main class="flex-grow flex items-center justify-center px-4 py-16">
        <div class="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full">
          <!-- Welcome Text -->
          <div class="flex-1 max-w-3xl text-center bg-white/90 backdrop-blur-sm shadow-xl p-10 rounded-2xl border border-[#16578d]/20 text-[#16578d]">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Selamat Datang di</h1>
            <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              Sistem Informasi Indeks Kualitas Kebijakan
            </h2>
            <p class="text-gray-600 text-lg md:text-xl leading-relaxed">
              Membangun kualitas kebijakan
              <span class="text-[#16578d] font-semibold">berbasis bukti dan berdampak</span>
              untuk masa depan yang lebih baik. Sistem ini membantu Anda menilai, memantau, dan meningkatkan kualitas kebijakan dengan pendekatan analitik dan data yang solid.
            </p>
          </div>
  
          <!-- Login Form -->
          <div class="flex-1 max-w-md w-full bg-white/90 backdrop-blur-sm shadow-xl p-8 rounded-2xl border border-[#16578d]/30 text-[#16578d]">
            <h1 class="text-2xl font-bold text-center mb-6">Login</h1>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Username -->
              <div>
                <label for="username" class="block text-sm font-medium">Username</label>
                <input
                  v-model="username"
                  type="text"
                  id="username"
                  required
                  class="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16578d]"
                  placeholder="yourusername"
                />
              </div>
  
              <!-- Password -->
              <div>
                <label for="password" class="block text-sm font-medium">Password</label>
                <input
                  v-model="password"
                  type="password"
                  id="password"
                  required
                  class="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16578d]"
                  placeholder="Your password"
                />
              </div>
  
              <!-- Button -->
              <button
                type="submit"
                class="w-full py-3 bg-[#16578d] text-white font-semibold rounded-md hover:bg-[#12466f] focus:outline-none focus:ring-2 focus:ring-[#16578d]"
              >
                Login
              </button>
  
              <!-- Register -->
              <p class="text-center text-sm text-gray-600 mt-4">
                Koordinator Instansi?
                <NuxtLink to="/register" class="text-[#16578d] font-semibold hover:underline">Daftar di sini</NuxtLink>
              </p>
            </form>
          </div>
        </div>
      </main>
  
      <!-- Success Modal -->
      <transition name="fade">
        <div v-if="showSuccessModal" class="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div class="bg-white p-6 rounded-lg shadow-xl text-center">
            <h2 class="text-lg font-semibold text-green-600">Login Berhasil!</h2>
            <p class="text-sm text-gray-600 mt-4">Anda akan diarahkan ke Dashboard...</p>
          </div>
        </div>
      </transition>
  
      <!-- Error Modal -->
      <transition name="fade">
        <div v-if="showErrorModal" class="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div class="bg-white p-6 rounded-lg shadow-xl text-center">
            <h2 class="text-lg font-semibold text-red-600">Login Gagal!</h2>
            <p class="text-sm text-gray-600 mt-4">{{ error }}</p>
            <button
              class="mt-4 px-4 py-2 bg-[#16578d] text-white rounded-md"
              @click="showErrorModal = false"
            >
              Coba Lagi
            </button>
          </div>
        </div>
      </transition>
  
   
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'

  
  const router = useRouter()
  
  const bannerImages = [
    '/banner/Banner1.jpg',
    '/banner/Banner2.jpg',
    '/banner/Banner3.jpg',
    '/banner/Banner4.jpg',
    '/banner/Banner5.jpg',
    '/banner/Banner6.jpg',
    '/banner/Banner7.jpg',
    '/banner/Banner8.jpg',
    '/banner/Banner9.jpg',
    '/banner/Banner10.jpg',
    '/banner/Banner11.jpg',
    '/banner/Banner12.jpg',
  ]
  
  const currentImageIndex = ref(0)
  const username = ref('')
  const password = ref('')
  const error = ref('')
  const showSuccessModal = ref(false)
  const showErrorModal = ref(false)
  
  onMounted(() => {
    setInterval(() => {
      currentImageIndex.value = (currentImageIndex.value + 1) % bannerImages.length
    }, 30000)
  })
  
  const handleSubmit = async () => {
    error.value = ''
    showErrorModal.value = false
  
    try {
      const response = await axios.post('/api/login', {
        username: username.value,
        password: password.value,
      })
  
      const { id, role_id, username: resUsername, name, role } = response.data
  
      localStorage.setItem('id', id.toString())
      localStorage.setItem('role_id', role_id.toString())
      localStorage.setItem('username', resUsername)
      localStorage.setItem('name', name)
      localStorage.setItem('role', role)
  
      showSuccessModal.value = true
  
      setTimeout(() => {
        router.push('/dashboard')
      }, 2000)
    } catch (err) {
      error.value = err?.response?.data?.error || 'Login gagal'
      showErrorModal.value = true
    }
  }
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  