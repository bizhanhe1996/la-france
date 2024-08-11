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

<style lang="postcss">
.component-banner {
  position: relative;
  @apply select-none;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    -webkit-user-drag: none;
  }
  div {
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @apply mix-blend-difference flex flex-col justify-center items-center gap-5 select-none;
    h4 {
      @apply text-5xl text-center text-white font-bold;
    }
    p {
      @apply text-white text-center;
    }
  }
}
</style>