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
        <div class="prepend triangle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto fugit
          incidunt voluptatum eum, ad repudiandae laborum maiores exercitationem
          voluptas. Molestias nesciunt blanditiis ipsum recusandae ut eligendi
          veniam quasi quaerat voluptate, dolor nam animi soluta repellendus!
        </div>
        <span class="w-36"> Ancient France </span>
        <div class="append !p-0">
          <img
            class="w-full rounded-md"
            src="/images/histoire/ancient.jpeg"
            alt="ancient france"
            draggable="false"
          />
          <div
            class="select-none absolute text-center flex flex-col gap-4 transition hover:backdrop-blur-sm p-4"
          >
            <figcaption class="text-xl font-bold">Title</figcaption>
            <small>Subtitle goes here.</small>
          </div>
        </div>
      </li>
      <li>
        <div class="prepend overflow-hidden !p-0">
          <img
            width="100%"
            src="/images/histoire/charlemagne.jpeg"
            alt="ancient france"
            draggable="false"
          />
          <div class="absolute flex flex-col text-center gap-4 transition hover:backdrop-blur-sm p-4 select-none">
            <figcaption class="font-bold">Charlemagne The Great</figcaption>
            <small>subtitle goes here.</small>
          </div>
        </div>
        <span class="w-36"> The Frankish Kingdoms 486-987 </span>
        <div class="append triangle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
          voluptatem suscipit? Delectus dicta quo distinctio nobis corrupti
          praesentium temporibus, voluptatem molestias adipisci eligendi aliquid
          facilis dolores culpa similique cupiditate iure consectetur, illo
          obcaecati ducimus soluta!
        </div>
      </li>
      <li>
        <div class="prepend triangle">
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio unde obcaecati! Amet maiores ut esse ea cumque quos vel fugit dignissimos reprehenderit repellendus magni, deserunt dolorem corporis voluptate accusantium?</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At labore dolore provident ut aut, quaerat quam, rem sed enim optio eum, quas beatae sapiente assumenda necessitatibus sunt obcaecati et excepturi!</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, veniam exercitationem alias odit sint modi quibusdam velit dignissimos nisi, sunt saepe! Ullam, voluptas. Ratione recusandae consequatur, nulla earum sint quae!</li>
          </ul>
        </div>
        <span class="w-36">
          Early French Monarchies 987-1453
        </span>
        <div class="append !p-0">
          <img
            class="w-full rounded-md"
            src="/images/histoire/early-french-monarchies.jpg"
            alt="ancient france"
            draggable="false"
          />
          <div
            class="select-none absolute text-center flex flex-col gap-4 transition hover:backdrop-blur-sm p-4"
          >
            <figcaption class="text-xl font-bold">Title</figcaption>
            <small>Subtitle goes here.</small>
          </div>
        </div>
      </li>
      <li>
        <span class="!bg-orange-500 w-36">
          Pre-Revolutionary France 1453-1789
        </span>
      </li>
      <li>
        <span class="!bg-red-500 w-48">
          Revolutionary France 1789-1799
        </span>
      </li>
      <li>
        <span class="w-36"> Napoleon 1799-1815 </span>
      </li>
      <li>
        <span class="w-36">
          Post-Napoleonic France 1815-1914
        </span>
      </li>
      <li>
        <span class="w-36">
          World War
          I & II
          1914-1945
        </span>
      </li>
      <li>
        <span class="w-36">
          Modern Times 1945-now
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
      @apply p-4 bg-gray-200 shadow-lg shadow-zinc-300 relative text-justify rounded-md flex items-center justify-center;
      flex-basis: 40%;
      &.triangle::after {
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
      @apply rounded-md shadow-lg shadow-zinc-300 flex items-center justify-center relative bg-gray-200 p-4;
      &.triangle::before {
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
