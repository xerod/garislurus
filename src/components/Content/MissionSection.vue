<template>
  <div class="px-8 py-10 md:py-20">
    <div class="flex flex-col md:flex-row">
      <a class="text-5xl mb-12 font-bold leading-none dark:text-gray-400"
        >Misi Kami</a
      >
      <div class="w-4/6" />
      <div
        class="grid grid-flow-row lg:grid-cols-2 lg:grid-rows-2 gap-8 font-body font-light text-gray-900 tracking-wide text-lg dark:text-gray-400"
      >
        <div class="bg-gray-300 rounded px-12 py-10">
          <RefreshIcon size="2.5x" class="text-gray-800" />
          <h4 class="leading-none font-semibold mt-6 mb-2">Bersikap Adaptif</h4>
          <a
            >Memberikan ide kreatif dan inovatif serta selalu bersikap adaptif
            terhadap perkembangan teknologi</a
          >
        </div>
        <div class="bg-gray-300 rounded px-12 py-10">
          <LightBulbIcon size="2.5x" class="text-gray-800" />
          <h4 class="leading-none font-semibold mt-6 mb-2">
            Menghadirkan Solusi
          </h4>
          <a
            >Memberikan solusi efektif untuk setiap masalah yang dihadapi mitra
            bisnis</a
          >
        </div>
        <div class="bg-gray-300 rounded px-12 py-10">
          <LinkIcon size="2.5x" class="text-gray-800" />
          <h4 class="leading-none font-semibold mt-6 mb-2">
            Memprioritaskan Hubungan
          </h4>
          <a
            >Mengedepankan rasa persaudaraan dan rasa saling memiliki terhadap
            perusahaan</a
          >
        </div>
        <div class="bg-gray-300 rounded px-12 py-10">
          <ThumbUpIcon size="2.5x" class="text-gray-800" />
          <h4 class="leading-none font-semibold mt-6 mb-2">
            Mengedepankan Kualitas
          </h4>
          <a
            >Menciptakan event yang berkualitas dan inovatif dengan menjunjung
            tinggi etika bisnis</a
          >
        </div>
      </div>
      <div
        class="flex flex-col font-body font-light text-gray-900 tracking-wide text-xl dark:text-gray-400"
      ></div>
    </div>
  </div>
</template>

<script>
import {
  RefreshIcon,
  LightBulbIcon,
  LinkIcon,
  ThumbUpIcon,
} from "@vue-hero-icons/outline";
export default {
  components: {
    RefreshIcon,
    LightBulbIcon,
    LinkIcon,
    ThumbUpIcon,
  },
};
</script>
