<template>
  <div
    class="home-flag-part"
    :style="{ 'background-color': props.backgroundColor, color: props.color }"
  >
    <h4>{{ props.name }}</h4>
    <p>{{ props.location }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  backgroundColor: {
    type: String,
    required: false,
    default: "white",
  },
  color: {
    type: String,
    required: false,
    default: "black",
  },
});
</script>

<style lang="postcss">
div.home-flag-part {
  @apply text-center py-8 px-4;
  h4 {
    @apply mb-4 sm:text-xl md:text-5xl font-serif font-bold;
  }
}
</style>
