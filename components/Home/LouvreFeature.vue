<template>
  <div class="flex flex-row gap-2 p-4 rounded-md bg-slate-50 drop-shadow">
    <div class="w-1/5 flex justify-center">
      <BootstrapIcon 
      :class="`text-3xl ${props.colorClass}`" 
      :name="props.icon" 
      />
    </div>
    <div class="w-4/5">
      <h4 class="text-2xl">{{ props.title }}</h4>
      <p class="text-slate-700 mt-4"> 
        {{ props.text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true
  },
  colorClass: {
    type: String,
    required: false,
    default: 'text-black'
  }
});
</script>
