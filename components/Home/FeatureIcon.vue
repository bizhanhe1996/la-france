<template>
  <div class="flex items-center gap-4">
    <BootstrapIcon class="text-4xl" :style="{'color':color}" :name="icon" />
    <div class="text-left">
      <h6 class="font-bold text-2xl">{{ title }}</h6>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
    default: "black"
  }
});
</script>
