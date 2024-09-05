<template>
  <section title="banner">
    <banner
      :src="bannerDetails.src"
      :alt="bannerDetails.alt"
      :title="bannerDetails.title"
      :subTitle="bannerDetails.subTitle"
    />
  </section>
  <section title="time-line">
    <ul class="vertical-timeline">
      <li title="ancient france">
        <div
          class="prepend triangle !shadow-green-500/50"
          data-animation="from-left"
        >
          <p class="text-justify text-slate-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            mollitia, dignissimos animi cumque ex id nisi, magni repellat
            voluptate repudiandae recusandae beatae? Minus perferendis tempore
            provident sit, maxime illum nisi alias repudiandae debitis.
            Voluptates quis provident, ipsam consequuntur magnam ipsa cupiditate
            repellat eligendi reiciendis consequatur assumenda praesentium
            deleniti corrupti dolorem unde tempore maxime veritatis ad. Quia
            perspiciatis aliquid fuga ex soluta odit nobis harum, assumenda
            alias voluptates animi officia ipsa hic, tenetur recusandae magni
            dicta commodi, pariatur adipisci vitae. Deserunt.
          </p>
        </div>
        <timeline-era title="Ancient France" period="-468" shadow="green" />
        <div
          class="append !p-0 !shadow-green-500/50"
          data-animation="from-right"
        >
          <timeline-image
            path="/images/histoire/ancient.jpeg"
            alt="ancient france"
            title="Title here"
            subtitle="Subtitle goes here."
          />
        </div>
      </li>
      <li title="frankish kingdoms">
        <div class="prepend overflow-hidden !p-0" data-animation="from-left">
          <timeline-image
            path="/images/histoire/charlemagne.jpeg"
            alt="frankish kingdoms"
            title="Charlemagne The Great"
            subtitle="Subtitle goes here."
          />
        </div>
        <timeline-era
          title="Frankish Kingdoms"
          period="486-987"
          shadow="orange"
        />
        <div class="append triangle" data-animation="from-right">
          <div class="text-justify text-slate-500">
            <h2 class="font-bold">Title A</h2>
            <p class="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              exercitationem distinctio recusandae atque officiis deserunt earum
              voluptas dolor ea corporis repellat sint, labore rem! Eius
              perspiciatis pariatur rerum accusantium esse.
            </p>
            <h2 class="font-bold">Title B</h2>
            <p class="mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ipsa
              commodi itaque! Blanditiis quo, repellat, quisquam debitis eius
              officia minus soluta nesciunt suscipit enim ducimus! Provident a
              harum nostrum excepturi.
            </p>
            <h2 class="font-bold">Title C</h2>
            <p class="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur aut necessitatibus esse deleniti vitae odio aperiam
              accusantium inventore, laudantium minima asperiores error id iure
              voluptate fugit enim suscipit officiis dolore.
            </p>
          </div>
        </div>
      </li>
      <li title="early french monarchies">
        <div class="prepend triangle" data-animation="from-left">
          <ul class="list-inside">
            <li class="mb-2">
              <b class="text-slate-500">Merovingian Dynasty</b>
              <p class="text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                distinctio unde obcaecati! Amet maiores ut esse ea cumque quos
                vel fugit dignissimos reprehenderit repellendus magni, deserunt
                dolorem corporis voluptate accusantium?
              </p>
            </li>
            <li class="mb-2">
              <b class="text-slate-500">Carolingian Dynasty</b>
              <p class="text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                labore dolore provident ut aut, quaerat quam, rem sed enim optio
                eum, quas beatae sapiente assumenda necessitatibus sunt
                obcaecati et excepturi!
              </p>
            </li>
            <li>
              <b class="text-slate-500">Capetian Dynasty</b>
              <p class="text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, veniam exercitationem alias odit sint modi
                quibusdam velit dignissimos nisi, sunt saepe! Ullam, voluptas.
                Ratione recusandae consequatur, nulla earum sint quae!
              </p>
            </li>
          </ul>
        </div>
        <timeline-era
          title="Early French Monarchies"
          period="987-1453"
          shadow="brown"
        />
        <div class="append !p-0" data-animation="from-right">
          <timeline-image
            path="/images/histoire/early-french-monarchies.jpg"
            alt="early french monarchies"
            title="Title goes here"
            subtitle="Subtitle goes here."
          />
        </div>
      </li>
      <li title="pre-revolutionary">
        <div
          class="prepend !p-0 !shadow-blue-500/50"
          data-animation="from-left"
        >
          <timeline-image
            path="/images/histoire/louis-xiv.jpeg"
            alt="Louis XIV"
            title="Louis XIV"
            subtitle="Subtitle goes here."
          />
        </div>
        <timeline-era
          title="Pre-Revolutionary France"
          period="1453-1789"
          shadow="purple"
          background="/images/histoire/bourbons.jpeg"
        />
        <div
          class="append !shadow-blue-500/50 triangle"
          data-animation="from-right"
        >
          <ul class="list-inside list-dic">
            <li class="mb-2">
              <b class="text-slate-500">Social Structure</b>
              <p class="text-slate-500 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                rerum ducimus numquam dolor ad tenetur consectetur voluptatum
                distinctio vitae fugiat totam blanditiis, molestias delectus
                maxime amet dolorem a exercitationem eaque!
              </p>
            </li>
            <li class="mb-2">
              <b class="text-slate-500">Political Structure</b>
              <p class="text-slate-500 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem voluptate quasi quam sunt temporibus vero enim rem
                sequi doloribus, quos ea et consectetur, voluptas nisi tenetur a
                labore quas, architecto laboriosam. Nostrum officiis quod odio
                qui nesciunt consequatur unde excepturi?
              </p>
            </li>
            <li>
              <b class="text-slate-500">Economic Conditions</b>
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
      <li title="revolution">
        <div
          class="prepend triangle !shadow-red-500/50"
          data-animation="from-left"
        >
          <row class="grid grid-cols-12 gap-4">
            <column class="sm:col-span-12 md:col-span-6 lg:col-span-6">
              <h3 class="font-bold text-slate-500">Title A</h3>
              <p class="mb-2 text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptate, quibusdam commodi laudantium molestias velit cum
                saepe a distinctio totam?
              </p>
              <h3 class="font-bold text-slate-500">Title B</h3>
              <p class="mb-2 text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptate, quibusdam commodi laudantium molestias velit cum
                saepe a distinctio totam?
              </p>
              <h3 class="font-bold text-slate-500">Title C</h3>
              <p class="text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptate, quibusdam commodi laudantium molestias velit cum
                saepe a distinctio totam?
              </p>
            </column>
            <column class="sm:col-span-12 md:col-span-6 lg:col-span-6">
              <h3 class="font-bold text-slate-500">Title D</h3>
              <p class="mb-2 text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptate, quibusdam commodi laudantium molestias velit cum
                saepe a distinctio totam?
              </p>
              <h3 class="font-bold text-slate-500">Title E</h3>
              <p class="mb-2 text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptate, quibusdam commodi laudantium molestias velit cum
                saepe a distinctio totam?
              </p>
              <h3 class="font-bold text-slate-500">Title F</h3>
              <p class="text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptate, quibusdam commodi laudantium molestias velit cum
                saepe a distinctio totam?
              </p>
            </column>
          </row>
        </div>
        <timeline-era
          title="Revolutionary France"
          period="1789-1815"
          shadow="red"
          background="/images/histoire/french-flag.jpeg"
          beat
        />
        <div class="append !p-0" data-animation="from-right">
          <timeline-gallery
            direction="horizontal"
            :images="revolutionaryFranceGallery"
          />
        </div>
      </li>
      <li title="napoleon">
        <div
          class="prepend !bg-transparent !shadow-none"
          data-animation="from-left"
        >
          <timeline-gallery direction="vertical" :images="napoleonGallery" />
        </div>
        <timeline-era
          title="Napoleon"
          period="1799-1815"
          shadow="gold"
          background="/images/histoire/napoleon-flag.jpeg"
        />
        <div class="append triangle" data-animation="from-right">
          <timeline-accordion
            class="!shadow-2xl !shadow-yellow-500"
            :items="napoleonicWars.data"
          />
        </div>
      </li>
      <li title="post napoleonic france">
        <div
          class="prepend triangle !shadow-zinc-500"
          data-animation="from-left"
        >
          <div class="text-slate-500">
            <h1 class="font-bold">Une</h1>
            <p class="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              exercitationem, consequuntur optio incidunt repudiandae magni
              officiis deleniti laboriosam fuga minus! Sunt cum sint odio odit
              quasi modi in fuga architecto!
            </p>
            <h1 class="font-bold">Deux</h1>
            <p class="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              numquam maxime sunt temporibus cupiditate voluptates amet
              inventore cumque commodi aperiam sit quidem repellat eaque, fugit
              eius placeat excepturi. Doloremque, labore.
            </p>
            <h1 class="font-bold">Trois</h1>
            <p class="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ipsa eius vitae at modi quibusdam autem a id laboriosam
              doloremque. Earum consequuntur saepe, placeat sint cum quidem ipsa
              harum? Soluta inventore reprehenderit vero dolores molestias
              corporis tempora placeat. Architecto, reprehenderit?
            </p>
          </div>
        </div>
        <timeline-era
          title="Post-Napoleonic France"
          period="1815-1914"
          shadow="gray"
        />
        <div class="append !p-0 !shadow-zinc-500" data-animation="from-right">
          <timeline-carousell :images="postNapoleonicCarousell" />
        </div>
      </li>
      <li title="world war I and II">
        <div
          class="prepend !bg-transparent !shadow-none"
          data-animation="from-left"
        >
          <timeline-masonary
            :items="worldWarOneAndTwoImages"
            shadow="#3b82f6"
            @image-clicked="masonaryEventListener"
          />
        </div>
        <timeline-era
          title="World War I & II"
          period="1914-1945"
          shadow="#3b82f6"
        />
        <div
          class="append triangle !shadow-blue-500"
          data-animation="from-right"
        >
          <p class="text-justify text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            ipsum, non minus culpa consequuntur officiis quisquam tempora
            sapiente fugiat nihil maiores facilis harum fuga architecto sequi
            odit eligendi, atque velit. Minima harum ipsa amet dolor minus?
            Eligendi sint tempore placeat, culpa debitis sapiente quo iure,
            eveniet vitae, a repudiandae. Ut nam possimus, facere alias
            provident commodi! Veritatis sequi nostrum reprehenderit, atque a
            perspiciatis dolorem pariatur nam sapiente veniam consequuntur sit
            reiciendis laborum qui, ex eligendi recusandae placeat dolor iste
            inventore, itaque aliquid laboriosam maiores officia. Hic distinctio
            accusamus ipsum asperiores porro eaque exercitationem debitis, nisi
          </p>
        </div>
      </li>
      <hr class="border-blue-500 border-2 absolute h-full z-[1]" />
    </ul>
  </section>
</template>

<script setup>
// non ref variables
const bannerDetails = {
  src: "/images/histoire/banner.jpeg",
  alt: "Histoire",
  title: "Notre Histoire",
  subTitle: "L'histoire de France.",
};

const napoleonicWars = useFetch("/api/public/histoire/napoleonic-wars");

const revolutionaryFranceGallery = [
  {
    path: "/images/histoire/execution.jpeg",
    alt: "execution of Louis XIV",
    title: "the Execution of Louis XIV",
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
];

const napoleonGallery = [
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
];

const postNapoleonicCarousell = [
  {
    title: "Napoleon III",
    src: "/images/histoire/napoleon-III.jpeg",
    alt: "Napoleon III",
  },
  {
    title: "Louis Philippe 1",
    src: "/images/histoire/louis-philippe-1.jpeg",
    alt: "Louis Philippe 1",
  },
  {
    title: "Louis XVIII",
    src: "/images/histoire/louis-xviii.jpeg",
    alt: "Louis XVIII",
  },
];

const worldWarOneAndTwoImages = [
  [
    {
      path: "/images/histoire/masonary-1.jpeg",
      alt: "Alternative text 1",
      title: "Troops in Champs Elysees",
      id: "masonary-item-1",
    },
    {
      path: "/images/histoire/masonary-2.jpeg",
      alt: "Alternative text 2",
      title: "Title 2",
      id: "masonary-item-2",
    },
    {
      path: "/images/histoire/masonary-3.jpeg",
      alt: "Alternative text 3",
      title: "Title 3",
      id: "masonary-item-3",
    },
  ],
  [
    {
      path: "/images/histoire/masonary-4.jpeg",
      alt: "Alternative text 4",
      title: "Hilter invades Paris",
      id: "masonary-item-4",
    },
    {
      path: "/images/histoire/masonary-5.jpeg",
      alt: "Alternative text 5",
      title: "Normandy Operation",
      id: "masonary-item-5",
    },
  ],
  [
    {
      path: "/images/histoire/masonary-6.jpeg",
      alt: "Alternative text 6",
      title: "Paris Liberation",
      id: "masonary-item-6",
    },
  ],
];
</script>

<style lang="postcss">
ul.vertical-timeline {
  @apply flex flex-col justify-center items-center gap-24 my-4 pb-16 relative z-[2];
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
</style>
