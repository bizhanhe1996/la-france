<template>
  <section title="banner">
    <banner
      :src="bannerData.src"
      :alt="bannerData.alt"
      :title="bannerData.title"
      :subTitle="bannerData.subTitle"
    />
  </section>
  <section title="worldmap">
    <img
      id="french-speaking-countries"
      src="/images/francais/worldmap.svg"
      usemap="#french-speaking-countries-map"
    />
    <map name="french-speaking-countries-map">
      <!-- <area shape="circle" coords="50vw, 50vw, 200" href="www.google.com" alt="Link A" /> -->
    </map>
  </section>
</template>

<script setup>
const bannerData = {
  src: "/images/francais/banner.jpeg",
  alt: "Français",
  title: "Le Français",
  subTitle: "Apprenez le français avec nous.",
};
</script>

<style lang="postcss">
img#french-speaking-countries {
  stroke: blue;
}
</style>
