<template>
    <div class="container mx-auto px-6 py-12">
      <!-- Section: Mengenal IKK -->
      <section class="mb-12">
        <h1 class="text-3xl font-bold text-[#16578d] mb-6">
          MENGENAL INDEKS KUALITAS KEBIJAKAN (IKK)
        </h1>
        <p class="text-base mb-6">
          Era keterbukaan informasi semakin mendorong kesadaran publik terhadap kinerja pemerintah yang lebih baik,
          perhatian akan kualitas kebijakan menjadi bagian yang perlu terus diperbaiki secara berkelanjutan.
        </p>
        <p class="text-base mb-6">
          Pada tahun 2023 telah terbit Peraturan Menteri PANRB Nomor 3 Tahun 2023 tentang Perubahan Peraturan Menteri
          PANRB Nomor 25 Tahun 2020 tentang Road Map Reformasi Birokrasi 2020-2024...
        </p>
        <div class="bg-[#f9f9f9] p-6 rounded-lg mb-6 shadow-md">
          <p class="text-base font-bold text-[#16578d]">
            Indeks Kualitas Kebijakan adalah instrumen untuk menilai kualitas kebijakan pemerintah...
          </p>
        </div>
        <p class="text-base">
          Pemantauan dan Evaluasi Indeks Kualitas Kebijakan merupakan proses penilaian terhadap pelaksanaan kebijakan...
        </p>
      </section>
  
      <!-- Section: Tujuan IKK -->
      <section class="mb-12 bg-[#f3f9fb] p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-[#16578d] mb-6">TUJUAN IKK</h2>
        <div class="border p-6 rounded-lg mb-8 flex items-center justify-center">
          <span class="text-[#16578D] text-4xl mr-1">&ldquo;</span>
          <p class="text-black font-semibold text-center flex-grow mx-1">
            Mendorong penguatan partisipasi publik dan prinsip-prinsip tata kelola yang baik...
          </p>
          <span class="text-[#16578D] text-4xl ml-1">&rdquo;</span>
        </div>
      </section>
  
      <!-- Section: Peraturan Terkait -->
      <section class="mb-12">
        <h2 class="text-xl font-bold text-[#16578d] mb-6">Peraturan Terkait</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p class="text-[#16578d] font-semibold mb-4">
              SURAT EDARAN KEPALA LAN NOMOR 22/K.1/HKM/02.2/2021...
            </p>
            <p class="text-base mb-6">
              Surat Edaran ini disusun sebagai panduan bagi Kementerian, Lembaga, dan Pemerintah Daerah...
            </p>
          </div>
          <div class="border p-4 rounded-lg">
            <iframe
              src="/files/se-kepala-lan-nomor-22-tahun-2021.pdf"
              width="100%"
              height="400"
              allow="autoplay"
              class="rounded-md"
            ></iframe>
          </div>
        </div>
      </section>
  
      <!-- Section: Tahapan IKK -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-[#16578d] mb-6">Tahapan IKK</h2>
        <div class="flex flex-col md:flex-row">
          <!-- Left Column -->
          <div class="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <p class="text-base mb-6">
              Penyusunan dokumen Penilaian IKK melalui beberapa tahapan penting...
            </p>
            <ol class="list-decimal pl-6 mb-6 space-y-2">
              <li><strong>Identifikasi Kebijakan yang Dinilai:</strong> ...</li>
              <li><strong>Pengumpulan Data dan Informasi:</strong> ...</li>
              <li><strong>Penilaian Kualitas Kebijakan:</strong> ...</li>
              <li><strong>Analisis dan Interpretasi Hasil Penilaian:</strong> ...</li>
            </ol>
          </div>
  
          <!-- Right Column - Tabs -->
          <div class="md:w-1/2 bg-[#16578D] text-white rounded-lg p-6">
            <div class="flex mb-4 flex-wrap justify-center gap-2">
              <button
                v-for="label in tabs"
                :key="label"
                :class="[
                  'py-1 px-4 text-sm md:text-base rounded-lg transition-all duration-300',
                  activeTab === label
                    ? 'bg-white text-[#16578D] font-semibold shadow-md'
                    : 'bg-white/20 text-white hover:bg-white/30'
                ]"
                @click="activeTab = label"
              >
                {{ label }}
              </button>
            </div>
  
            <!-- Tab Content -->
            <transition name="fade" mode="out-in">
              <div
                :key="activeTab"
                class="bg-white text-[#16578D] p-4 rounded-lg transition-opacity duration-300 ease-in-out"
              >
                <p v-html="tabContents[activeTab]" />
              </div>
            </transition>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const tabs = ['Kurang', 'Cukup', 'Baik', 'Sangat Baik', 'Unggul']
  const activeTab = ref('Unggul')
  
  const tabContents = {
    'Kurang': `Predikat <strong>Kurang</strong> menunjukkan bahwa kualitas kebijakan masih jauh dari standar yang diharapkan...`,
    'Cukup': `Predikat <strong>Cukup</strong> menunjukkan bahwa kualitas kebijakan telah memenuhi beberapa aspek dasar...`,
    'Baik': `Predikat <strong>Baik</strong> menunjukkan bahwa kebijakan telah memenuhi sebagian besar standar kualitas...`,
    'Sangat Baik': `Predikat <strong>Sangat Baik</strong> menunjukkan bahwa kebijakan telah memenuhi hampir seluruh standar kualitas...`,
    'Unggul': `Predikat <strong>Unggul</strong> menunjukkan bahwa kebijakan telah mencapai tingkat kualitas tertinggi...`
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  button {
    transition: all 0.3s ease;
  }
  button:hover {
    background-color: rgba(255, 255, 255, 0.25);
    transform: scale(1.02);
  }
  button.bg-white.text-\[\#16578D\] {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  p {
    line-height: 1.7;
  }
  ol li {
    padding-left: 0.25rem;
    margin-bottom: 0.5rem;
  }
  
  iframe {
    border: none;
    width: 100%;
    height: 100%;
  }
  </style>
  