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
      :class="mode != null ? 'min-h-screen' : 'h-auto'"
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
              class="flex flex-col min-h-screen text-left text-white bg-blue-900 pb-20"
              :class="`bg-opacity-${opacity}`"
            >
              <nav
                class="md:hidden flex items-left justify-start flex-wrap dark:text-gray-400"
              >
                <div class="flex items-left p-4">
                  <Logo height="40" width="40" class="mr-2 mt-2" />
                  <span
                    class="w-12 mt-2 text-xs font-semibold leading-tight uppercase text-white text-left tracking-tight"
                    style="font-size: .7rem"
                    >Engka Kreatif Indonesia</span
                  >
                </div>
              </nav>
              <div
                class="flex-col mx-4 md:ml-56 md:mt-20 items-center justify-center text-left"
              >
                <p
                  v-if="title != null"
                  class="text-5xl mx-auto md:mx-0 sm:w-8/12 md:text-6xl mt-16 md:w-5/12 font-bold tracking leading-none"
                >
                  {{ title }}
                </p>
                <p
                  v-if="sub != null"
                  class="text-xl md:text-2xl my-4 mx-auto md:mx-0 sm:w-8/12 md:w-6/12 font-sans"
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
                    href="https://wa.me/628118464644"
                    class="flex underline text-gray-300 items-center font-medium"
                    >Jadwalkan Meeting</a
                  >
                </div>
              </div>
            </div>
          </video-bg>
          <div
            v-else
            class="flex flex-col min-h-screen text-left text-white bg-blue-900 pb-20"
            :class="`bg-opacity-${opacity}`"
          >
            <nav
              class="md:hidden flex items-left justify-start flex-wrap dark:text-gray-400"
            >
              <div class="flex items-left p-4">
                <Logo height="40" width="40" class="mr-2 mt-2" />
                <span
                  class="w-12 mt-2 text-xs font-semibold leading-tight uppercase text-white text-left tracking-tight"
                  style="font-size: .7rem"
                  >Engka Kreatif Indonesia</span
                >
              </div>
            </nav>
            <div
              class="flex-col mx-4 md:ml-56 md:mt-20 items-center justify-center text-left"
            >
              <p
                v-if="title != null"
                class="text-5xl mx-auto md:mx-0 sm:w-8/12 md:text-6xl mt-16 md:w-5/12 font-bold tracking leading-none"
              >
                {{ title }}
              </p>
              <p
                v-if="sub != null"
                class="text-xl md:text-2xl my-4 mx-auto md:mx-0 sm:w-8/12 md:w-6/12 font-sans"
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
                  href="https://wa.me/628118464644"
                  class="flex underline text-gray-300 items-center font-medium"
                  >Jadwalkan Meeting</a
                >
              </div>
            </div>
          </div>
        </ClientOnly>
      </slot>
    </div>

    <div
      v-if="mode != null"
      class="flex h-40 justify-center items-center bg-blue-700"
    >
      <div
        class="flex w-4/12 md:w-2/12 pl-8 flex-col justify-center content-center items-start"
      >
        <p class="text-white leading-none tracking-wider">
          We work with
        </p>
        <p class="text-white text-4xl md:text-5xl font-bold leading-tight">
          40+
        </p>
        <p class="text-white leading-none tracking-wider">
          companies
        </p>
      </div>

      <div
        class="scrolling relative whitespace-no-wrap scrolling-touch w-full px-8"
      >
        <NetLogo
          width="150"
          class="inline-flex text-white mr-12 flex-shrink-0"
        />
        <SpotifyLogo
          width="150"
          class="inline-flex text-white mr-12 flex-shrink-0"
        />
        <SamsungLogo
          width="150"
          class="inline-flex text-white mr-12 flex-shrink-0"
        />
        <SmartfrenLogo
          width="150"
          class="inline-flex text-white mr-12 flex-shrink-0"
        />
        <TvriLogo
          width="120"
          class="inline-flex text-white mr-12 flex-shrink-0"
        />
        <Trans7Logo
          width="120"
          class="inline-flex text-white mr-12 flex-shrink-0"
        />
        <YamahaLogo
          width="120"
          class="inline-flex text-white mr-12 flex-shrink-0"
        />
        <PodomoroLogo
          width="120"
          class="inline-flex text-white mr-12 flex-shrink-0"
        />
      </div>
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
  },
};
</script>

<style>
.VideoBg video {
  object-fit: cover;
}
</style>
