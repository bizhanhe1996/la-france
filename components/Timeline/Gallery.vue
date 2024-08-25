<template>
  <!-- horizontal -->
  <div class="flex items-center justify-center" v-if="props.direction === 'horizontal'">
    <div
      class="absolute shadow-2xl shadow-red-500/50 -top-1/4 scale-75 z-[1] sepia opacity-50"
    >
      <timeline-image
        :path="imagesRef[0].path"
        :alt="imagesRef[0].alt"
        :title="imagesRef[0].title"
        :subtitle="imagesRef[0].subtitle"
      />
    </div>
    <div class="z-[2] shadow-2xl shadow-red-500/50 rounded-md">
      <timeline-image
        :path="imagesRef[1].path"
        :alt="imagesRef[1].alt"
        :title="imagesRef[1].title"
        :subtitle="imagesRef[1].subtitle"
      />
    </div>
    <div
      class="absolute shadow-2xl shadow-red-500/50 -bottom-1/4 scale-75 z-[1] sepia opacity-50"
    >
      <timeline-image
        :path="imagesRef[2].path"
        :alt="imagesRef[2].alt"
        :title="imagesRef[2].title"
        :subtitle="imagesRef[2].subtitle"
      />
    </div>
  </div>
  <!-- vertical -->
  <div class="flex items-center justify-center" v-else>
    <div
      class="scale-[0.35] z-[1] shadow-2xl shadow-black/50 absolute -left-[35%] rounded-md sepia opacity-50"
    >
      <timeline-image
        :alt="imagesRef[0].alt"
        :path="imagesRef[0].path"
        :title="imagesRef[0].title"
        :subtitle="imagesRef[0].subtitle"
      />
    </div>
    <div class="z-[2] w-[65%] shadow-2xl shadow-yellow-500">
      <timeline-image
        :alt="imagesRef[1].alt"
        :path="imagesRef[1].path"
        :title="imagesRef[1].title"
        :subtitle="imagesRef[1].subtitle"
      />
    </div>
    <div
      class="scale-[0.35] z-[1] shadow-2xl shadow-black/50 absolute -right-[35%] rounded-md sepia opacity-50"
    >
      <timeline-image
        :alt="imagesRef[2].alt"
        :path="imagesRef[2].path"
        :title="imagesRef[2].title"
        :subtitle="imagesRef[2].subtitle"
      />
    </div>
  </div>
</template>

<script setup>
// props
const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: [],
  },
  direction: {
    type: String,
    required: true,
    default: "horizontal",
  }
});

const {images} = props;

// computeds
const imagesRef = ref(images);

// mounted
onMounted(() => {
  const changeSliderInterval = setInterval(() => {
    const poppedImage = imagesRef.value.pop();
    imagesRef.value.unshift(poppedImage);
  }, 2000);
});
</script>

<style lang="postcss">

</style>
