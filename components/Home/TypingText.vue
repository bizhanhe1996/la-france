<template>
  <div :class="class">
    {{ typingText }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  period: {
    type: Number,
    required: false,
    default: 50,
  },
  class: {
    type: String,
    required: false,
    default: "",
  },
});

const typingText: Ref = ref<string>("");

const characters = props.text.split("");

onMounted(() => {
  const interval = setInterval(() => {
    if (typingText.value.length < characters.length) {
      typingText.value += characters[typingText.value.length];
    } else {
      clearInterval(interval);
    }
  }, props.period);
});
</script>
