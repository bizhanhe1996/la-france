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
          <p class="text-justify text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto fugit incidunt voluptatum eum, ad repudiandae laborum maiores exercitationem voluptas. Molestias nesciunt blanditiis ipsum recusandae ut eligendi veniam quasi quaerat voluptate, dolor nam animi soluta repellendus!</p>
        </div>
        <span> Ancient France </span>
        <div class="append !p-0">
          <timeline-image
            path="/images/histoire/ancient.jpeg"
            alt="ancient france"
            title="Title here"
            subtitle="Subtitle goes here."
          />
        </div>
      </li>
      <li>
        <div class="prepend overflow-hidden !p-0">
          <timeline-image
            path="/images/histoire/charlemagne.jpeg"
            alt="frankish kingdoms"
            title="Charlemagne The Great"
            subtitle="Subtitle goes here."
          />
        </div>
        <span> The Frankish Kingdoms <small>486-987</small> </span>
        <div class="append triangle">
          <p class="text-justify text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, voluptatem suscipit? Delectus dicta quo distinctio nobis corrupti praesentium temporibus, voluptatem molestias adipisci eligendi aliquid facilis dolores culpa similique cupiditate iure consectetur, illo obcaecati ducimus soluta!</p>
        </div>
      </li>
      <li>
        <div class="prepend triangle">
          <ul class="list-inside">
            <li class="mb-2">
              <b>Merovingian Dynasty</b> 
              <p class="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio unde obcaecati! Amet maiores ut esse ea cumque quos vel fugit dignissimos reprehenderit repellendus magni, deserunt dolorem corporis voluptate accusantium?</p>
            </li>
            <li class="mb-2">
              <b>Carolingian Dynasty</b> 
              <p class="text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At labore dolore provident ut aut, quaerat quam, rem sed enim optio eum, quas beatae sapiente assumenda necessitatibus sunt obcaecati et excepturi!</p>
            </li>
            <li>
              <b>Capetian Dynasty</b>
              <p class="text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, veniam exercitationem alias odit sint modi quibusdam velit dignissimos nisi, sunt saepe! Ullam, voluptas. Ratione recusandae consequatur, nulla earum sint quae!</p>
            </li>
          </ul>
        </div>
        <span>
          <text>Early French Monarchies</text>
          <small>987-1453</small>
        </span>
        <div class="append !p-0">
          <timeline-image
            path="/images/histoire/early-french-monarchies.jpg"
            alt="early french monarchies"
            title="Title goes here"
            subtitle="Subtitle goes here."
          />
        </div>
      </li>
      <li>
        <div class="prepend !p-0 !bg-transparent !shadow-none">
          <timeline-image
            path="/images/histoire/louie-xiv.jpg"
            alt="Louie XIV"
            title="Louie XIV"
            subtitle="Subtitle goes here."
          />
        </div>
        <span class="!bg-orange-500 w-36">
          <text>Pre-Revolutionary France</text> <small>1453-1789</small>
        </span>
        <div class="append triangle">
          <ul class="list-inside list-dic">
            <li class="mb-2">
              <b>Social Structure</b>
              <p class="text-slate-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum ducimus numquam dolor ad tenetur consectetur voluptatum distinctio vitae fugiat totam blanditiis, molestias delectus maxime amet dolorem a exercitationem eaque!</p>
            </li>
            <li class="mb-2">
              <b>Political Structure</b> 
              <p class="text-slate-500 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem voluptate quasi quam sunt temporibus vero enim rem sequi doloribus, quos ea et consectetur, voluptas nisi tenetur a labore quas, architecto laboriosam. Nostrum officiis quod odio qui nesciunt consequatur unde excepturi?</p>
            </li>
            <li>
              <b>Economic Conditions</b> 
              <p class="text-slate-500 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit modi dolore odio asperiores, iusto vel quod laboriosam illum a qui corrupti. Fuga voluptatem, culpa quisquam voluptas nisi hic architecto iusto quasi exercitationem esse optio. Itaque maxime sapiente placeat voluptas repellat.</p>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <span class="!bg-red-500 !w-48 animate-beat">
          Revolutionary France <small>1789-1799</small>
        </span>
      </li>
      <li>
        <span> Napoleon <small>1799-1815</small> </span>
      </li>
      <li>
        <span>
          Post-Napoleonic France <small>1815-1914</small>
        </span>
      </li>
      <li>
        <span> World War I & II <small>1914-1945</small> </span>
      </li>
      <li>
        <span> Modern Times 1945-now </span>
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
  & > li {
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
    & > span {
      @apply select-none text-white bg-blue-500 p-4 font-bold aspect-square rounded-full flex flex-col items-center justify-center w-36 text-center;
      small {
        font-size: 0.8rem;
        font-weight: normal;
      }
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

<style>

@keyframes animation-beat {
  from {
    filter:drop-shadow(0 0 0 red);
    transform: scale(1);
  }
  to {
    filter:drop-shadow(0 0 1rem red);
    transform: scale(1.1);
  }
}

.animate-beat {
  animation-name: animation-beat;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

</style>