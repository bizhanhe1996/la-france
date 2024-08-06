<template>
  <div class="select-container peer">
    <input
      v-model="selectInputModel"
      @input="handleSelectInputSearch"
      @keydown="handleSelectInputKeyDown"
      @focus="handleSelectInputFocus"
      @blur="handleSelectInputBlur"
    />
    <ul v-show="selectListModel">
      <li
        v-for="(option, index) in printableOptions"
        :key="`option-${index}`"
        :data-value="option.value"
        :title="option.label"
        tabindex="0"
        @mousedown="handleSelectItemSelected"
        @keydown="handleSelectItemKeyDown"
      >
        <BootstrapIcon v-if="'icon' in option" :name="option.icon" />
        <div>
          <span>
            {{ option.label }}
          </span>
          <p v-if="'description' in option">
            {{ option.description }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
// imports
import { PropType, Ref, ref } from "vue";
import { SelectOption } from "../../types/components/forms/SelectOption";

// props
const props = defineProps({
  options: {
    type: Array as PropType<SelectOption[]>,
    required: true,
    default: [],
  },
});

// refs
const selectInputModel: Ref = ref<boolean>();
const selectListModel: Ref = ref<boolean>(false);
const printableOptions: Ref = ref<SelectOption[]>(props.options);

const handleSelectItemKeyDown = (event) => {
  event.preventDefault();
  if (event.key === "ArrowDown") {
    const nextElement = event.target.nextElementSibling;
    if (nextElement) {
      nextElement.focus();
    } else {
      event.target.parentNode.children[0].focus();
    }
  } else if (event.key === "ArrowUp") {
    const prevElement = event.target.previousElementSibling;
    if (prevElement) {
      prevElement.focus();
    } else {
      [...event.target.parentNode.children].at(-1).focus();
    }
  } else if (event.key === "Enter") {
    selectInputModel.value = event.target.getAttribute("title");
    selectListModel.value = false;
  }
};

const handleSelectInputSearch = (event) => {
  props.options.forEach((option: any) => {
    option.display = ["label", "description"].some((property) =>
      option[property].toLowerCase().includes(event.target.value)
    );
  });
  printableOptions.value = props.options.filter(
    (option: any) => option.display
  );
};

const handleSelectInputKeyDown = (event) => {
  if (event.key === "Escape") {
    event.target.blur();
  } else if (event.key === "ArrowDown") {
    const ul = event.target.nextElementSibling;
    ul.querySelector("li").focus();
    selectListModel.value = true;
  }
};

const handleSelectInputFocus = (event) => {
  selectListModel.value = true;
};

const handleSelectItemSelected = (event) => {
  selectInputModel.value = event.target.getAttribute("title");
  selectListModel.value = false;
};

const handleSelectInputBlur = (event) => {
  if (document.activeElement?.nodeName != "LI") {
    selectListModel.value = false;
  }
};
</script>

<style lang="postcss">
div.select-container {
  input {
    @apply focus-visible:ring-sky-300 focus:ring-2 z-[1];
  }
  ul {
    @apply w-full -translate-y-1 border-2 select-none bg-gray-100 absolute flex flex-col overflow-hidden z-[2];
    li {
      @apply select-none cursor-pointer focus-within:flex focus:outline-0 flex gap-4 items-center border-b-2 ps-4 hover:bg-blue-100 focus:bg-blue-100;
      div {
        @apply flex flex-col;
        span {
          @apply text-gray-700 text-sm;
        }
        p {
          @apply text-gray-400 text-xs;
        }
      }
    }
  }
}
</style>