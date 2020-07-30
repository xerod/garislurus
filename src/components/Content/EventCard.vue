<template>
  <div>
    <p class="text-center font-bold tracking-tight text-4xl mt-12 mb-8">
      Our Latest Event
    </p>
    <div class="container mx-auto">
      <div class="flex flex-wrap m-4">
        <FeaturedCard
          v-if="$static.featured.totalCount > 0"
          :records="$static.featured.edges"
        />

        <CardItem
          v-for="edge in $static.entries.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
    </div>
  </div>
</template>

<static-query>
  query {
    featured: allBlog(limit: 4, filter: { featured: { eq: true } }, sortBy:"created") {
      totalCount
      edges {
        node {
          id
          title
          image(width: 800)
          path
          timeToRead
          humanTime: created(format: "DD MMM YYYY")
          datetime: created
          category {
            id
            title
            path
          }
          author {
            id
            name
            image(width: 64, height: 64, fit: inside)
            path
          }
        }
      }
    }
    entries: allBlog(limit: 4, sortBy:"created") {
      totalCount
      edges {
        node {
          id
          title
          image(width: 800)
          path
          timeToRead
          featured
          humanTime: created(format: "DD MMM YYYY")
          datetime: created
          category {
            id
            title
            path
          }
          author {
            id
            name
            image(width: 64, height: 64, fit: inside)
            path
          }
        }
      }
    }
  }
</static-query>

<script>
import CardItem from "~/components/Content/CardItem.vue";
import FeaturedCard from "~/components/Content/FeaturedCard.vue";

export default {
  components: {
    CardItem,
    FeaturedCard,
  },
  mounted() {
    return console.log(this.$page.entries.edges);
  },
};
</script>

<style></style>
