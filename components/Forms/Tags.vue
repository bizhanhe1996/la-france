<template>
  <div
    class="tags-container peer"
    @focusout="handleTagsContainerFocusout"
    @focusin="handleTagsContainerFocusin"
  >
    <div @keydown="handleTagsBoxKeyDown">
      <!-- selected tags -->
      <span
        v-for="(selectedTag, index) in selectedTags"
        :key="`selected-tag-${index}`"
        @click.capture="handleTagRemove(selectedTag.value)"
      >
        {{ selectedTag.label }}
      </span>
      <!-- virtual input -->
      <p
        ref="tagsQueryElement"
        contenteditable="true"
        @input="handleTagsVirtualInputInput"
      ></p>
    </div>
    <!-- selectable tags -->
    <ul v-show="tagsUlShowFlag">
      <small v-if="selectableTags.length == 0">Nothing found!</small>
      <li
        v-for="(tag, index) in selectableTags"
        :key="`selectable-tag-${index}`"
        tabindex="0"
        @click="handleTagSelect(tag.value)"
        @keydown.prevent.enter="handleTagSelect(tag.value)"
      >
        {{ tag.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, ComputedRef, PropType, ref, Ref } from "vue";
import { TagType } from "../../types/components/forms/TagType";

const props = defineProps({
  tags: {
    type: Array as PropType<TagType[]>,
    required: false,
    default: [],
  },
});

//  Tags
const tagsUlShowFlag: Ref = ref(false);
const selectedTags: Ref = ref([]);
const tagsQueryElement: Ref = ref(null);
const tagsQuery = ref<string>("");
const handleTagSelect = (tagValue, event?) => {
  const isTagSelectedBefore = selectedTags.value.find(
    (tag) => tag.value === tagValue
  );
  if (isTagSelectedBefore === undefined) {
    selectedTags.value.push(
      props.tags.find((tag: any) => tag.value === tagValue)
    );
    tagsQuery.value = "";
    tagsQueryElement.value.focus();
    tagsQueryElement.value.innerHTML = "";
  }
};
const handleTagRemove = (selectedTagValue, event?) => {
  selectedTags.value = selectedTags.value.filter(
    (tag) => tag.value !== selectedTagValue
  );
};
const handleTagsContainerFocusin = () => {
  tagsUlShowFlag.value = true;
};
const handleTagsContainerFocusout = async () => {
  setTimeout(() => {
    if (document.activeElement?.closest(".tags-container") === null) {
      tagsUlShowFlag.value = false;
    }
  }, 1);
};
const handleTagsVirtualInputInput = (event: any) => {
  tagsQuery.value = event.target?.innerText;
};
const handleTagsBoxKeyDown = (event: any) => {
  if (event.key === "Backspace" && !tagsQueryElement.value.innerText) {
    selectedTags.value.pop();
  }
};

const selectableTags: ComputedRef = computed(() => {
  const unselectedTags = props.tags.filter((tag: any) => {
    return !selectedTags.value.find(
      (selectedTag) => selectedTag.value === tag.value
    );
  });
  return unselectedTags.filter((tag: any) => {
    if (!tagsQuery.value) {
      return true;
    } else {
      return tag.label.toLowerCase().includes(tagsQuery.value?.toLowerCase());
    }
  });
});
</script>

<style lang="postcss">
div.tags-container {
  @apply focus-within:ring-sky-300 focus-within:ring-2 rounded-lg transition;
  div {
    @apply bg-gray-100 flex z-[2] flex-row gap-2 flex-wrap transition focus:ring-sky-300 focus:ring-2 py-2 px-4 outline-none rounded-lg;
    span {
      @apply px-2 hover:border-red-300 ring-sky-300 focus:outline-none text-xs py-1 rounded-lg cursor-pointer bg-gray-200 text-black select-none border-gray-300 border-2;
    }
    p {
      @apply ms-2 outline-none border-b-2 border-gray-500 min-w-10 flex;
    }
  }
  ul {
    @apply z-[1] -translate-y-1 absolute p-2 border-2 rounded-b-xl bg-gray-100 w-full flex flex-row gap-2 flex-wrap;
    li {
      @apply px-2 focus:border-sky-300 hover:border-sky-300 ring-sky-300 focus:outline-none text-xs py-1 rounded-lg cursor-pointer bg-gray-200 text-black select-none border-gray-300 border-2;
    }
  }
}
</style>
