<template>
  <div class="flex -mb-16">
    <div class="h-16 w-full dark:bg-black bg-gray-100">
      <headroom
        :classes="{
          initial: 'headroom bg-transparent text-white',
          top: 'headroom bg-transparent text-white',
          notTop: 'headroom bg-white shadow-md text-blue-900',
        }"
        :downTolerance="10"
        :upTolerance="10"
        :offset="40"
        @top="navbarTop()"
        @not-top="navbarNotTop()"
      >
        <div class="flex justify-between">
          <!-- <Logo width="100" class="ml-6 mr-2" /> -->
          <g-image
            class="w-20 md:w-24 mt-4 md:mt-0 ml-6 mr-2"
            :src="require('@/assets/images/' + this.image)"
          />
          <navbar-desktop
            v-on="$listeners"
            @openSearchModal="openSearchModal"
            :theme="theme"
            :hideSubnav="this.navbarUnpinned"
          >
          </navbar-desktop>
        </div>

        <!-- <navbar-mobile
          @openSearchModal="openSearchModal"
          @openNavbarModal="openNavbarModal"
          v-on="$listeners"
          :theme="theme"
        /> -->
      </headroom>

      <!-- <modal :showModal="this.showSearchModal" @close="closeSearchModal">
        <search-modal></search-modal>
      </modal> -->

      <modal :showModal="this.showNavbarModal" @close="closeNavbarModal">
        <navbar-modal></navbar-modal>
      </modal>
    </div>
  </div>
</template>

<script>
import NavbarDesktop from "~/components/Navbar/NavbarDesktop.vue";
import NavbarMobile from "~/components/Navbar/NavbarMobile.vue";
import Modal from "~/components/Modal/Modal.vue";
import SearchModal from "~/components/Modal/SearchModal.vue";
import NavbarModal from "~/components/Modal/NavbarMobileModal.vue";
import { headroom } from "vue-headroom";
import Logo from "~/assets/Logo";

export default {
  props: {
    theme: {
      type: String,
    },
  },
  data: function() {
    return {
      showSearchModal: false,
      showNavbarModal: false,
      headerHeight: 100,
      navbarUnpinned: false,
      image: "logo_white.svg",
    };
  },
  components: {
    NavbarDesktop,
    NavbarMobile,
    Modal,
    SearchModal,
    NavbarModal,
    headroom,
    Logo,
  },
  methods: {
    openSearchModal() {
      this.showSearchModal = true;
    },
    closeSearchModal() {
      this.showSearchModal = false;
    },
    openNavbarModal() {
      this.showNavbarModal = true;
    },
    closeNavbarModal() {
      this.showNavbarModal = false;
    },
    navbarTop() {
      this.image = "logo_white.svg";
    },
    navbarNotTop() {
      this.image = "logo_coloured.svg";
    },
  },
  watch: {
    $route(to, from) {
      this.closeNavbarModal();
      this.closeSearchModal();
    },
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
