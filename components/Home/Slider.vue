<template>
  <div class="relative" id="home-slider">
    <i
      class="absolute right-10 bg-white py-1 px-4 rounded-lg opacity-75 cursor-pointer select-none"
      @click="nextSlide"
      >Next</i
    >
    <img
      v-for="(image, index) in images"
      :class="{ hidden: !image.display, 'w-full': true }"
      :key="'image' + index"
      :src="image.src"
    />
    <i
      class="absolute left-10 bg-white py-1 px-4 rounded-lg opacity-75 cursor-pointer select-none"
      @click="previousSlide"
      >Previous</i
    >
  </div>
</template>

<script lang="ts" setup>
const images = ref([
  {
    src: "/images/home/slider/A.jpg",
    display: true,
  },
  {
    src: "/images/home/slider/B.jpg",
    display: false,
  },
  {
    src: "/images/home/slider/C.jpg",
    display: false,
  },
]);

let currentSlideIndex = ref(0);

const hideAllImages = () => {
  images.value.forEach((image) => (image.display = false));
};

const showCurrentSlideIndexImage = () => {
  images.value[currentSlideIndex.value].display = true;
};

const sliderSwitcher = () => {
  hideAllImages();
  if (currentSlideIndex.value == images.value.length - 1) {
    showCurrentSlideIndexImage();
    currentSlideIndex.value = 0;
    return;
  }
  showCurrentSlideIndexImage();
  currentSlideIndex.value += 1;
};

sliderSwitcher();

onMounted(() => {
  setInterval(sliderSwitcher, 3000);
});

const nextSlide = () => {
  if (currentSlideIndex.value === images.value.length - 1) {
    currentSlideIndex.value = 0;
  } else {
    currentSlideIndex.value += 1;
  }
  hideAllImages();
  showCurrentSlideIndexImage();
};

const previousSlide = () => {
  if (currentSlideIndex.value === 0) {
    currentSlideIndex.value = images.value.length - 1;
  } else {
    currentSlideIndex.value -= 1;
  }
  hideAllImages();
  showCurrentSlideIndexImage();
};
</script>

<style>
#home-slider {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  overflow: hidden;
}
</style>