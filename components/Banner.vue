<template>
  <div class="component-banner">
    <img class="banner-image" :src="src" :alt="alt" />
    <div class="banner-text">
      <div class="flex flex-col justify-center items-center gap-5 select-none">
        <h2 class="text-5xl  text-center text-white font-bold">{{ title }}</h2>
        <span class="text-white text-center">{{ subTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  subTitle: {
    type: String,
    required: false,
  },
});
</script>

<style>
.component-banner {
  position: relative;
  
  img.banner-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    -webkit-user-drag: none;
  }
  div.banner-text {
    z-index: 4;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
