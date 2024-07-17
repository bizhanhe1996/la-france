<template>
  <!-- small screens toggler -->
  <div
    class="md:hidden text-white text-2xl absolute z-[3] m-2 p-2 cursor-pointer rounded-full inline-flex !aspect-square"
    @click="toggleMobileMenu"
  >
    <BootstrapIcon :name="isMenuOpened ? 'x-lg' : 'list'" />
  </div>
  <!-- menu -->
  <header
    :class="`sm:absolute md:static z-[2] w-full overflow-hidden`"
    :style="{
      height: isMenuOpened ? 'fit-content' : 0,
      background: backgroundColor
    }"
  >
    <nav>
      <ul
        class="gap-3 flex sm:flex-col md:flex-row text-white p-3 items-center justify-center font-bold"
      >
        <li
          class="select-none"
          v-for="(topMenuLink, index) in topMenuLinks"
          :key="index"
        >
          <NuxtLink class="app-header-link" :to="topMenuLink.to">{{
            topMenuLink.innerHtml
          }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>

// props
const props = defineProps({
  backgroundColor: {
    type: String,
    required: false,
    default: "black",
  }
});

// refs
const isMenuOpened = ref(true);


// methods
const toggleMobileMenu = () => {
  isMenuOpened.value = !isMenuOpened.value;
};

type TopMenuLink = {
  to: string;
  innerHtml: string;
};

const topMenuLinks: TopMenuLink[] = [
  {
    to: "/",
    innerHtml: "Maison",
  },
  {
    to: "/projects",
    innerHtml: "Projets",
  },
  {
    to: "/solutions",
    innerHtml: "Solutions",
  },
  {
    to: "/contact-us",
    innerHtml: "Appelle nous",
  },
  {
    to: "/about-us",
    innerHtml: "Sur nous",
  },
];

// onMounted
onMounted(() => {
  window.addEventListener("resize", () => {
    isMenuOpened.value = false;
  });
});
</script>
