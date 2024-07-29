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

    <!-- select -->
    <div class="select-container" v-else-if="props.type === 'select'">
      <div class="peer select-input">
        <input
          class="focus:ring-sky-300"
          v-model="selectInputModel"
          @input="handleSelectSearch"
          @keydown="handleSelectEscape"
        />
      </div>
      <ul
        class="hidden rounded-b-lg w-full border-2 border-t-0 border-sky-300 select-list bg-gray-100 absolute peer-focus-within:!flex flex-col overflow-hidden"
      >
        <li
          
          v-for="(option, index) in printableOptions"
          @mousedown="()=>selectInputModel = option.value"
          :key="`option-${index}`"
          class="cursor-pointer flex gap-4 items-center border-b-2 ps-4 hover:bg-blue-100"
          :data-value="option.value"
        >
          <BootstrapIcon v-if="'icon' in option" :name="option.icon" />
          <div class="flex flex-col">
            <span class="text-gray-700 text-sm">
              {{ option.label }}
            </span>
            <p class="text-gray-400 text-xs" v-if="'description' in option">
              {{ option.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- simple label -->
    <label
      class="simple-label peer-focus:text-sky-300 peer-focus:-translate-y-6"
      v-if="props.label && ['text', 'email', 'tel'].includes(props.type)"
      :for="props.label"
      >{{ props.label }}
      <i class="asterisk" v-if="props.validations?.includes('required')">*</i>
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
import { PropType, ref, Ref } from "vue";

// types
type InputTypes =
  | "text"
  | "email"
  | "tel"
  | "textarea"
  | "checkbox"
  | "switch"
  | "radio"
  | "select";
type ValidationRule = "email" | "required" | "mobile";

// models
const inputValue = defineModel<string>();

// refs
const radioInput = ref(null);
const switchStatus: Ref = ref(false);
const errorMessage: Ref = ref(null);
const fadeOutFlag: Ref = ref(null);

// factories
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

// props
const props = defineProps({
  label: {
    type: String,
    required: false,
    default: null,
  },
  type: {
    type: String as PropType<InputTypes>,
    required: false,
    default: "text",
  },
  placeholder: {
    type: String,
    required: false,
    default: "",
  },
  info: {
    type: String,
    required: false,
    default: null,
  },
  error: {
    type: String,
    required: false,
    default: null,
  },
  validations: {
    type: Array as PropType<Array<ValidationRule>>,
    required: false,
    default: null,
  },
  name: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    required: false,
  },
  options: {
    type: Array,
    required: false,
    default: [],
  },
});

// models

const selectInputModel = ref();

// functions
const handleSelectSearch = (event) => {
  props.options.forEach((option: any) => {
    option.display = ["label", "description"].some((property) =>
      option[property].toLowerCase().includes(event.target.value)
    );
  });
  printableOptions.value = props.options.filter(
    (option: any) => option.display
  );
};

const handleSelectEscape = (event) => {
  if (event.key === "Escape") {
    event.target.blur();
  }
};

const handleRadioChange = (event: Event) => {};

const toggleSwitchStatus = () => {
  switchStatus.value = !switchStatus.value;
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

const printableOptions = ref(props.options);
</script>

<style lang="postcss" scoped>
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

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animate-fade-in {
  animation: fade-in 1s ease;
  animation-fill-mode: forwards;
}

.animate-fade-out {
  animation: fade-out 1s ease;
  animation-fill-mode: forwards;
}
</style>
