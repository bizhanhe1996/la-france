<template>
  <header>
    <nav>
      <ul class="flex gap-3 bg-black text-white p-3 align-center justify-center font-bold">
        <li v-for="(topMenuLink, index) in topMenuLinks" :key="index">
          <NuxtLink :to="topMenuLink.to">{{ topMenuLink.innerHtml }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>

type TopMenuLink = {
  to: string;
  innerHtml: string;
};

const topMenuLinks: TopMenuLink[] = ref([
  {
    to: "/",
    innerHtml: "Home"
  },
  {
    to: "/projects",
    innerHtml: "Projects"
  },
  {
    to: "/solutions",
    innerHtml: "Solutions"
  },
  {
    to: "/contact-us",
    innerHtml: "Contact Us"
  },
  {
    to: "/about-us",
    innerHtml: "About Us"
  }
]);

</script>

<style>

</style>