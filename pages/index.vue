<template>
  <div>
    <!-- slider -->
    <HomeSlider />
    <!-- four feature -->
    <row class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-4">
      <column
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
      </column>
    </row>
    <!-- 2 col row -->
    <div class="bg-gray-200">
      <h3 class="p-10 text-3xl text-center font-bold">
        la <span class="text-red-500">VIE</span> commence avec ton sourire
        <span class="text-blue-500">:)</span>
      </h3>
      <row class="grid sm:grid-cols-1 md:grid-cols-2 py-4">
        <column class="col-span-1">
          <img
            class="w-2/3 m-auto"
            src="/images/home/linux-laptop.webp"
            id="home-linux-laptop"
            alt="laptop"
          />
        </column>
        <column class="col-span-1">
          <ul class="list-none space-y-6 max-w-fit m-auto">
            <li>
              <HomeFeatureIcon
                icon="airplane"
                color="skyblue"
                title="Tres Vite!"
                text="Nous apportons rapid!"
              />
            </li>
            <li>
              <HomeFeatureIcon
                icon="credit-card"
                color="red"
                title="Achete Online!"
                text="Ne besoin d'argent!"
              />
            </li>
            <li>
              <HomeFeatureIcon
                icon="bag-check-fill"
                color="green"
                title="Safe"
                text="Buy safe and secure."
              />
            </li>
          </ul>
        </column>
      </row>
    </div>
  </div>
</template>

<script lang="ts" setup>
type IconBoxDetail = {
  icon: String;
  color?: String;
  link: String;
  title: String;
  text?: String;
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
</script>

<style></style>
