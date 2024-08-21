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
      class="vertical-timeline flex flex-col justify-center items-center gap-24 my-4 relative z-[2]"
    >
      <!-- ancient france -->
      <li>
        <div class="prepend triangle">
          <p class="text-justify text-slate-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            fugit incidunt voluptatum eum, ad repudiandae laborum maiores
            exercitationem voluptas. Molestias nesciunt blanditiis ipsum
            recusandae ut eligendi veniam quasi quaerat voluptate, dolor nam
            animi soluta repellendus!
          </p>
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
      <!-- frankish kingdoms -->
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
          <p class="text-justify text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
            voluptatem suscipit? Delectus dicta quo distinctio nobis corrupti
            praesentium temporibus, voluptatem molestias adipisci eligendi
            aliquid facilis dolores culpa similique cupiditate iure consectetur,
            illo obcaecati ducimus soluta!
          </p>
        </div>
      </li>
      <!-- erly french monarchies -->
      <li>
        <div class="prepend triangle">
          <ul class="list-inside">
            <li class="mb-2">
              <b>Merovingian Dynasty</b>
              <p class="text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                distinctio unde obcaecati! Amet maiores ut esse ea cumque quos
                vel fugit dignissimos reprehenderit repellendus magni, deserunt
                dolorem corporis voluptate accusantium?
              </p>
            </li>
            <li class="mb-2">
              <b>Carolingian Dynasty</b>
              <p class="text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                labore dolore provident ut aut, quaerat quam, rem sed enim optio
                eum, quas beatae sapiente assumenda necessitatibus sunt
                obcaecati et excepturi!
              </p>
            </li>
            <li>
              <b>Capetian Dynasty</b>
              <p class="text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, veniam exercitationem alias odit sint modi
                quibusdam velit dignissimos nisi, sunt saepe! Ullam, voluptas.
                Ratione recusandae consequatur, nulla earum sint quae!
              </p>
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
      <!-- pre-revolutionary -->
      <li>
        <div class="prepend !p-0 !shadow-blue-500/50">
          <timeline-image
            path="/images/histoire/louie-xiv.jpeg"
            alt="Louie XIV"
            title="Louie XIV"
            subtitle="Subtitle goes here."
          />
        </div>
        <span class="!shadow-blue-500" id="pre-revolutionary">
          <div
            class="flex flex-col gap-2 bg-black/25 p-4 w-36 items-center justify-center"
          >
            <b>Pre-Revolutionary France</b>
            <small>1453-1789</small>
          </div>
        </span>

        <div class="append !shadow-blue-500/50 triangle">
          <ul class="list-inside list-dic">
            <li class="mb-2">
              <b>Social Structure</b>
              <p class="text-slate-500 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                rerum ducimus numquam dolor ad tenetur consectetur voluptatum
                distinctio vitae fugiat totam blanditiis, molestias delectus
                maxime amet dolorem a exercitationem eaque!
              </p>
            </li>
            <li class="mb-2">
              <b>Political Structure</b>
              <p class="text-slate-500 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem voluptate quasi quam sunt temporibus vero enim rem
                sequi doloribus, quos ea et consectetur, voluptas nisi tenetur a
                labore quas, architecto laboriosam. Nostrum officiis quod odio
                qui nesciunt consequatur unde excepturi?
              </p>
            </li>
            <li>
              <b>Economic Conditions</b>
              <p class="text-slate-500 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                modi dolore odio asperiores, iusto vel quod laboriosam illum a
                qui corrupti. Fuga voluptatem, culpa quisquam voluptas nisi hic
                architecto iusto quasi exercitationem esse optio. Itaque maxime
                sapiente placeat voluptas repellat.
              </p>
            </li>
          </ul>
        </div>
      </li>
      <!-- revolution -->
      <li>
        <div class="prepend triangle !shadow-red-500/50">
          <Row class="grid grid-cols-12 gap-4">
            <Column class="sm:col-span-12 md:col-span-6 lg:col-span-6">
              <h3 class="font-bold">Title A</h3>
              <p class="mb-2 text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptate, quibusdam commodi laudantium molestias velit cum
                saepe a distinctio totam?
              </p>
              <h3 class="font-bold">Title B</h3>
              <p class="mb-2 text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptate, quibusdam commodi laudantium molestias velit cum
                saepe a distinctio totam?
              </p>
              <h3 class="font-bold">Title C</h3>
              <p class="text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptate, quibusdam commodi laudantium molestias velit cum
                saepe a distinctio totam?
              </p>
            </Column>
            <Column class="sm:col-span-12 md:col-span-6 lg:col-span-6">
              <h3 class="font-bold">Title D</h3>
              <p class="mb-2 text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptate, quibusdam commodi laudantium molestias velit cum
                saepe a distinctio totam?
              </p>
              <h3 class="font-bold">Title E</h3>
              <p class="mb-2 text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptate, quibusdam commodi laudantium molestias velit cum
                saepe a distinctio totam?
              </p>
              <h3 class="font-bold">Title F</h3>
              <p class="text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptate, quibusdam commodi laudantium molestias velit cum
                saepe a distinctio totam?
              </p>
            </Column>
          </Row>
        </div>
        <span class="bg-france-flag animate-beat !shadow-red-500">
          <p class="!mix-blend-difference">Revolutionary France</p>
          <small class="!mix-blend-difference">1789-1799</small>
        </span>
        <div class="append !p-0">
          <div class="flex flex-col gap-4 items-center relative">
            <div
              class="absolute shadow-2xl shadow-red-500/50 -top-1/4 scale-75 z-[1] sepia opacity-50"
            >
              <timeline-image
                :path="revolutionaryFranceGallery[0].path"
                :alt="revolutionaryFranceGallery[0].alt"
                :title="revolutionaryFranceGallery[0].title"
                :subtitle="revolutionaryFranceGallery[0].subtitle"
              />
            </div>
            <div class="z-[2] shadow-2xl shadow-red-500/50 rounded-md">
              <timeline-image
                :path="revolutionaryFranceGallery[1].path"
                :alt="revolutionaryFranceGallery[1].alt"
                :title="revolutionaryFranceGallery[1].title"
                :subtitle="revolutionaryFranceGallery[1].subtitle"
              />
            </div>
            <div
              class="absolute shadow-2xl shadow-red-500/50 -bottom-1/4 scale-75 z-[1] sepia opacity-50"
            >
              <timeline-image
                :path="revolutionaryFranceGallery[2].path"
                :alt="revolutionaryFranceGallery[2].alt"
                :title="revolutionaryFranceGallery[2].title"
                :subtitle="revolutionaryFranceGallery[2].subtitle"
              />
            </div>
          </div>
        </div>
      </li>
      <!-- napoleon -->
      <li>
        <div class="prepend !shadow-none !p-0 !bg-white">
          <div
            class="scale-[0.35] z-[1] shadow-2xl shadow-black/50 absolute -left-[35%] rounded-md sepia opacity-50"
          >
            <timeline-image
              :alt="napoleonGallery[0].alt"
              :path="napoleonGallery[0].path"
              :title="napoleonGallery[0].title"
              :subtitle="napoleonGallery[0].subtitle"
            />
          </div>
          <div class="z-[2] w-[65%] shadow-2xl shadow-yellow-500">
            <timeline-image
              :alt="napoleonGallery[1].alt"
              :path="napoleonGallery[1].path"
              :title="napoleonGallery[1].title"
              :subtitle="napoleonGallery[1].subtitle"
            />
          </div>
          <div
            class="scale-[0.35] z-[1] shadow-2xl shadow-black/50 absolute -right-[35%] rounded-md sepia opacity-50"
          >
            <timeline-image
              :alt="napoleonGallery[2].alt"
              :path="napoleonGallery[2].path"
              :title="napoleonGallery[2].title"
              :subtitle="napoleonGallery[2].subtitle"
            />
          </div>
        </div>
        <span class="shadow-2xl !shadow-yellow-500" id="napoleon">
          <div
            class="flex flex-col gap-2 bg-black/25 p-4 w-36 items-center justify-center"
          >
            <b>Napoleon</b>
            <small>1799-1815</small>
          </div>
        </span>
        <div class="append triangle">
          <dl>Accordion ICI</dl>
        </div>
      </li>
      <li>
        <span> Post-Napoleonic France <small>1815-1914</small> </span>
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
// refs
const revolutionaryFranceGallery = ref([
  {
    path: "/images/histoire/execution.jpeg",
    alt: "execution of Louie XIV",
    title: "the Execution of Louie XIV",
    subtitle: "It is considered a pivotal event in the French Revolution.",
  },
  {
    path: "/images/histoire/bastille.jpeg",
    alt: "Storming of the Bastille",
    title: "Storming of the Bastille",
    subtitle: "It is considered a pivotal event in the French Revolution.",
  },
  {
    path: "/images/histoire/marat.jpeg",
    alt: "Jean Paul Marat",
    title: "Jean Paul Marat",
    subtitle: "It is considered a pivotal event in the French Revolution.",
  },
]);

const napoleonGallery = ref([
  {
    alt: "napoleon",
    path: "/images/histoire/napoleon-1.jpeg",
    title: "Napoleon",
    subtitle: "subtitle goes here",
  },
  {
    alt: "napoleon",
    path: "/images/histoire/napoleon-2.jpeg",
    title: "Napoleon",
    subtitle: "subtitle goes here",
  },
  {
    alt: "napoleon",
    path: "/images/histoire/napoleon-3.jpeg",
    title: "Napoleon",
    subtitle: "subtitle goes here",
  },
]);

// non ref variables
const bannerDetails = {
  src: "/images/histoire/banner.jpeg",
  alt: "Histoire",
  title: "Notre Histoire",
  subTitle: "L'histoire de France.",
};

onMounted(() => {
  const changeSliderInterval = setInterval(() => {
    const francePoppedImage = revolutionaryFranceGallery.value.pop();
    revolutionaryFranceGallery.value.unshift(francePoppedImage);

    const napoleonPoppedImage = napoleonGallery.value.pop();
    napoleonGallery.value.unshift(napoleonPoppedImage);
  }, 2000);
});
</script>

<style lang="postcss">
ul.vertical-timeline {
  & > li {
    @apply z-[2] w-full flex items-center justify-evenly;
    div.prepend {
      @apply p-4 bg-gray-100 shadow-2xl relative text-justify rounded-md flex items-center justify-center;
      flex-basis: 40%;
      &.triangle::after {
        content: "";
        clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
        @apply bg-gray-100 top-1/2 h-8 w-6 absolute -translate-y-1/2;
        left: 98%;
      }
    }
    & > span {
      @apply select-none text-white bg-blue-500 p-4 font-bold aspect-square rounded-full flex flex-col items-center justify-center w-36 text-center overflow-hidden shadow-2xl;
      small {
        font-size: 0.8rem;
        font-weight: normal;
      }
    }
    div.append {
      @apply rounded-md shadow-2xl flex items-center justify-center relative bg-gray-100 p-4;
      &.triangle::before {
        @apply h-8 w-6 bg-gray-100 absolute;
        content: "";
        right: 98%;
        clip-path: polygon(0% 50%, 100% 0%, 100% 100%);
      }
      flex-basis: 40%;
    }
  }
}

@keyframes animation-beat {
  from {
    transform: scale(1);
  }
  to {
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

.bg-france-flag {
  background: linear-gradient(to right, blue 0 33%, white 33% 66%, red 66% 99%);
}

span#napoleon {
  background-image: url("/images/histoire/napoleon-flag.jpeg");
  @apply bg-center bg-contain bg-no-repeat;
}

span#pre-revolutionary {
  background-image: url("/images/histoire/bourbons.jpeg");
}
</style>
