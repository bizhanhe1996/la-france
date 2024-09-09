<template>
  <div class="flippable-card">
    <div class="front" :style="{ background: `linear-gradient(135deg, ${backgroundColor},transparent)`, color }">
      <bootstrap-icon :name="_icon" />
      <b>{{ title }}</b>
    </div>
    <div class="back absolute">
      <p class="text-center">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "Title",
  },
  icon: {
    type: String,
    required: false,
    default: "star",
  },
  backgroundColor: {
    type: String,
    required: false,
    default: "none",
  },
  color: {
    type: String,
    required: false,
    default: "black",
  },
  text: {
    type: String,
    required: false,
    default:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nostrum quae maxime ab beatae accusantium.",
  },
});
const { title, icon: _icon, text, backgroundColor, color } = props;
</script>

<style lang="postcss">
div.flippable-card {
  @apply relative select-none rounded-md flex items-center justify-center;
  &:hover {
    & > div.back {
      transform: rotateY(0);
    }
    & > div.front {
      transform: rotateY(180deg);
    }
  }
  & > div.front,
  & > div.back {
    @apply p-4 flex flex-col gap-2 justify-center items-center cursor-pointer transition w-full;
    backface-visibility: hidden;
    i {
      @apply text-9xl;
    }
    b {
      @apply text-3xl;
    }
  }
  & > div.back {
    transform: rotateY(180deg);
  }
}
</style>
