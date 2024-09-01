<template>
  <div class="carousell">
    <div class="carousell-items">
      <figure
        class="carousell-item peer"
        v-for="(image, index) in images"
        :key="`carousell-item-${index}`"
        :id="`carousell-item-${index}`"
      >
        <img :src="image.src" :alt="image.alt" draggable="false" />
        <figcaption>{{ image.title }}</figcaption>
      </figure>
    </div>
    <ul class="carousell-bullets">
      <li
        v-for="(image, index) in images"
        :key="`carousell-bullet-${index}`"
        @click="changeSlider(index)"
      ></li>
    </ul>
  </div>
</template>

<style lang="postcss">
div.carousell {
  @apply flex flex-row overflow-x-scroll relative select-none rounded-md;
  &::-webkit-scrollbar {
    @apply hidden;
  }

  div.carousell-items {
    @apply flex flex-row overflow-x-auto relative max-w-full;
    &::-webkit-scrollbar {
      @apply hidden;
    }
    figure {
      @apply relative flex items-center justify-center;
      flex: 0 0 100%;
      img {
        @apply object-cover w-full;
      }
      figcaption {
        @apply absolute font-bold text-2xl text-white backdrop-brightness-50 p-4;
      }
    }
  }

  ul {
    @apply absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4;
    li {
      @apply bg-white aspect-square rounded-full w-4 h-4 
          opacity-50 hover:opacity-100 cursor-pointer transition-all 
          hover:scale-125;
    }
  }
}
</style>

<script setup>
// props
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});
const { images } = props;

// non-ref variables
let changeSlider;

onMounted(() => {
  changeSlider = (index) => {
    const currentHref = window.location.href;
    const baseUrl = currentHref.split("#")[0];
    window.location.href = baseUrl + "#carousell-item-" + index;
  };
});
</script>
