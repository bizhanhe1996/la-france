<template>
  <span
    data-animation="zoom-in"
    :class="{ 'vertical-timeline-era': true, 'animate-beat': beat }"
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
  beat: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const { title, period, shadow, background, beat } = props;
</script>

<style lang="postcss">
span.vertical-timeline-era {
  @apply select-none bg-zinc-500 p-4 aspect-square rounded-full
    flex flex-col items-center justify-center w-36 text-center scale-0
    overflow-hidden shadow-2xl text-white gap-2 bg-center bg-no-repeat bg-cover;
  text {
    @apply font-bold;
  }
  small {
    font-size: 0.8rem;
    font-weight: normal;
  }
}

@keyframes animation-beat {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

.animate-beat {
  animation-name: animation-beat;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>
