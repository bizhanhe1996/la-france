<template>
  <!-- slider -->
  <section class="z-[2]">
    <HomeSlider :slides="homePageSlides.data.value" :renderBullets="true" />
  </section>
  <!-- mounments -->
  <section>
    <Row class="grid grid-cols-3">
      <Column
        v-for="(monument, index) in monuments.data.value"
        :key="'monument-box-' + index"
        :class="`col-span-1 opacity-0 animation-delay-${index} ease-out -z-[1]`"
        data-animation="from-top"
      >
        <HomeFlagPart
          :name="monument.name"
          :location="monument.location"
          :background-color="monument.backgroundColor"
          :color="monument.color"
        />
      </Column>
    </Row>
  </section>
  <!-- gallery -->
  <section>
    <h2 class="text-center text-3xl font-bold p-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit?
    </h2>
    <div class="flex justify-center p-4">
      <div class="grid grid-cols-3 gap-8 w-full">
        <HomeGalleryImage
          v-for="(image, index) in galleryImages.data.value"
          :key="`image-${index}`"
          :path="image.path"
          :alt="image.alt"
        />
      </div>
    </div>
  </section>
  <!-- france map and eiffel -->
  <section
    class="bg-no-repeat bg-center bg-cover bg-fixed clip-path-a"
    id="eiffel-background"
  >
    <!-- france map row -->
    <Row
      class="grid grid-cols-1 lg:grid-cols-2 bg-white gap-8 py-8 clip-path-a z-10 relative"
    >
      <Column class="col-span-1">
        <div class="w-2/3 m-auto" data-animation="from-right">
          <h1 class="text-4xl mb-4 leading-relaxed text-center">
            Le Française est une belle launge.
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
      <Column
        class="col-span-1 flex justify-center items-center overflow-hidden"
      >
        image here
      </Column>
    </Row>
    <!-- counters -->
    <section class="py-8">
      <div id="eiffel-overlay"></div>
      <div class="relative z-1 drop-shadow-lg">
        <div
          class="text-center text-3xl text-white mb-6 opacity-0 font-bold"
          data-animation="fade-in"
        >
          Parce que vous êtes INTELLIGENTS!
        </div>
        <Row class="grid grid-cols-2 md:grid-cols-4 py-4 gap-y-8">
          <Column
            v-for="(counter, index) in counters.data.value"
            :key="`home-counter-${index}`"
            :class="`col-span-1 animation-delay-${index + 1} opacity-0`"
            data-animation="zoom-in"
          >
            <HomeCounter
              :count="counter.count"
              :subtitle="counter.subtitle"
              :color="counter.color"
            />
          </Column>
        </Row>
      </div>
    </section>
  </section>
  <!-- people -->
  <section>
    <h2
      class="text-center text-3xl px-4 py-8 opacity-0 font-bold"
      data-animation="from-top"
    >
      Un Pays De Gens Grands
    </h2>
    <Row class="grid grid-flow-row grid-cols-3 gap-8 p-4">
      <Column
        v-for="(person, index) in famousPeople.data.value"
        :key="`famous-person-${index}`"
        :class="`sm:col-span-3 lg:col-span-1 opacity-0 animation-delay-${
          index + 2
        } ease-in`"
        data-animation="zoom-in"
      >
        <HomePersonCard
          :imageSrc="person.imageSrc"
          :imageAlt="person.imageAlt"
          :title="person.title"
          :desciption="person.description ? person.description : null"
        />
      </Column>
    </Row>
    <div class="text-center px-4 py-8">Plus ICI.</div>
  </section>
  <!-- Louvre -->
  <section class="bg-gray-100">
    <Row class="grid sm:grid-cols-1 md:grid-cols-2">
      <Column class="col-span-1 h-full opacity-0" data-animation="fade-in">
        <div
          v-for="(louvreImage, index) in louvreImages.value"
          :key="`louvre-image-${index}`"
          v-show="louvreImage.display"
          class="flex relative items-center justify-center"
        >
          <img
            class="w-full h-full"
            :src="louvreImage.src"
            :alt="louvreImage.alt"
          />
          <div
            class="absolute m-auto w-1/2 p-8 flex flex-col gap-y-4 justify-between text-center bg-black/30"
          >
            <h4 class="text-2xl text-white uppercase font-bold">
              {{ louvreImage.title }}
            </h4>
            <p class="text-white/75">{{ louvreImage.subtitle }}</p>
          </div>
        </div>
      </Column>
      <Column class="col-span-1 px-4 flex flex-col justify-around">
        <h2
          class="text-center text-3xl p-4 font-bold capitalize opacity-0"
          data-animation="fade-in"
        >
          <HomeTypingText
            text="Le Musée Du Louvre Est Le Plus Grand Musée Du Monde."
            class="text-slate-800 font-bold"
          />
        </h2>
        <Row class="lg:columns-2 sm:columns-1">
          <Column
            class="mb-4"
            v-for="(louvreFeature, index) in louvreFeatures.data.value"
            :key="`louvre-feature-${index}`"
          >
            <div
              :class="`opacity-0 animation-delay-${(index + 1) * 2}`"
              data-animation="zoom-in"
            >
              <HomeLouvreFeature
                :icon="louvreFeature.icon"
                :title="louvreFeature.title"
                :text="louvreFeature.text"
                :colorClass="louvreFeature.colorClass"
              />
            </div>
          </Column>
        </Row>
      </Column>
    </Row>
  </section>
  <!-- buttons -->
  <section class="bg-teal-700 p-16">
    <Row class="grid grid-cols-2 gap-y-16">
      <Column
        class="text-white text-center text-3xl flex sm:col-span-2 md:col-span-1"
      >
        <div class="m-auto opacity-0" data-animation="from-left">
          <p>Achetez votre billet d'avion</p>
          &nbsp;
          <span class="uppercase font-serif font-bold">maintenant!</span>
        </div>
      </Column>
      <Column
        class="flex flex-wrap justify-center gap-4 sm:col-span-2 md:col-span-1"
      >
        <AppButton
          class="opacity-0 animation-delay-1"
          data-animation="zoom-in"
          text="Cliquez"
          icon="airplane"
          theme="primary"
        />
        <AppButton
          class="opacity-0 animation-delay-2"
          data-animation="zoom-in"
          text="Cliquez"
          icon="star"
          theme="secondary"
        />
        <AppButton
          class="opacity-0 animation-delay-3"
          data-animation="zoom-in"
          text="Cliquez"
          icon="ticket"
          theme="info"
        />
        <AppButton
          class="opacity-0 animation-delay-4"
          data-animation="zoom-in"
          text="Cliquez"
          icon="bag"
          theme="warning"
        />
        <AppButton
          class="opacity-0 animation-delay-5"
          data-animation="zoom-in"
          text="Cliquez"
          icon="activity"
          theme="danger"
        />
        <AppButton
          class="opacity-0 animation-delay-6"
          data-animation="zoom-in"
          text="Cliquez"
          icon="heart-fill"
          theme="success"
        />
        <AppButton
          class="opacity-0 animation-delay-7"
          data-animation="zoom-in"
          text="Cliquez"
          icon="tools"
          theme="white"
        />
        <AppButton
          class="opacity-0 animation-delay-8"
          data-animation="zoom-in"
          text="Cliquez"
          icon="eye"
          theme="black"
        />
      </Column>
    </Row>
  </section>
</template>

<script lang="ts" setup>
// IMPORTS
import { useFetch } from "nuxt/app";
import { onMounted, reactive } from "vue";

// FETCHS
const homePageSlides = await useFetch("/api/public/home/slides");
const monuments = await useFetch("/api/public/home/monuments");
const homeFeatureIcons = await useFetch("/api/public/home/features");
const galleryImages = await useFetch("/api/public/home/gallery");
const counters = await useFetch("/api/public/home/counters");
const famousPeople = await useFetch("/api/public/home/famous-people");
const louvreFeatures = await useFetch("/api/public/home/louvre-features");
const {
  data: { value: louvreImagesData },
} = await useFetch("/api/public/home/louvre-images");
const louvreImages = reactive(louvreImagesData);

// ON MOUNTED
onMounted(() => {
  const interval = setInterval(() => {
    louvreImages.value.every((louvreImage: any, currentIndex: number) => {
      if (louvreImage.display == true) {
        louvreImage.display = false;
        const isTheLastImage: boolean =
          currentIndex == louvreImages.value.length - 1;
        if (isTheLastImage) {
          louvreImages.value[0].display = true;
        } else {
          louvreImages.value[currentIndex + 1].display = true;
        }
        return false;
      } else {
        return true;
      }
    });
  }, 2500);
});
</script>

<style lang="css">
#eiffel-background {
  background-image: url(/images/home/eiffel.jpg);
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
