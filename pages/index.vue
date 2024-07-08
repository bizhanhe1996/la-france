<template>
  <div>
    <HomeSlider />

    <row class="grid xs:grid-col-1 sm:grid-cols-2 md:grid-cols-4 my-4">
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
    color: "blue",
    link: "#",
    title: "Les Earbuds",
    text: "Tu aimes la musique?",
  },
  {
    color: "orange",
    icon: "tablet-landscape",
    link: "#",
    title: "Les Tablets",
    text: "Un plus grand portable!",
  },
  {
    color: "red",
    icon: "laptop",
    link: "#",
    title: "Les Ordinateurs",
    text: "Tu vuex un autr ordinateur?",
  },
  {
    color: "yellow",
    icon: "phone",
    link: "#",
    title: "Les Portables",
    text: "Achete ton portable maintenant.",
  },
];
</script>
