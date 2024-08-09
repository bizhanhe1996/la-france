<template>
  <div class="select-container peer">
    <input
      v-model="selectInputModel"
      @input="handleSelectInputSearch"
      @keydown="handleSelectInputKeyDown"
      @focus="handleSelectInputFocus"
      @blur="handleSelectInputBlur"
      :class="{
        'ring-red-300 ring-2': isAnyError
      }"
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
// props
const props = defineProps({
  options: {
    type: Array ,
    required: true,
    default: [],
  },
  validations: {
    type: Array ,
    required: false,
    default: []
  },
  onBlurValidationsFactory: {
    type: Object ,
    required: true,
  },
  label: {
    type: String ,
    required: true,
    default: 'select'
  }
});

// emits

const emit = defineEmits(['ValidationFailed','ValidationPassed']);

// refs
const selectInputModel: Ref = ref<boolean>();
const selectListModel: Ref = ref<boolean>(false);
const printableOptions: Ref = ref<SelectOption[]>(props.options);
const isAnyError: Ref = ref<boolean>(false);

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
  if (!document.activeElement.closest('select-container')) {
    selectListModel.value = false;
    handleOnBlurValidation();
  }
};

const handleOnBlurValidation = () => {
  const inputValue = selectInputModel.value;
  // for each passed rule
  for (let i = 0; i < props.validations.length; i++) {
    const currentRule = props.validations[i];
    const currentRuleHandler = props.onBlurValidationsFactory[currentRule].handler;
    const isInputValueValid = currentRuleHandler(inputValue);
    if (!isInputValueValid) {
      const messageGenerator = props.onBlurValidationsFactory[currentRule].message;
      const messageText = messageGenerator(props.label);
      emit('ValidationFailed', messageText);
      isAnyError.value = true;
      return;
    }
  }
  isAnyError.value = false;
  emit('ValidationPassed');
}
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
