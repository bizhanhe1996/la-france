<template>
  <banner :src="bannerImageSource" :alt="bannerImageAlt" :title="bannerImageTitle" :subTitle="bannerImageSubTitle" />
</template>

<script setup>

const bannerImageSource = ref("/images/projects/banner.jpeg");
const bannerImageAlt = ref("Projects");
const bannerImageTitle = ref("Les Projets");
const bannerImageSubTitle = ref("C'est sont nos projets.");


</script>

<style>
</style>