<template>
  <nav
    class="md:hidden flex items-center justify-between flex-wrap mx-auto dark:text-gray-400"
  >
    <div class="flex-grow flex items-center w-auto mx-4">
      <div class="flex items-center flex-shrink-0 mr-6">
        <a
          role="button"
          @click.prevent="openNavbarModal()"
          aria-label="Open Navigation"
          title="Open Navigation"
        >
          <font-awesome :icon="['fas', 'bars']"></font-awesome>
        </a>
      </div>
      <div
        class="flex flex-row flex-grow text-center items-center justify-center font-bold text-lg"
      >
        <Logo
          height="30"
          width="30"
          color="text-blue-700"
          subcolor="text-orange-600"
          class="mr-2 mt-2"
        />
        <span
          class="w-12 mt-2 font-semibold leading-tight uppercase text-blue-700 text-left tracking-tight"
          style="font-size: .50rem;"
          >{{ $static.metadata.siteName }}</span
        >
      </div>

      <div class="inline-block">
        <ul class="list-none flex justify-center md:justify-end">
          <li class="mr-6">
            <search-button v-on="$listeners"></search-button>
          </li>
          <li>
            <theme-switcher v-on="$listeners" :theme="theme" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ThemeSwitcher from "~/components/Navbar/ThemeSwitcher.vue";
import SearchButton from "~/components/Navbar/SearchButton.vue";
import Logo from "~/assets/Logo";

export default {
  props: {
    theme: {
      type: String,
    },
    showNavigation: {
      type: Boolean,
    },
  },
  components: {
    ThemeSwitcher,
    SearchButton,
    Logo,
  },
  methods: {
    openNavbarModal() {
      this.$emit("openNavbarModal");
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
