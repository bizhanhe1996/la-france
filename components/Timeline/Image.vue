<template>
  <div class="timeline-image">
    <img
      :src="props.path"
      :alt="props.alt"
      draggable="false"
    />
    <div
      v-if="props.title || props.subtitle"
    >
      <figcaption>{{ props.title }}</figcaption>
      <small>{{ props.subtitle }}</small>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  path: {
    type: String,
    required: true,
    default: "",
  },
  alt: {
    type: String,
    required: false,
    default: null,
  },
  title: {
    type: String,
    required: false,
    default: null,
  },
  subtitle: {
    type: String,
    required: false,
    default: null,
  },
});
</script>

<style lang="postcss">

div.timeline-image {
    @apply relative;
    img {
        @apply w-full rounded-md;
    }
    div {
        @apply select-none text-center flex flex-col absolute text-white 
            gap-4 p-4 backdrop-brightness-50 bottom-0 w-full;
        figcaption {
            @apply font-bold text-3xl;
        }
    }
}

</style>
