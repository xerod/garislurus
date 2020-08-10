<template>
  <div
    class="px-8 py-10 md:py-20"
    :style="
      'background-image: url(' +
        require('@/assets/images/lighter-pattern.svg') +
        ')'
    "
  >
    <div class="flex flex-col items-center">
      <a
        class="text-sm mb-2 font-semibold text-blue-700 leading-none uppercase dark:text-gray-400"
        >Solutions</a
      >
      <a class="text-5xl mb-20 font-normal leading-none dark:text-gray-400"
        >We Provide</a
      >
      <div class="w-4/6" />
      <div
        class="w-full md:w-10/12 grid grid-flow-row gap-8 lg:grid-cols-3 lg:grid-rows-1 font-body font-light text-gray-900 tracking-wide text-lg dark:text-gray-400 bg-white"
      >
        <div
          class="featured-post-card shadow hover:shadow-lg border border-gray-200 rounded-lg px-8 py-10"
        >
          <RefreshIcon size="2.5x" class="text-blue-600" />
          <h4 class="leading-none mt-6 mb-2">Human Resource</h4>
          <a class="leading-none"
            >Top skills draw great employers. We provide talent acquisition,
            training, employee administration and retention services for company
            accross Indonesia.</a
          >
        </div>
        <div
          class="featured-post-card shadow hover:shadow-lg border border-gray-200 rounded-lg px-8 py-10"
        >
          <LightBulbIcon size="2.5x" class="text-blue-600" />
          <h4 class="leading-none mt-6 mb-2">
            Voice Channel
          </h4>
          <a class="leading-none"
            >Our voice channel services include telemarketing, call center, and
            tele-collection.</a
          >
        </div>
        <div
          class="featured-post-card shadow hover:shadow-lg border border-gray-200 rounded-lg px-8 py-10"
        >
          <LinkIcon size="2.5x" class="text-blue-600" />
          <h4 class="leading-none mt-6 mb-2">
            Non-voice Channel
          </h4>
          <a class="leading-none"
            >We provide data entry, mobile survey, and field sales to fulfill
            your IT Company business needs.</a
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
