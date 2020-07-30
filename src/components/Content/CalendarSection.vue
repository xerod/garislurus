<template>
  <div>
    <div class="flex flex-col pb-20">
      <a
        class="text-5xl ml-8 mb-12 font-bold leading-none text-gray-900 dark:text-gray-400"
        >Our Work</a
      >
      <div
        class="scrolling relative whitespace-no-wrap scrolling-touch w-full px-8"
      >
        <ScrollingCard image="buku_profil.png">
          <p class="text-lg text-gray-900 mt-4 mb-6">
            Penerbitan Profil Pejabat dan Pemimpin Daerah
          </p>
          <div>
            <a href="" class="px-3 py-2 rounded text-white bg-blue-500 mr-2"
              >Lihat Proposal</a
            >
          </div>
        </ScrollingCard>
        <ScrollingCard image="pameran_produk_umkm.png">
          <p class="text-lg text-gray-900 mt-4 mb-6">
            Pameran Produk Unggulan UKM dan IKM Jawa Tengah 2020
          </p>
          <div>
            <a href="" class="px-3 py-2 rounded text-white bg-blue-500 mr-2"
              >Lihat Layout</a
            >
            <a href="" class="px-3 py-2 text-blue-700 underline mr-2"
              >Lihat Proposal</a
            >
          </div>
        </ScrollingCard>
      </div>
    </div>

    <div class="flex flex-col py-10 md:py-20 bg-gray-200">
      <a
        class="text-5xl ml-8 mb-5 font-bold leading-none text-gray-900 dark:text-gray-400"
        >Upcoming Event</a
      >
      <div
        class="scrolling relative whitespace-no-wrap scrolling-touch w-full px-8"
      >
        <ScrollingCard>
          <p class="text-gray-600">Exhibition</p>
          <p class="text-lg font-bold">
            Specta Culinary, Culture & Tourism Festival 2021
          </p>
          <div class="flex space-x-1 mt-2 text-gray-800 items-center">
            <LocationMarkerIcon size="1x" class="flex-shrink-0" />
            <p class="text-sm">Jogja, Semarang, dan Solo</p>
          </div>
        </ScrollingCard>
        <ScrollingCard>
          <p class="text-gray-600">Publishing</p>
          <p class="text-lg font-bold">
            Profil Potensi Unggulan Daerah Kota Semarang 2021
          </p>
          <div class="flex space-x-1 mt-2 text-gray-800 items-center">
            <LocationMarkerIcon size="1x" class="flex-shrink-0" />
            <p class="text-sm">Semarang</p>
          </div>
        </ScrollingCard>
        <ScrollingCard>
          <p class="text-gray-600">Campaign</p>
          <p class="text-lg font-bold">
            Sosialiasi Merdeka dari Narkoba BNN 2021
          </p>
          <div class="flex space-x-2 mt-2 text-gray-800 items-center">
            <LocationMarkerIcon size="1x" class="flex-shrink-0" />
            <p class="text-sm">Semarang, Jogja, Balikpapan, dll</p>
          </div>
        </ScrollingCard>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import ScrollingCard from "~/components/Core/ScrollingCard";

import { LocationMarkerIcon } from "@vue-hero-icons/outline";

export default {
  components: {
    VueSlickCarousel,
    ScrollingCard,
    LocationMarkerIcon,
  },
};
</script>

<style>
.scrolling {
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;
}
.scrolling::-webkit-scrollbar {
  display: none;
}
.grabbing {
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: -o-grab;
  cursor: grab;
}
</style>
