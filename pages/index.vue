<template>
  <div>
    <!-- slider -->
    <HomeSlider />
    <!-- four feature -->
    <Row class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-4">
      <Column
        v-for="(iconBox, index) in iconBoxes"
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
              v-for="(homeFeatureIcon, index) in homeFeatureIcons"
              :key="`home-feature-icon-${index}`"
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
type IconBoxDetail = {
  icon: string;
  color?: string;
  link: string;
  title: string;
  text?: string;
};

const iconBoxes: IconBoxDetail[] = [
  {
    icon: "earbuds",
    color: "#4CAF50",
    link: "#",
    title: "Les Earbuds",
    text: "Tu aimes la musique?",
  },
  {
    color: "#FFC107",
    icon: "tablet-landscape",
    link: "#",
    title: "Les Tablets",
    text: "Un plus grand portable!",
  },
  {
    color: "#2196F3",
    icon: "laptop",
    link: "#",
    title: "Les Ordinateurs",
    text: "Tu vuex un autr ordinateur?",
  },
  {
    color: "#F44336",
    icon: "phone",
    link: "#",
    title: "Les Portables",
    text: "Achete ton portable maintenant.",
  },
];

type HomeFeatureIconType = {
  icon: string;
  rotate: boolean;
  color: string;
  title: string;
  text: string;
};

const homeFeatureIcons: HomeFeatureIconType[] = [
  {
    icon: "airplane",
    rotate: true,
    color: "#03A9F4",
    title: "Tres Vite!",
    text: "Nous apportons rapid!",
  },
  {
    icon: "credit-card",
    rotate: false,
    color: "#F44336",
    title: "Achete Online!",
    text: "Ne besoin d'argent!",
  },
  {
    icon: "bag-check-fill",
    rotate: false,
    color: "#4CAF50",
    title: "Safe",
    text: "Buy safe and secure.",
  },
];
</script>
