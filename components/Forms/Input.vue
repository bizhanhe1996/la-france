<template>
  <fieldset class="ciel-input-group">
    <!-- simple input -->
    <input
      v-if="['text', 'tel', 'email'].includes(props.type)"
      @blur="handleOnBlurValidation"
      @input="handleOnInputValidation"
      v-model="inputValue"
      :type="props.type"
      class="peer"
      :class="{
        'ring-red-300': errorMessage,
        'ring-sky-300': errorMessage === null,
      }"
      :placeholder="props.placeholder"
      :name="props.name"
      :id="props.label"
    />
    <!-- textarea -->
    <textarea
      v-else-if="props.type === 'textarea'"
      @blur="handleOnBlurValidation"
      v-model="inputValue"
      class="peer"
      :placeholder="props.placeholder"
      :class="{
        'ring-red-300': errorMessage,
        'ring-sky-300': errorMessage === null,
      }"
      :name="props.name"
      :id="props.label"
    ></textarea>
    <!-- checkbox -->
    <div class="checkbox-container" v-else-if="props.type === 'checkbox'">
      <div>
        <input
          type="checkbox"
          class="peer"
          :name="props.name"
          :id="props.label"
        />
        <BootstrapIcon
          class="peer-checked:scale-100 scale-0 absolute transition z-[1] text-4xl text-blue-500"
          name="check-square-fill"
        />
      </div>
      <label v-if="props.label" :for="props.label">{{ props.label }}</label>
    </div>
    <!-- switch -->
    <div class="switch-container" v-else-if="props.type === 'switch'">
      <div :class="{ 'bg-blue-500': switchStatus }">
        <input
          class="peer"
          :id="props.label"
          type="checkbox"
          @change="toggleSwitchStatus"
        />
        <b class="peer-checked:translate-x-4"></b>
      </div>
      <label :for="props.label">{{ props.label }}</label>
    </div>
    <!-- radio -->
    <div class="radio-container" v-else-if="props.type === 'radio'">
      <fieldset>
        <i :class="{ 'bg-blue-500': radioInput }"></i>
        <input
          ref="radioInput"
          :name="props.name"
          :id="props.label"
          :value="props.value"
          @change="handleRadioChange"
          type="radio"
        />
      </fieldset>
      <label class="ms-2" :for="props.name">
        {{ props.label }}
      </label>
    </div>
    <FormsSelect v-if="props.type === 'select'" :options="props.options" />
    <FormsTags v-if="props.type === 'tags'" :tags="props.tags" />
    <!-- label -->
    <label
      v-if="shouldRenderSimpleLabel"
      class="simple-label peer-focus-within:text-sky-300 peer-focus-within:-translate-y-6 peer-focus:text-sky-300 peer-focus:-translate-y-6"
    >
      <span>{{ props.label }}</span>
      <i v-if="props.validations?.includes('required')" class="asterisk">*</i>
    </label>
    <!-- texts -->
    <div class="texts">
      <!-- info -->
      <small class="info" v-if="props.info">{{ props.info }}</small>
      <!-- error -->
      <small class="error"> {{ errorMessage }}</small>
      <!-- switch status -->
      <small
        v-if="props.type == 'switch'"
        :class="{
          'text-blue-500': switchStatus,
          'text-gray-500': !switchStatus,
        }"
        >{{ switchStatus ? "On" : "Off" }}</small
      >
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
// imports
import { computed, ComputedRef, PropType, ref, Ref } from "vue";
import { InputType } from "./../../types/components/forms/InputType";
import { ValidationRule } from "./../../types/components/forms/ValidationRule";
import { TagType } from "./../../types/components/forms/TagType";

// models
const inputValue = defineModel<string>();

// refs
const errorMessage: Ref = ref(null);
const fadeOutFlag: Ref = ref(null);

// non-ref variables
const inputTypesWithSimpleLabel: InputType[] = [
  "text",
  "email",
  "tel",
  "select",
  "tags",
];

// props
const props = defineProps({
  label: {
    type: String,
    required: false,
    default: null,
  },
  type: {
    type: String as PropType<InputType>,
    required: false,
    default: "text",
  },
  placeholder: {
    type: String as PropType<string>,
    required: false,
    default: "",
  },
  info: {
    type: String as PropType<string>,
    required: false,
    default: null,
  },
  error: {
    type: String as PropType<string>,
    required: false,
    default: null,
  },
  validations: {
    type: Array as PropType<ValidationRule[]>,
    required: false,
    default: null,
  },
  name: {
    type: String as PropType<string>,
    required: false,
  },
  value: {
    type: String as PropType<string>,
    required: false,
  },
  options: {
    type: Array,
    required: false,
    default: [],
  },
  tags: {
    type: Array as PropType<TagType[]>,
    required: false,
    default: [],
  },
});

// validation
const onBlurValidationsFactory: object = {
  required: {
    handler: (value): boolean => {
      const invalidValues = ["", null, undefined];
      if (invalidValues.includes(value)) {
        return false;
      }
      return true;
    },
    message: (label): string => {
      return `${label} is required.`;
    },
  },
  email: {
    handler: (value): boolean => {
      const pattern: RegExp =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return pattern.test(value);
    },
    message: (label): string => {
      // dont remove label, for consistency
      return `This is not a valid email.`;
    },
  },
  mobile: {
    handler: (value): boolean => {
      const pattern: RegExp = /^\d{11}$/;
      return pattern.test(value);
    },
    message: (label): string => {
      // dont remove label, for consistency
      return `Ce n'est pas un numéro de portable.`;
    },
  },
};

const onInputValidationFactory: object = {
  tel: {
    watcher: (inputValue: string) => {
      const pattern: RegExp = /\D/g;
      return inputValue.replace(pattern, "");
    },
  },
};

const handleOnBlurValidation = (): void => {
  // if has any validation
  const hasAnyValidation: boolean = props.validations.length > 0;
  if (hasAnyValidation) {
    // for passed each rule
    for (const rule of props.validations) {
      const handler = onBlurValidationsFactory[rule].handler;
      const passThisRule = handler(inputValue.value);
      if (passThisRule === false) {
        const messageGenerator = onBlurValidationsFactory[rule].message;
        const messageText = messageGenerator(props.label);
        errorMessage.value = messageText;
        fadeOutFlag.value = false;
        return;
      }
    }
  }
  fadeOutFlag.value = true;
  errorMessage.value = null;
};

const handleOnInputValidation = (): void => {
  if (props.type in onInputValidationFactory) {
    const watcher = onInputValidationFactory[props.type].watcher;
    inputValue.value = watcher(inputValue.value);
  }
};

// radio
const radioInput = ref(null);
const handleRadioChange = (event: Event) => {};

// switch
const switchStatus: Ref = ref(false);
const toggleSwitchStatus = () => {
  switchStatus.value = !switchStatus.value;
};

const shouldRenderSimpleLabel: ComputedRef = computed(() => {
  return props.label && inputTypesWithSimpleLabel.includes(props.type);
});
</script>

<style lang="postcss">
fieldset.ciel-input-group {
  @apply flex flex-col relative gap-y-2 m-4 mb-0;

  input {
    @apply px-4 py-2 rounded-lg bg-gray-100 transition w-full;
    &:focus {
      @apply ring-2 outline-none;
    }
  }

  textarea {
    @apply px-4 py-2 rounded-lg bg-gray-100 transition min-h-40;
    &:focus {
      @apply ring-2 outline-none;
    }
  }

  div.checkbox-container {
    @apply flex gap-2 items-center;
    div {
      @apply w-8 h-8 focus-within:ring-2 ring-sky-300 border-4 rounded-lg flex items-center justify-center z-[2] relative overflow-hidden;
      input {
        @apply w-full h-full opacity-0 z-[3] cursor-pointer;
      }
    }
    label {
      @apply text-gray-400;
    }
  }

  div.switch-container {
    @apply flex-nowrap inline-flex w-min gap-2 items-center;
    div {
      @apply flex transition-colors border-4 focus-within:ring-sky-300 focus-within:ring-2 relative items-center h-6 w-10 rounded-3xl p-1 cursor-pointer;
      input {
        @apply opacity-0 absolute w-full cursor-pointer;
      }
      b {
        @apply transition-all h-2 inline-block w-2 rounded-full bg-gray-200 cursor-pointer;
      }
    }
    label {
      @apply text-gray-400;
    }
  }

  div.radio-container {
    @apply flex relative cursor-pointer;
    fieldset {
      @apply w-6 h-6 border-4 rounded-full focus-within:ring-2 transition-all ring-sky-300;
      i {
        @apply w-4 h-4 rounded-full absolute border-2 transition-all;
      }
      input {
        @apply absolute top-0 left-0 w-full h-full cursor-pointer opacity-0;
      }
    }
    label {
      @apply text-gray-400;
    }
  }

  label.simple-label {
    @apply left-4 px-2 bg-gray-100 rounded-md rounded-b-none absolute -translate-y-4 text-gray-400 transition-all duration-1000;
    i.asterisk {
      @apply text-red-500;
    }
  }

  div.texts {
    @apply flex gap-2;
    small.info {
      @apply text-slate-500 italic;
    }
    small.error {
      @apply text-red-500;
    }
  }
}
</style>
