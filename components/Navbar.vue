<template>
    <nav class="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="text-xl font-semibold text-[#16578d] tracking-wide">
            Indeks Kualitas Kebijakan
          </div>
  
          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-6">
            <NuxtLink
              v-for="item in navItems"
              :key="item.href"
              :to="item.href"
              class="text-base text-gray-700 hover:text-[#16578d] font-medium transition duration-200"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
  
          <!-- Logos -->
          <div class="flex items-center space-x-4">
            <img src="/lanri.png" alt="LAN RI" class="h-10 w-auto object-contain" />
            <img src="/tanoto.png" alt="Tanoto Foundation" class="h-10 w-auto object-contain" />
          </div>
  
          <!-- Hamburger (Mobile) -->
          <div class="md:hidden flex items-center">
            <button @click="toggleMenu" class="text-[#16578d] focus:outline-none">
              <component :is="open ? 'XIcon' : 'MenuIcon'" class="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div v-if="open" class="md:hidden px-4 pb-4 bg-white border-t border-gray-100">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="block py-2 text-base text-gray-700 hover:text-[#16578d] font-medium transition"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Icon components (you can use Heroicons, Lucide, etc.)
  import { Menu as MenuIcon, X as XIcon } from 'lucide-vue-next'
  
  const open = ref(false)
  
  const toggleMenu = () => {
    open.value = !open.value
  }
  
  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '/tentang' },
    { label: 'Panduan', href: '/panduan' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Helpdesk', href: '/desk' },
    { label: 'Login', href: '/login' },
  ]
  </script>
  