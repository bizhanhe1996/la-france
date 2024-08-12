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
        <div class="prepend">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            fugit incidunt voluptatum eum, ad repudiandae laborum maiores
            exercitationem voluptas. Molestias nesciunt blanditiis ipsum
            recusandae ut eligendi veniam quasi quaerat voluptate, dolor nam
            animi soluta repellendus!
          </p>
        </div>
        <span
          >Ancient <br />
          France</span
        >
        <div class="append">
          <img
            width="75%"
            src="https://picsum.photos/400/200"
            alt="ancient france"
          />
        </div>
      </li>
      <li>
        <div class="prepend">
          <img
            width="75%"
            src="https://picsum.photos/400/400"
            alt="ancient france"
          />
        </div>
        <span>
          The Frankish <br />
          Kingdoms <br />
          486-987
        </span>
        <div class="append">
          <div>

            <p class="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, voluptatem suscipit? Delectus dicta quo distinctio nobis corrupti praesentium temporibus, voluptatem molestias adipisci eligendi aliquid facilis dolores culpa similique cupiditate iure consectetur, illo obcaecati ducimus soluta!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam beatae et iusto eaque porro?
            </p>
          </div>
        </div>
      </li>
      <li>
        <span>
          Early French <br />
          Monarchies <br />
          987-1453
        </span>
      </li>
      <li>
        <span>
          Pre-Revolutionary <br />
          France <br />
          1453-1789
        </span>
      </li>
      <li>
        <span class="!bg-red-500 w-60">
          Revolutionary <br />
          France <br />
          1789-1799
        </span>
      </li>
      <li>
        <span
          >Napoleon <br />
          1799-1815
        </span>
      </li>
      <li>
        <span>
          Post-Napoleonic <br> France <br> 1815-1914
        </span>
      </li>
      <li>
        <span>
          World War <br> I & II <br> 1914-1945
        </span>
      </li>
      <li>
        <span>
          Modern Times <br> 1945-now

        </span>
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
  li {
    @apply z-[2] w-full flex items-center justify-evenly;
    div.prepend {
      @apply p-4 bg-gray-200 relative text-justify rounded-md flex items-center justify-center;
      flex-basis: 40%;
      &::after {
        content: "";
        clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
        @apply bg-gray-200 top-1/2 h-8 w-6 absolute -translate-y-1/2;
        left: 98%;
      }
    }
    span {
      @apply select-none text-white bg-blue-500 p-4 font-bold aspect-square rounded-full flex items-center justify-center text-center;
    }
    div.append {
      @apply rounded-md flex items-center justify-center relative bg-gray-200 p-4;
      &::before {
        @apply h-8 w-6 bg-gray-200 absolute;
        content: "";
        right: 98%;
        clip-path: polygon(0% 50%, 100% 0%, 100% 100%);
      }
      flex-basis: 40%;
    }
  }
}
</style>
