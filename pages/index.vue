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
    <div class="bg-gray-200">
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
    </div>
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

</script>
