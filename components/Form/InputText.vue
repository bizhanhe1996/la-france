<template>
  <fieldset class="flex flex-col relative gap-y-2 m-4 mb-0">
    <!-- input -->
    <input
      @blur="handleValidation"
      v-model="inputValue"
      :type="props.type"
      class="peer focus:outline-none px-4 py-2 rounded-lg bg-gray-100 focus:ring-4 ring-sky-300 transition ease"
      :class="{
        'border-red-300 ring-red-300 ring-4': errorMessage,
        'ring-sky-300': errorMessage === null,
      }"
      :placeholder="props.placeholder"
      :name="props.label"
      :id="props.label"
    />
    <!-- label -->
    <label
      v-if="props.label"
      class="left-4 px-2 bg-gray-100 rounded-md rounded-b-none peer-focus:text-sky-300 peer-focus:translate-y-0 peer-focus:-top-6 absolute -translate-y-1/2 text-gray-400"
      :for="props.label"
      >{{ props.label }} <i class="text-red-500" v-if="props.validations.includes('required')" >*</i></label
    >
    <div class="flex gap-2">
      <!-- info -->
      <small v-if="props.info" class="text-slate-500 italic">{{
        props.info
      }}</small>
      <!-- error -->
      <small
        :class="{
          'text-red-500': true,
          'animate-fade-in': errorMessage,
          'animate-fade-out': fadeOutFlag,
        }"
      >
        {{ errorMessage }}</small
      >
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
// imports
import { PropType, ref, Ref } from "vue";

// types
type InputTypes = "text" | "email" | "tel" | "number" | "url" | "password";
type ValidationRule = "email" | "required" | "mobile" | "integer" | "float" | "number";

// models
const inputValue = defineModel();

// refs
const errorMessage: Ref = ref(null);
const fadeOutFlag: Ref = ref(null);

// factories
const validationsFactory: object = {
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
    handler:(value): boolean => {
      const pattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return pattern.test(value);
    },
    message: (label): string => { // dont remove label, for consistency
      return `This is not a valid email.`;
    }
  },
  mobile: {
    handler:(value): boolean => {
      const pattern: RegExp = /^\d{11}$/;
      return pattern.test(value);
    },
    message: (label): string => {
      // dont remove label, for consistency
      return `This is not a valid mobile.`;
    }
  }
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
});

// functions
const handleValidation = (): void => {
  // if has any validation
  const hasAnyValidation: boolean = props.validations.length > 0;
  if (hasAnyValidation) {
    // for passed each rule
    for (const rule of props.validations) {
      const handler = validationsFactory[rule].handler;
      const passThisRule = handler(inputValue.value);
      if (passThisRule === false) {
        const messageGenerator = validationsFactory[rule].message;
        const messageText = messageGenerator(props.label);
        errorMessage.value = messageText;
        fadeOutFlag.value = false;
        return;
      }
    }
  }
  fadeOutFlag.value = true;
  setTimeout(() => {
    errorMessage.value = null;
  }, 1000);
  
};
</script>

<style scoped>
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
