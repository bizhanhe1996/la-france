<template>
  <section title="banner">
    <banner
      :src="bannerData.src"
      :alt="bannerData.alt"
      :title="bannerData.title"
      :subTitle="bannerData.subTitle"
    />
  </section>
  <section title="skills">
    <row class="grid grid-cols-12">
      <column class="sm:col-span-6 md:col-span-3">
        <francais-skill
          title="Ecouter"
          icon="ear"
          color="#3b82f6"
          background-color="#dbeafe"
        />
      </column>
      <column class="sm:col-span-6 md:col-span-3">
        <francais-skill
          title="Lire"
          icon="book"
          color="#ef4444"
          background-color="#fee2e2"
        />
      </column>
      <column class="sm:col-span-6 md:col-span-3">
        <francais-skill
          title="Parler"
          icon="volume-up-fill"
          color="#22c55e"
          background-color="#dcfce7"
        />
      </column>
      <column class="sm:col-span-6 md:col-span-3">
        <francais-skill
          title="Ecrire"
          icon="pen"
          color="#eab308"
          background-color="#fef9c3"
        />
      </column>
    </row>
  </section>
</template>

<script setup>
const bannerData = {
  src: "/images/francais/banner.jpeg",
  alt: "Français",
  title: "Le Français",
  subTitle: "Apprenez le français avec nous.",
};
</script>

