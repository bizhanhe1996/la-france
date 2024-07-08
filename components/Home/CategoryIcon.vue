<template>
  <NuxtLink :to="link">
    <div class="flex flex-col gap-2 items-center text-center">
      <BootstrapIcon class="text-7xl" :style="{color: color}" :name="icon" />
      <h6 class="text-2xl font-bold">{{ title }}</h6>
      <p>{{ text }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props: Object = defineProps({
  link: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: "black"
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
