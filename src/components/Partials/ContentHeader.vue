<template>
  <div>
    <div
      class="z-100 text-left bg-gray-200 dark:bg-gray-900 py-10 md:py-20"
      v-if="!this.image && this.mode === null"
    >
      <h2 v-if="title != null" class="h1 font-extrabold dark:text-gray-400">
        {{ title }}
      </h2>
      <p v-if="sub != null" class="text-gray-600 text-light font-sans">
        {{ sub }}
      </p>
    </div>

    <div
      v-if="hasImage || this.video"
      class="z-100 relative mt-0"
      :class="mode != null ? 'md:min-h-screen' : 'h-auto'"
    >
      <g-image
        v-if="hasImage && staticImage"
        :src="require(`!!assets-loader!@pageImage/${image}`)"
        width="1400"
        height="400"
        class="object-cover absolute -z-10 h-full w-full"
      ></g-image>

      <g-image
        v-if="hasImage && !staticImage"
        :src="image"
        width="1400"
        height="400"
        class="object-cover absolute -z-10 h-full w-full"
      ></g-image>

      <slot>
        <ClientOnly>
          <video-bg
            v-if="this.video"
            :sources="[require('@/assets/videos/' + this.video)]"
            :img="require('@/assets/images/' + this.image)"
          >
            <div
              class="flex flex-col md:min-h-screen text-left text-white bg-blue-900 pb-20"
              :class="`bg-opacity-${opacity}`"
            >
              <div
                class="flex-col mx-4 md:ml-56 md:mt-20 items-center justify-center text-left"
              >
                <p
                  v-if="title != null"
                  class="text-5xl mx-auto md:mx-0 sm:w-8/12 md:text-6xl mt-16 md:w-5/12 font-normal tracking leading-none"
                >
                  {{ title }}
                </p>
                <p
                  v-if="sub != null"
                  class="text-xl md:text-2xl my-4 mx-auto md:mx-0 sm:w-8/12 md:w-6/12"
                >
                  {{ sub }}
                </p>
                <div
                  v-if="mode != null"
                  class="flex items-center flex-row mt-10"
                >
                  <a
                    href="#"
                    v-scroll-to="'#mission'"
                    class="px-4 py-2 bg-blue-600 text-base font-normal rounded"
                    >More Details</a
                  >
                  <p class="flex items-center px-3">atau</p>
                  <a
                    href="https://wa.me/6281281902724"
                    class="flex underline text-gray-300 items-center font-medium"
                    >Jadwalkan Meeting</a
                  >
                </div>
              </div>
            </div>
          </video-bg>
          <div
            v-else
            class="flex flex-col md:min-h-screen text-left text-white bg-blue-900 pb-20"
            :class="`bg-opacity-${opacity}`"
          >
            <div
              class="flex-col max-w-screen-xl mx-auto pl-4 md:mt-20 items-center justify-center text-left"
            >
              <p
                v-if="title != null"
                class="text-5xl mx-auto md:mx-0 sm:w-8/12 md:text-6xl mt-16 md:w-5/12 tracking leading-none"
              >
                {{ title }}
              </p>
              <p
                v-if="sub != null"
                class="text-xl md:text-2xl my-4 mx-auto md:mx-0 sm:w-8/12 md:w-6/12"
              >
                {{ sub }}
              </p>
              <div v-if="mode != null" class="flex items-center flex-row mt-10">
                <a
                  href="#"
                  v-scroll-to="'#mission'"
                  class="px-4 py-2 bg-blue-600 text-base font-normal rounded"
                  >More Details</a
                >
                <p class="flex items-center px-3">atau</p>
                <a
                  href="https://wa.me/6281281902724"
                  class="flex underline text-gray-300 items-center font-medium"
                  >Jadwalkan Meeting</a
                >
              </div>
            </div>
          </div>
        </ClientOnly>
      </slot>
    </div>
  </div>
</template>

<script>
import VideoBg from "vue-videobg";
import Logo from "~/assets/Logo";
import NetLogo from "~/assets/NetLogo";
import SpotifyLogo from "~/assets/SpotifyLogo";
import SamsungLogo from "~/assets/SamsungLogo";
import SmartfrenLogo from "~/assets/SmartfrenLogo";
import TvriLogo from "~/assets/TvriLogo";
import Trans7Logo from "~/assets/Trans7Logo";
import YamahaLogo from "~/assets/YamahaLogo";
import PodomoroLogo from "~/assets/PodomoroLogo";

export default {
  components: {
    VideoBg,
    Logo,
    NetLogo,
    SpotifyLogo,
    SamsungLogo,
    SmartfrenLogo,
    TvriLogo,
    Trans7Logo,
    YamahaLogo,
    PodomoroLogo,
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    sub: {
      type: String,
      default: null,
    },
    image: {
      type: String | Object,
      default: null,
    },
    video: {
      type: String | Object,
      default: null,
    },
    staticImage: {
      type: Boolean,
      default: true,
    },
    opacity: {
      type: Number,
      default: 50,
    },
    mode: {
      type: String,
      default: null,
    },
  },
  computed: {
    hasImage() {
      return this.image ? true : false;
    },
    getBackground() {
      return (
        "background-image: url(" +
        require("@/assets/images/" + this.image) +
        ")"
      );
    },
  },
};
</script>

<style>
.VideoBg video {
  object-fit: cover;
}
</style>
