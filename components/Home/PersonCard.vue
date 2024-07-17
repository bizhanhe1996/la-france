<template>
  <div
    class="flex flex-row gap-0 rounded-lg shadow overflow-hidden hover:shadow-xl hover:shadow-emerald-200 transition h-40 max-h-40"
  >
    <div class="w-1/3 overflow-hidden">
      <img
        class="hover:scale-150 transition-transform h-full object-cover aspect-square"
        :src="props.imageSrc"
        :alt="props.imageAlt"
        draggable="false"
      />
    </div>
    <div class="flex flex-col w-2/3 justify-around p-4 hover:bg-teal-50">
      <div class="text-2xl">{{props.title}}</div>
      <p class="text-gray-700">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
    default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maxime!"
  }
});
</script>
