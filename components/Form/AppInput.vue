<template>
  <fieldset class="ciel-input-group">
    <!-- input -->
    <input
      v-if="['text','tel','email'].includes(props.type)"
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
      :name="props.label"
      :id="props.label"
    />
    <!-- textarea -->
    <textarea v-else-if="props.type === 'textarea'"
    @blur="handleOnBlurValidation"
    v-model="inputValue"
    class="peer"
    :placeholder="props.placeholder"
    :class="{
        'ring-red-300': errorMessage,
        'ring-sky-300': errorMessage === null,
      }"
      :name="props.label"
      :id="props.label"
    ></textarea>
    <!-- checkbox -->
    <div
      v-else-if="props.type === 'checkbox'"
      class="w-8 h-8 focus-within:ring-2 ring-sky-300 border-4 rounded-lg flex items-center justify-center z-[2] relative overflow-hidden"
      type="checkbox"
    >
      <input 
        type="checkbox" 
        class="peer w-full h-full opacity-0 z-[3] cursor-pointer" 
        :name="props.label"
        :id="props.label"
        
        />
      <BootstrapIcon 
        class="scale-0 peer-checked:scale-100 absolute transition z-[1] text-4xl text-blue-500"
        name="check-square-fill" 
        
      />
    </div>
    <!-- label -->
    <label
    class="peer-focus:text-sky-300 peer-focus:-translate-y-6"
    v-if="props.label" :for="props.label"
      >{{ props.label }}
        <i class="asterisk" v-if="props.validations?.includes('required')">*</i>
      </label
    >
    <!-- texts -->
    <div class="texts">
      <!-- info -->
      <small class="info" v-if="props.info">{{ props.info }}</small>
      <!-- error -->
      <small class="error">
        {{ errorMessage }}</small
      >
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
// imports
import { PropType, ref, Ref } from "vue";

// types
type InputTypes = "text" | "email" | "tel" | "textarea" | "checkbox";
type ValidationRule =
  | "email"
  | "required"
  | "mobile"
  | "integer"
  | "float"
  | "number";

// models
const inputValue = defineModel<string>();

// refs
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
  "tel": {
    watcher: (inputValue: string) => {
      const pattern: RegExp = /\D/g;
      return inputValue.replace(pattern, "");
    }
  }
}


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
});

// functions
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

}



</script>

<style lang="postcss" scoped>
fieldset.ciel-input-group {
  @apply flex flex-col relative gap-y-2 m-4 mb-0;

  input {
    @apply px-4 py-2 rounded-lg bg-gray-100 transition;
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

  label {
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
