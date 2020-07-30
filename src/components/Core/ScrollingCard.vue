<template>
  <div class="featured-post-card inline-flex align-middle my-2 mr-6">
    <div class="flex flex-col w-64 h-auto whitespace-normal my-auto">
      <g-image
        v-if="this.image"
        class="relative w-full h-full object-cover text-center overflow-hidden"
        :src="setImage"
        :alt="imgAlt"
      />
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    imgAlt: String,
  },
  computed: {
    setImage: function() {
      return require("@/assets/images/" + this.image);
    },
  },
};
</script>

<style></style>
