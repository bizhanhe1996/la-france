<template>
  <div>
    <!-- slider -->
    <HomeSlider />
    <!-- four feature -->
    <Row class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-4">
      <Column
        v-for="(iconBox, index) in iconBoxes.data.value"
        :key="'icon-box-' + index"
        class="col-span-1"
      >
        <HomeCategoryIcon
          :icon="iconBox.icon"
          :color="iconBox.color"
          :link="iconBox.link"
          :title="iconBox.title"
          :text="iconBox.text"
        />
      </Column>
    </Row>
    <!-- 2 col row -->
    <section class="bg-gray-200 clip-path">
      <h3 class="p-10 text-3xl text-center drop-shadow-xl">
        <HomeTypingText
          text="La VIE commence avec ton sourire :)"
          class="text-orange-500 font-bold"
        />
      </h3>
      <Row class="grid sm:grid-cols-1 md:grid-cols-2 overflow-hidden">
        <Column class="col-span-1">
          <img
            class="w-2/3 m-auto lg:rounded-t-3xl lg:shadow-2xl lg:shadow-red-500 aspect-auto"
            src="/images/home/linux-laptop.webp"
            id="home-linux-laptop"
            alt="laptop"
          />
        </Column>
        <Column class="col-span-1 p-8">
          <ul class="list-none space-y-6 max-w-fit m-auto">
            <li
              v-for="homeFeatureIcon in homeFeatureIcons.data.value"
              :key="`home-feature-icon-${1}`"
            >
              <HomeFeatureIcon
                :icon="homeFeatureIcon.icon"
                :rotate="homeFeatureIcon.rotate"
                :color="homeFeatureIcon.color"
                :title="homeFeatureIcon.title"
                :text="homeFeatureIcon.text"
              />
            </li>
          </ul>
        </Column>
      </Row>
    </section>
    <!-- latest Projects -->
    <section class="p-4 bg-cover bg-center bg-no-repeat" id="home-latest-projects">
      <h2 class="text-center text-3xl font-bold p-4 text-white">
        C'est Sont Nos Le Plus Nouveax Projets.
      </h2>
      <div class="flex justify-center p-4">
        <div class="grid grid-flow-row grid-cols-3 gap-4 max-w-fit">
          <div class="relative overflow-hidden rounded-lg cursor-pointer flex items-center justify-center" v-for="projectImage in projectImages" :key="'project-' + num">
            <img
              class="hover:scale-125 hover:rotate-12 hover:blur-sm m-auto select-none hover:sepia transition-all"
              :src="projectImage.path"
              :alt="projectImage.alt"
            />
            <p class="select-none break-words absolute text-white text-center text-2xl bg-gray-600 w-full bg-opacity-30 p-1">
              {{ projectImage.alt }}
            </p>
          </div>
        </div>
      </div>
      <p></p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { HomeFeatureIconType } from "~/types/HomeFeatureIcon";
import type { IconBoxDetail } from "~/types/IconBoxDetails";

const iconBoxes = await useAsyncData("iconBoxes", async () => {
  const response: IconBoxDetail[] = await $fetch("/api/public/home/icon-boxes");
  return response;
});

const homeFeatureIcons = await useAsyncData("homeFeatureIcons", async () => {
  const response: HomeFeatureIconType[] = await $fetch(
    "/api/public/home/features"
  );
  return response;
});

const projectImages = [
  {
    path: "/images/home/projects/project-1.jpg",
    alt: "Une Femme",
  },
  {
    path: "/images/home/projects/project-2.jpg",
    alt: "Le Cafe",
  },
  {
    path: "/images/home/projects/project-3.jpg",
    alt: "Ma Ville",
  },
  {
    path: "/images/home/projects/project-4.jpg",
    alt: "Project 4",
  },
  {
    path: "/images/home/projects/project-5.jpg",
    alt: "Vert",
  },
  {
    path: "/images/home/projects/project-6.jpg",
    alt: "L'arbre",
  },
  {
    path: "/images/home/projects/project-7.jpg",
    alt: "Project 7",
  },
  {
    path: "/images/home/projects/project-8.jpg",
    alt: "Project 8",
  },
  {
    path: "/images/home/projects/project-9.jpg",
    alt: "Le Pont",
  },
];
</script>

<style>
section#home-latest-projects {
  background-image: url(/images/home/color-gradient.jpg);
}
</style>
