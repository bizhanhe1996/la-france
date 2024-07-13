<template>
  <div class="component-slider shadow-xl">
    <!-- right -->
    <i
      class="absolute z-[1] right-[1rem] bg-white flex items-center justify-center w-14 h-14 rounded-full opacity-75 cursor-pointer select-none hover:opacity-100 transition-all"
      @click="nextSlide"
    >
      <BootstrapIcon name="chevron-right" />
    </i>
    <!-- image -->
    <img
      class="relative hover:sepia transition-[filter]"
      v-for="(slide, index) in slides"
      :class="{ hidden: !slide.display, slide: true }"
      :key="'slide-' + index"
      :src="slide.src"
    />
    <div class="absolute flex flex-col gap-4 text-center">
      <span class="text-4xl">{{slides[currentSlideIndex].title}}</span>
      <p class="text-md">{{slides[currentSlideIndex].subtitle}}</p>
    </div>
    <!-- left -->
    <i
      class="absolute z-[1] left-[1rem] bg-white flex items-center justify-center w-14 h-14 rounded-full opacity-75 cursor-pointer select-none hover:opacity-100 transition-all"
      @click="previousSlide"
    >
      <BootstrapIcon name="chevron-left" />
    </i>
    <!-- bullts -->
    <ul class="absolute list-none flex gap-4 bottom-4" v-if="renderBullets">
      <li
        class="text-white cursor-pointer"
        v-for="(_, index) in slides"
        :key="'slider-bullet' + index"
      >
        <BootstrapIcon 
          :class="{'text-amber-500':currentSlideIndex == index}" 
          name="circle-fill"   
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  renderBullets: {
    type: Boolean,
    required: false,
    default: false,
  },
  slides: {
    type: Array,
    required: true,
  },
});

let currentSlideIndex = ref(0);

const hideAllSlides = () => {
  props.slides.forEach((slide) => (slide.display = false));
};

const showCurrentSlideIndexSlide = () => {
  props.slides[currentSlideIndex.value].display = true;
};

const sliderSwitcher = () => {
  hideAllSlides();
  // if it is the last slide
  if (currentSlideIndex.value == props.slides.length - 1) {
    showCurrentSlideIndexSlide();
    currentSlideIndex.value = 0;
    return;
  }
  showCurrentSlideIndexSlide();
  currentSlideIndex.value += 1;
};

sliderSwitcher();

onMounted(() => {
  setInterval(sliderSwitcher, 3000);
});

const nextSlide = () => {
  if (currentSlideIndex.value === props.slides.length - 1) {
    currentSlideIndex.value = 0;
  } else {
    currentSlideIndex.value += 1;
  }
  hideAllSlides();
  showCurrentSlideIndexSlide();
};

const previousSlide = () => {
  if (currentSlideIndex.value === 0) {
    currentSlideIndex.value = props.slides.length - 1;
  } else {
    currentSlideIndex.value -= 1;
  }
  hideAllSlides();
  showCurrentSlideIndexSlide();
};

</script>

<style>
.component-slider {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  overflow: hidden;
  img {
    width: -webkit-fill-available;
    height: inherit;
    object-fit: cover;
  }
}
</style>
