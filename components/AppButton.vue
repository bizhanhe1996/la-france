<template>
  <button
    :class="`select-none relative py-2 px-4 gap-4 rounded-lg inline-flex items-center justify-center flex-nowrap shadow-lg hover:brightness-90 outline-none transition-all focus-visible:ring-4 overflow-hidden ${backgroundColor} ${ringColor}`"
    @click="handle"
  >
    <!-- ripple effect -->
    <div ref="ripple" class="rounded-full bg-white/25 absolute"></div>
    <!-- prepend -->
    <slot name="prepend" />
    <!-- text -->
    <span :class="`${textColor} text-nowrap`">{{ props.text }}</span>
    <!-- append -->
    <slot name="append" />
    <!-- icon -->
    <BootstrapIcon
      :class="`${textColor}`"
      :name="props.icon"
      v-if="props.icon"
    />
  </button>
</template>

<script lang="ts" setup>
// imports
import { computed, PropType, ref, Ref } from "vue";
// types
type theme =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "white"
  | "black";
// props
const props = defineProps({
  text: {
    type: String,
    required: false,
    default: "text",
  },
  icon: {
    type: String,
    required: false,
    default: null,
  },
  theme: {
    type: String as PropType<theme>,
    required: false,
    default: "primary",
  },
});

// refs
const ripple: Ref = ref(null);

// non-ref variables
const backgroundColorClassesMap = {
  primary: "bg-blue-500",
  secondary: "bg-gray-500",
  success: "bg-green-500",
  warning: "bg-orange-500",
  danger: "bg-red-500",
  info: "bg-cyan-500",
  white: "bg-white",
  black: "bg-black",
};

const ringColorClassesMap = {
  primary: "ring-blue-400",
  secondary: "ring-gray-400",
  success: "ring-green-400",
  warning: "ring-orange-400",
  danger: "ring-red-400",
  info: "ring-cyan-400",
  white: "ring-gray-400",
  black: "ring-gray-400",
};

const textColorClassesMap = {
  primary: "text-white",
  secondary: "text-white",
  success: "text-white",
  warning: "text-white",
  danger: "text-white",
  info: "text-white",
  white: "text-black",
  black: "text-white",
};

// functions
const handle = (event) => {
  ripple.value.style.top = `${event.offsetY}px`;
  ripple.value.style.left = `${event.offsetX}px`;
  ripple.value.classList.add("animate-scale-up");
  setTimeout(() => {
    ripple.value.classList.remove("animate-scale-up");
  }, 200);
};

// computeds
const backgroundColor = computed(() => {
  return backgroundColorClassesMap[props.theme];
});

const textColor = computed(() => {
  return textColorClassesMap[props.theme];
});

const ringColor = computed(() => {
  return ringColorClassesMap[props.theme];
});
</script>

<style>
@keyframes scale-up {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(25);
  }
}

.animate-scale-up {
  width: 0.5rem;
  height: 0.5rem;
  animation: scale-up ease 0.2s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
}
</style>
