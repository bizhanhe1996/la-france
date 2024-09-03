<template>
  <div
    class="accordion bg-gray-100"
    
  >
    <details
      v-for="(item, index) in items"
      :key="`accordion-item-${index}`"
      @click.prevent="handleAccordionClick"
    >
      <summary>
        <span>{{ item.title }}</span>
        <small>{{ item.subTitle }}</small>
      </summary>
      <p v-if="item.text">{{ item.text }}</p>
      <ul v-else-if="item.subItems">
        <li
          v-for="(subItem, subItemIndex) in item.subItems"
          :key="`item-${index}-subItem-${subItemIndex}`"
        >
          <span>{{ subItem.title }}</span>
          <p>{{ subItem.text }}</p>
        </li>
      </ul>
    </details>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  shadow: {
    type: String,
    required: false,
    default: "gray",
  },
});

const { items, shadow } = props;

// functions
const handleAccordionClick = (event) => {
  document
    .querySelectorAll(".accordion details")
    .forEach((detailsTag) => detailsTag.removeAttribute("open"));
  event.currentTarget.setAttribute("open", "");
};
</script>

<style lang="postcss">
div.accordion {
  @apply text-start w-full absolute p-4 rounded-md;
  details {
    @apply mb-4 last:my-0;
    summary {
      @apply cursor-pointer flex select-none mb-2;
      &::before {
        content: "▼";
        @apply text-yellow-500 cursor-pointer float-start me-2;
      }
      & {
        &[open]::before {
          content: "▼";
          @apply rotate-180;
        }
      }
      span {
        @apply hover:text-yellow-500 font-bold transition-colors;
      }
      small {
        @apply italic text-gray-500 ms-auto;
      }
    }
    & > p {
      @apply text-slate-500 text-justify ms-4;
    }
    ul {
      @apply ms-4;
      li {
        @apply my-2;
        span {
          @apply text-slate-500 float-start font-bold;
          &::after {
            content: ":";
            display: inline;
          }
        }
        p {
          @apply text-slate-500 text-justify;
        }
      }
    }
  }
}
</style>
