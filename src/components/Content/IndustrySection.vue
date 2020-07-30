<template>
  <div class="overflow-hidden py-10">
    <div class="bg-blue-700 px-8 pt-10 md:pt-20">
      <div class="flex flex-col">
        <a class="text-5xl font-bold leading-none text-white dark:text-gray-400"
          >Layanan Kami</a
        >
        <div class="flex flex-grow-0 my-16 ">
          <div
            class="w-full md:w-8/12 grid grid-flow-row md:grid-flow-col md:grid-cols-2 md:grid-rows-2 row-gap-8 col-gap-8 font-body font-light text-white tracking-wide text-lg dark:text-gray-400"
          >
            <div class="">
              <TicketIcon size="3x" class="mb-4" />
              <h3 class="my-1">MICE</h3>
              <a
                >Sebagai mitra anda dalam penyelenggaraan berbagai kegiatan
                dibidang MICE baik ordered maupun created.
              </a>
            </div>
            <div class="">
              <BookOpenIcon size="3x" class="mb-4" />
              <h3 class="my-1">Publishing</h3>
              <a
                >Meliputi penerbitan buku, profil, direktori, promosi, dan lain
                lainnya</a
              >
            </div>
            <div class="">
              <SpeakerphoneIcon size="3x" class="mb-4" />
              <h3 class="my-1">Advertising</h3>
              <a
                >Membantu perusahaan anda dalam mempromosikan produk melalui
                media cetak, digital maupun audio visual</a
              >
            </div>
            <div class="">
              <AtSymbolIcon size="3x" class="mb-4" />
              <h3 class="my-1">Communication</h3>
              <a
                >Dengan jaringan klien yang luas, kami dapat membantu memasarkan
                produk atau jasa anda dalam bentuk strategi komunikasi</a
              >
            </div>
          </div>

          <div class="hidden md:flex w-11/12">
            <div class="ml-12 lg:-mr-64 lg:-mb-56 mt-12">
              <g-image
                class="block"
                src="~/assets/images/conference.jpeg"
                alt="Industri Kami"
                style="filter: grayscale(100%);"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-5 md:pb-10" />
  </div>
</template>

<script>
import {
  TicketIcon,
  BookOpenIcon,
  SpeakerphoneIcon,
  AtSymbolIcon,
} from "@vue-hero-icons/outline";

export default {
  components: {
    TicketIcon,
    BookOpenIcon,
    SpeakerphoneIcon,
    AtSymbolIcon,
  },
};
</script>

<style></style>
