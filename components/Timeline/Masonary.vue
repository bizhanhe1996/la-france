<template>
  <div
    class="masonary"
    :style="{
      'box-shadow': `0 1rem 3rem 0.25rem ${shadow}`,
    }"
  >
    <div
      v-for="(column, columnIndex) in items"
      :key="`masonary-column-${columnIndex}`"
      :class="`col-span-${12 / items.length}`"
    >
      <figure
        v-for="image in column"
        :key="image.id"
        :id="image.id"
        :class="`row-span-${12 / column.length}`"
      >
        <img :src="image.path" :alt="image.alt" draggable="false" />
        <figcaption>{{ image.title }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script setup>
// props
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  shadow: {
    type: String,
    required: false,
    default: "black",
  },
});
const { items, shadow } = props;
</script>

<style lang="postcss">
div.masonary {
  @apply grid grid-cols-12 rounded-md overflow-clip shadow-2xl select-none;
  & > div {
    @apply grid;
    & > figure {
      @apply relative flex overflow-clip;
      img {
        @apply sepia transition hover:sepia-0 cursor-pointer hover:scale-150;
      }
      figcaption {
        @apply absolute font-bold text-xs backdrop-brightness-50 text-white w-full bottom-0 px-2 py-1;
      }
    }
  }
}
</style>
