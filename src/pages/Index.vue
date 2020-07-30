<template>
  <Layout>
    <content-header
      id="header"
      title="Build stunning event with us"
      sub="Berbekal pengalaman tim kami selama bertahun-tahun di industri MICE, kami terus berusaha menyediakan solusi bisnis dengan standar terbaik industri."
      image="header_frame.jpg"
      mode="homepage"
      :opacity="75"
    >
    </content-header>
    <mission-section id="mission" />
    <industry-section id="industry" />
    <calendar-section class="md:-mb-20" id="calendar" />
    <team-section id="team" />

    <!-- <EventCard /> -->
  </Layout>
  <!-- <div class="flex min-h-screen items-center text-blue-800 mx-8">
    <div class="flex-col w-full justify-start">
      <div
        class="flex md:hidden text-lg font-light leading-none text-blue-800 justify-center mb-10"
      >
        <Logo width="60" />
        <div class="flex-col my-auto ml-4">
          <p>ENGKA</p>
          <p>KREATIF</p>
          <p>INDONESIA</p>
        </div>
      </div>
      <Construction width="90%" class="flex mx-auto md:hidden mb-10" />
      <div
        class="hidden md:flex text-2xl font-light leading-none text-blue-800"
      >
        <Logo width="80" />
        <div class="flex-col my-auto ml-4">
          <p>ENGKA</p>
          <p>KREATIF</p>
          <p>INDONESIA</p>
        </div>
      </div>
      <p
        class="text-4xl md:text-5xl lg:text-6xl my-3 leading-none tracking-tighter"
      >
        is currently under construction
      </p>
      <p class="font-light">
        Got questions? contact us at <a>info@engkakreatif.co.id</a>
      </p>
    </div>
    <div class="hidden w-full justify-end md:flex">
      <Construction width="90%" class="flex-shrink mb-4 -ml-4" />
    </div>
  </div> -->
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Logo from "~/assets/Logo";
import Construction from "~/assets/undercons";
import EventCard from "~/components/Content/EventCard.vue";
import MissionSection from "~/components/Content/MissionSection";
import IndustrySection from "~/components/Content/IndustrySection";
import CalendarSection from "~/components/Content/CalendarSection";
import TeamSection from "~/components/Content/TeamSection";
import CardItem from "~/components/Content/CardItem.vue";
import FeaturedCard from "~/components/Content/FeaturedCard.vue";
import ContentHeader from "~/components/Partials/ContentHeader.vue";

export default {
  metaInfo: {
    title: "Under Construction",
  },
  components: {
    CardItem,
    FeaturedCard,
    ContentHeader,
    EventCard,
    Logo,
    Construction,
    MissionSection,
    IndustrySection,
    CalendarSection,
    TeamSection,
  },
};
</script>
