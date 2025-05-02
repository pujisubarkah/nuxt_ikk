<template>
    <div class="py-10 bg-gray-50">
      <div class="text-center text-2xl font-semibold text-[#16578d] mb-8">Alur Proses</div>
      <div class="flex flex-wrap justify-center gap-6">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="w-48 text-center"
        >
          <div class="text-white bg-[#16578d] rounded-full w-12 h-12 mx-auto flex items-center justify-center mb-2">
            {{ step.number }}
          </div>
          <div class="text-[#16578d] font-semibold">{{ step.title }}</div>
          <div class="text-sm text-gray-600">{{ step.subtitle }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const steps = [
    { number: '01', title: 'Self Assessment', subtitle: 'Admin Instansi dan Enumerator' },
    { number: '02', title: 'Desk Analysis', subtitle: 'Koordinator Instansi' },
    { number: '03', title: 'Board Member Meeting I', subtitle: 'Forum pemaparan hasil desk analysis' },
    { number: '04', title: 'Validasi', subtitle: 'Koordinator Utama' },
    { number: '05', title: 'Board Member Meeting II', subtitle: 'Forum pemaparan hasil validasi final' },
    { number: '06', title: 'Sharing Cerita Perubahan', subtitle: '' },
  ]
  </script>
  