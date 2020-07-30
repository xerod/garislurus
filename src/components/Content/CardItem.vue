<template>
  <div class="w-full md:w-1/2 lg:w-1/3 px-1 my-1">
    <div
      class="post-card border-gray-200 dark:border-gray-900 bg-white rounded-lg hover:shadow-xl z-100 dark:bg-gray-900"
      :id="record.id"
    >
      <g-link :to="record.path" class="post-card-image-link">
        <div
          v-if="record.featured"
          class="absolute top-0 right-0 pr-4 pt-4 z-10"
        >
          <span
            class="w-6 h-6 relative block text-center leading-tight bg-white border border-gray-300 text-black rounded-full"
          >
            <font-awesome :icon="['fas', 'star']" size="xs"></font-awesome>
          </span>
        </div>
        <g-image
          :src="record.image"
          :alt="record.title"
          class="post-card-image"
        ></g-image>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    record: {},
  },
  computed: {
    authors() {
      let tooltipText = [];
      for (let index = 0; index < this.record.author.length; index++) {
        if (index == 0) {
          tooltipText.push(`Posted by ${this.record.author[index].name}`);
        } else {
          if (index == 1) {
            tooltipText.push(
              `<br> Among with ${this.record.author[index].name}`
            );
          } else {
            tooltipText.push(`, ${this.record.author[index].name}`);
          }
        }
      }

      return tooltipText.join("");
    },
  },
};
</script>

<style></style>
