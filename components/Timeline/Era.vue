<template>
  <span
    data-animation="zoom-in"
    class="vertical-timeline-era"
    :style="{
      'background-image': `url(${background})`,
      'box-shadow': `0 0 3rem 0.25rem ${shadow}`,
    }"
  >
    <text>{{ title }}</text>
    <small>{{ period }}</small>
  </span>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "Title",
  },
  period: {
    type: String,
    required: false,
    default: "from-until",
  },
  shadow: {
    type: String,
    required: false,
    default: "black",
  },
  background: {
    type: String,
    required: false,
    default: "none",
  },
});

const { title, period, shadow, background } = props;
</script>

<style lang="postcss">
span.vertical-timeline-era {
  @apply select-none bg-zinc-100 aspect-square rounded-full
    flex flex-col items-center justify-center w-36 text-center scale-0
    overflow-hidden shadow-2xl text-white gap-2 bg-center bg-no-repeat bg-cover
    cursor-pointer p-4;
  text {
    @apply font-bold mix-blend-difference;
  }
  small {
    @apply mix-blend-difference;
  }
}
</style>
