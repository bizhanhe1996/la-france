<template>
  <banner
    :src="bannerImageDetails.src"
    :alt="bannerImageDetails.alt"
    :title="bannerImageDetails.title"
    :subTitle="bannerImageDetails.subTitle"
  />
</template>

<script setup>
const bannerImageDetails = ref({
  src: "/images/about-us/banner.jpeg",
  alt: "About us",
  title: "A propos de nous",
  subTitle: "Qui sommes nous?",
});
</script>
