<template>
  <section>
    <Banner
      :src="bannerDetails.src"
      :alt="bannerDetails.alt"
      :title="bannerDetails.title"
      :subTitle="bannerDetails.subTitle"
    />
  </section>
  <section>
    <ul
      class="vertical-timeline flex flex-col justify-center items-center gap-8 my-4 relative z-[2]"
    >
      <li>
        <div class="prepend bg-teal-200">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto fugit incidunt voluptatum eum, ad repudiandae laborum maiores exercitationem voluptas. Molestias nesciunt blanditiis ipsum recusandae ut eligendi veniam quasi quaerat voluptate, dolor nam animi soluta repellendus!</p>

        </div>
        <span>Before Roman <br/> Empire</span>
        <div class="append bg-green-200">append</div>
      </li>
      <li>
        <span>Roman Empire <br/> Advent</span>
      </li>
      <li>
        <span>Roman Empire <br/> Collapse</span>
      </li>
      <li>
        <span class="!bg-red-500">Great French <br/> Revolution</span>
      </li>
      <li>
        <span>Napoleon</span>
      </li>
      <li>
        <span>World War II</span>
      </li>
      <li>
        <span>Modern times</span>
      </li>
      <hr class="border-blue-500 border-2 absolute h-full z-[1]" />
    </ul>
  </section>
</template>

<style scoped></style>

<script setup>
const bannerDetails = {
  src: "/images/histoire/banner.jpeg",
  alt: "Histoire",
  title: "Notre Histoire",
  subTitle: "L'histoire de France.",
};
</script>

<style lang="postcss">
ul.vertical-timeline {
  @apply bg-blue-200;
  li {
    @apply z-[2]  relative w-full flex;
    
    div.prepend {
      flex-basis: 40%;
      flex-grow: 47.5%;
    }
    span {
      flex-basis: 5%;
      flex-grow: 20%;
      aspect-ratio: 1;
      width: 100%;
      height: 100%;
      @apply bg-blue-500 select-none text-white text-center aspect-square px-4 py-2 rounded-full inline-flex mx-auto items-center justify-center min-w-min;
    }
    div.append {
      flex-basis: 40%;
      flex-grow: 47.5%;
    }

  }
}
</style>
