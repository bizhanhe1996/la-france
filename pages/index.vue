<template>
  <div>
    <!-- slider -->
    <HomeSlider :slides="homePageSlides.data.value" :renderBullets="true" />
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
    <div class="h-32 w-full clip-path-top"></div>
    <section class="bg-gray-200">
      <h3 class="p-10 text-3xl text-center drop-shadow-xl">
        <HomeTypingText
          text="La VIE commence avec ton sourire :)"
          class="text-orange-500 font-bold"
        />
      </h3>
      <Row class="grid sm:grid-cols-1 md:grid-cols-2 overflow-hidden">
        <Column class="col-span-1">
          <img
            class="w-2/3 m-auto rounded-lg lg:shadow-2xl   aspect-auto"
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
    <div class="h-32 w-full clip-path-bottom"></div>
    <!-- latest Projects -->
    <section
      class="p-4 bg-cover bg-center bg-no-repeat"
      id="home-latest-projects"
    >
      <h2 class="text-center text-3xl font-bold p-4 text-white">
        C'est Sont Nos Le Plus Nouveax Projets.
      </h2>
      <div class="flex justify-center p-4">
        <div class="grid grid-flow-row grid-cols-3 gap-4 max-w-fit">
          <div
            class="relative overflow-hidden rounded-lg cursor-pointer flex items-center justify-center"
            v-for="projectImage in projectImages"
            :key="'project-' + num"
          >
            <img
              class="hover:scale-125 hover:rotate-12 hover:blur-sm m-auto select-none hover:sepia transition-all"
              :src="projectImage.path"
              :alt="projectImage.alt"
            />
            <p
              class="select-none break-words absolute text-white text-center text-2xl bg-gray-600 w-full bg-opacity-30 p-1"
            >
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

const homePageSlides = await useAsyncData("homePageSlides", async () => {
  return await $fetch("/api/public/home/slides");
});


const iconBoxes = await useAsyncData("iconBoxes", async () => {
  return await $fetch("/api/public/home/icon-boxes");
});

const homeFeatureIcons = await useAsyncData("homeFeatureIcons", async () => {
  return await $fetch("/api/public/home/features");
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
    alt: "Le Pont"
  }
];
</script>

<style>

section#home-latest-projects {
  background-image: url(/images/home/color-gradient.jpg);
}

.clip-path-top {  
  clip-path: path('M0,0L80,16.3C160,33,320,65,480,84C640,103,800,107,960,109.7C1120,112,1280,112,1440,98C1600,84,1760,56,1920,49C2080,42,2240,56,2400,63C2560,70,2720,70,2880,58.3C3040,47,3200,23,3360,16.3C3520,9,3680,19,3840,23.3C4000,28,4160,28,4320,35C4480,42,4640,56,4800,56C4960,56,5120,42,5280,42C5440,42,5600,56,5760,65.3C5920,75,6080,79,6240,81.7C6400,84,6560,84,6720,88.7C6880,93,7040,103,7200,88.7C7360,75,7520,37,7680,39.7C7840,42,8000,84,8160,105C8320,126,8480,126,8640,126C8800,126,8960,126,9120,114.3C9280,103,9440,79,9600,58.3C9760,37,9920,19,10080,21C10240,23,10400,47,10560,51.3C10720,56,10880,42,11040,37.3C11200,33,11360,37,11440,39.7L11520,42L11520,140L11440,140C11360,140,11200,140,11040,140C10880,140,10720,140,10560,140C10400,140,10240,140,10080,140C9920,140,9760,140,9600,140C9440,140,9280,140,9120,140C8960,140,8800,140,8640,140C8480,140,8320,140,8160,140C8000,140,7840,140,7680,140C7520,140,7360,140,7200,140C7040,140,6880,140,6720,140C6560,140,6400,140,6240,140C6080,140,5920,140,5760,140C5600,140,5440,140,5280,140C5120,140,4960,140,4800,140C4640,140,4480,140,4320,140C4160,140,4000,140,3840,140C3680,140,3520,140,3360,140C3200,140,3040,140,2880,140C2720,140,2560,140,2400,140C2240,140,2080,140,1920,140C1760,140,1600,140,1440,140C1280,140,1120,140,960,140C800,140,640,140,480,140C320,140,160,140,80,140L0,140Z');
  background: linear-gradient(#ffb555, #e5e7eb);
}

.clip-path-bottom {
  clip-path: path("M0,56L80,46.7C160,37,320,19,480,30.3C640,42,800,84,960,100.3C1120,117,1280,107,1440,98C1600,89,1760,79,1920,72.3C2080,65,2240,61,2400,49C2560,37,2720,19,2880,21C3040,23,3200,47,3360,46.7C3520,47,3680,23,3840,21C4000,19,4160,37,4320,37.3C4480,37,4640,19,4800,21C4960,23,5120,47,5280,63C5440,79,5600,89,5760,79.3C5920,70,6080,42,6240,39.7C6400,37,6560,61,6720,79.3C6880,98,7040,112,7200,105C7360,98,7520,70,7680,58.3C7840,47,8000,51,8160,49C8320,47,8480,37,8640,44.3C8800,51,8960,75,9120,77C9280,79,9440,61,9600,46.7C9760,33,9920,23,10080,21C10240,19,10400,23,10560,28C10720,33,10880,37,11040,39.7C11200,42,11360,42,11440,42L11520,42L11520,140L11440,140C11360,140,11200,140,11040,140C10880,140,10720,140,10560,140C10400,140,10240,140,10080,140C9920,140,9760,140,9600,140C9440,140,9280,140,9120,140C8960,140,8800,140,8640,140C8480,140,8320,140,8160,140C8000,140,7840,140,7680,140C7520,140,7360,140,7200,140C7040,140,6880,140,6720,140C6560,140,6400,140,6240,140C6080,140,5920,140,5760,140C5600,140,5440,140,5280,140C5120,140,4960,140,4800,140C4640,140,4480,140,4320,140C4160,140,4000,140,3840,140C3680,140,3520,140,3360,140C3200,140,3040,140,2880,140C2720,140,2560,140,2400,140C2240,140,2080,140,1920,140C1760,140,1600,140,1440,140C1280,140,1120,140,960,140C800,140,640,140,480,140C320,140,160,140,80,140L0,140Z");
  background: linear-gradient(#ffb555,#e5e7eb);
  
  transform: rotate(180deg);
}
</style>
