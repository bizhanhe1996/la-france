<template>
  <div class="home-gallery-image">
    <img :src="props.path" :alt="props.alt" />
    <p>
      {{ props.alt }}
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
  },
});
</script>

<style lang="postcss">
div.home-gallery-image {
  @apply relative overflow-hidden rounded-lg cursor-pointer flex items-center justify-center select-none;
  img {
    @apply hover:scale-125 hover:rotate-12 hover:blur-sm m-auto hover:sepia transition-all object-cover w-full;
  }
  p {
    @apply break-words absolute text-white text-center text-2xl bg-gray-600 w-full bg-opacity-30 p-1;
  }
}
</style>
