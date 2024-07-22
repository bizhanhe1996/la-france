<template>
  <fieldset class="flex flex-col relative gap-y-2 m-4 mb-0">
    <input
     @blur="handleValidation"
      :type="props.type"
      class="peer focus:outline-none px-4 py-2 rounded-lg bg-gray-100 focus:ring-4 ring-sky-300 transition ease"
      :placeholder="props.placeholder"
      name="name"
      id="name"
    />
    <label
      v-if="props.label"
      class="peer-focus:translate-x-0 peer-focus:text-sky-300 peer-focus:translate-y-0 peer-focus:-top-8 absolute translate-x-4 -translate-y-1/2 text-gray-400 active:text-blue-500"
      for="name"
      >{{ props.label }}</label
    >
    <div class="flex gap-2">
      <small v-if="props.info" class="text-slate-500 italic">{{
        props.info
      }}</small>
      <small v-if="props.error" class="text-red-500">{{ props.error }}</small>
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
// imports
import { PropType } from "vue";

// types
type InputTypes = "text" | "email" | "tel" | "number" | "url" | "password";
type ValidationRule = "email"|"required"|"phone"|"integer"|"float";
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
const handleValidation = () => {
    if (props.validations.length) {
        // for each rule
        
    }
}


</script>
