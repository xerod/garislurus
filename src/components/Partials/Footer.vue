<template>
  <div id="footer">
    <div
      class="relative text-white bg-blue-700 w-full mx-auto -mb-20 z-1000 px-6 pt-6 pb-12 md:p-12"
      :style="
        'background-image: url(' +
          require('@/assets/images/lighter-pattern.svg') +
          ')'
      "
    >
      <div class="flex flex-col items-center md:flex-row justify-between">
        <p
          class="hidden md:block w-6/12 text-left text-4xl font-bold leading-none"
        >
          Jadwalkan Meeting Sekarang Juga
        </p>
        <p
          class="md:hidden w-full text-center md:text-left text-4xl font-bold leading-none"
        >
          Jadwalkan Meeting Sekarang
        </p>
        <div class="flex mt-12 items-center md:m-0 flex-col justify-center">
          <div class="space-x-2 text-right">
            <a
              href="https://wa.me/628118464644"
              class="bg-white text-blue-800 rounded p-4"
              ><font-awesome
                :icon="['fab', 'whatsapp']"
                size="lg"
                class="mr-2"
              />(+62) 811-8464-644</a
            >
          </div>

          <div class="space-x-2 text-right"></div>
        </div>
      </div>
    </div>

    <div
      class="bg-gray-900 dark:bg-gray-900 text-white dark:text-gray-400 text-center text-sm pt-20"
    >
      <div
        class="flex flex-col md:flex-row w-10/12 lg:w-8/12 mx-auto justify-between mt-6 py-10"
      >
        <div class="flex-col items-left text-left">
          <div class="flex items-left mb-4">
            <Logo class="h-16 w-16 md:w-32 md:h-32 mr-3 mb-4" />
          </div>
        </div>
        <div class="flex-col items-left text-left md:items-right md:text-right">
          <div class="flex flex-col text-left md:text-right mb-4">
            <span>
              Graha Engka
            </span>
            <span>
              Jl. poltangan raya No.48,
            </span>
            <span>
              Jakarta Selatan
            </span>
          </div>
          <div class="mb-4">
            <ul class="list-reset flex text-left md:justify-end">
              <li
                v-for="socialItem in $static.metadata.social"
                :key="socialItem.name"
                class="pr-6 md:pl-6 md:pr-0"
              >
                <a
                  :href="socialItem.link"
                  target="_blank"
                  :title="socialItem.name"
                >
                  <font-awesome
                    :icon="icon(socialItem.icon)"
                    size="lg"
                  ></font-awesome>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row w-10/12 lg:w-8/12 mx-auto justify-between py-10 text-gray-600"
      >
        <div class="flex-col items-left text-left">
          <div class="md:mb-4">
            <p>
              © {{ new Date().getFullYear() }}
              {{ $static.metadata.siteName }} &middot; Powered by
              <a
                href="https://www.gridsome.org"
                class="underline"
                target="_blank"
                >Gridsome</a
              >
            </p>
          </div>
        </div>
        <div class="flex-col items-left text-left md:items-right md:text-right">
          <div class="mb-4">
            <p>
              Made with passion by
              <a
                href="https://xerod.github.io"
                target="_blank"
                class="underline"
                >Akramurridjal R</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/assets/Logo";

export default {
  components: {
    Logo,
  },
  methods: {
    icon(icon) {
      return icon;
    },
  },
};
</script>

<static-query>
query {
  metadata {
    siteName

    social {
      name
      icon
      link
    }
  
    footerNavigation {
        name
        link
        external
    }
  }
}
</static-query>
