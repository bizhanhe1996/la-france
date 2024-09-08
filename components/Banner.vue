<template>
  <div class="component-banner">
    <img :src="src" :alt="alt" />
    <div>
      <h4>{{ title }}</h4>
      <p>{{ subTitle }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
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
const { src, alt, title, subTitle } = props;
</script>

<style lang="postcss">
.component-banner {
  @apply select-none relative shadow-lg shadow-zinc-300;
  img {
    @apply w-full h-80 object-cover;
  }
  div {
    @apply mix-blend-difference flex flex-col 
      justify-center items-center gap-4 absolute
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2];
    h4 {
      @apply text-5xl text-center text-white font-bold;
    }
    p {
      @apply text-white text-center;
    }
  }
}
</style>
