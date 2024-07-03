<template>
  <Banner
    :src="bannerDetails.src"
    :alt="bannerDetails.alt"
    :title="bannerDetails.title"
    :subTitle="bannerDetails.subTitle"
  />
</template>

<script setup>
const bannerDetails = ref({
  src: "/images/solutions/banner.jpeg",
  alt: "Solutions",
  title: "Les Solutions",
  subTitle: "C'est sont nos solutions.",
});
</script>

<style></style>
