<template>
  <div>
    <!-- slider -->
    <HomeSlider :slides="homePageSlides.data.value" :renderBullets="true" />
    <!-- four feature -->
    <Row class="grid grid-cols-2 md:grid-cols-4 m-4">
      <Column
        v-for="(iconBox, index) in iconBoxes.data.value"
        :key="'icon-box-' + index"
        class="col-span-1"\
        data-animation="zoom-in"
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
    <!-- two column row -->
    <section class="bg-gray-200">
      <h3 class="p-10 text-3xl text-center drop-shadow-xl">
        <HomeTypingText
          text="La VIE commence avec ton sourire :)"
          class="text-orange-500 font-bold"
        />
      </h3>
      <Row class="grid sm:grid-cols-1 md:grid-cols-2 pb-8 gap-y-8">
        <Column class="col-span-1 flex">
          <img
            class="w-3/5 rounded-full m-auto"
            src="/images/home/linux-laptop.webp"
            alt="laptop"
          />
        </Column>
        <Column class="col-span-1 flex">
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
    <div class="bg-gray-200">
      <section
        class="p-4 bg-cover bg-center bg-no-repeat clip-bottom-ellipse"
        id="home-latest-projects"
      >
        <h2 class="text-center text-3xl font-bold p-4 text-white">
          Ce Sont Nos Le Plus Nouveax Projets.
        </h2>
        <div class="flex justify-center p-4">
          <div class="grid grid-flow-row grid-cols-3 gap-4 max-w-fit">
            <div
              class="relative overflow-hidden rounded-lg cursor-pointer flex items-center justify-center"
              v-for="(projectImage, num) in projectImages.data.value"
              :key="`project-${num}`"
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
        <p class="text-center text-white text-xl py-4">
          <BootstrapIcon class="pr-4" name="arrow-right" />Regarde tous les
          projets
          <NuxtLink class="font-bold text-cyan-500" to="/projects">ICI</NuxtLink
          >.
        </p>
      </section>
    </div>
    <!-- france map and eiffel -->
    <div
      class="bg-no-repeat bg-center bg-cover bg-fixed clip-path-a"
      id="eiffel-background"
    >
      <!-- france map row -->
      <Row
        class="grid grid-cols-1 lg:grid-cols-2 bg-gray-200 gap-8 py-8 clip-path-a z-10 relative"
      >
        <Column class="col-span-1">
          <div class="w-2/3 m-auto" data-animation="from-right">
            <h1 class="text-4xl mb-4 leading-relaxed text-center">
              Le <span class="text-blue-700">FRA</span
              ><span class="text-white">NÇA</span
              ><span class="text-red-700">ISE</span> est une belle launge.
            </h1>
            <p class="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ut
              rem, doloremque eveniet expedita at harum ipsa optio asperiores?
              Quaerat, mollitia similique sapiente quis repellat blanditiis
              doloremque facilis debitis sed nesciunt quos quo eius, aliquam,
              voluptate veniam dolorem rem quas.
            </p>
          </div>
        </Column>
        <Column class="col-span-1 flex justify-center items-center">
          <img
            class="w-2/3 lg:w-1/3 drop-shadow sm:mb-8"
            data-animation="from-left"
            src="/public/france.svg"
            alt="France"
          />
        </Column>
      </Row>
      <!-- eiffel row -->
      <section class="py-8">
        <div id="eiffel-overlay"></div>
        <div class="relative z-1 drop-shadow-lg">
          <div class="text-center text-3xl text-white mb-6 animation-delay-16" data-animation="fade-in">
            Parce que vous êtes INTELLIGENTS!
          </div>
          <Row class="grid grid-cols-2 md:grid-cols-4 py-4 gap-y-8">
            <Column class="col-span-1">
              <HomeCounter :count="150" subtitle="Etudiants" color="white" data-animation="zoom-in" />
            </Column>
            <Column class="col-span-1">
              <HomeCounter :count="200" subtitle="Universites" color="white" data-animation="zoom-in" />
            </Column>
            <Column class="col-span-1">
              <HomeCounter :count="170" subtitle="Villes" color="white" data-animation="zoom-in" />
            </Column>
            <Column class="col-span-1">
              <HomeCounter :count="300" subtitle="Lycees" color="white" data-animation="zoom-in" />
            </Column>
          </Row>
        </div>
      </section>
    </div>
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

const projectImages = await useAsyncData("projectImages", async () => {
  return await $fetch("/api/public/home/projects");
});

</script>

<style>
#home-latest-projects {
  background-image: url(/images/home/color-gradient.jpg);
}

.clip-bottom-ellipse {
  clip-path: ellipse(180% 100% at center top);
}

#eiffel-background {
  background-image: url(/public/public/eiffel.jpg);
  position: relative;
}

#eiffel-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
}

.clip-path-a {
  @media screen and (max-width: 767px) {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 95%, 0% 100%, 0% 0%);
  }
  @media screen and (min-width: 768px) {
    clip-path: none;
  }
}
</style>
