<template>
  <div class="flex flex-col text-center" ref="elm" :style="{ color: color }">
    <span class="text-5xl">{{ currentCount }}</span>
    <p class="text-2xl">{{ subtitle }}</p>
  </div>
</template>

<script lang="ts" setup>

const elm = ref(null);

const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
    default: "black",
  },
});

let currentCount: Ref = ref(0);

onMounted(() => {

  let interval: number;

  const intervalCallback = () => {
    if (props.count > currentCount.value) {
      currentCount.value += 1;
    } else {
      clearInterval(interval);
    }
  }

  const visibilityObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const interval = setInterval(intervalCallback, 10);
          visibilityObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  if (elm.value) {
    visibilityObserver.observe(elm.value);
  }

});
</script>
