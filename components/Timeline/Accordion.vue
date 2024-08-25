<template>
  <div
    class="accordion bg-gray-100 p-4 rounded-md shadow-2xl shadow-yellow-500/50"
  >
    <details @click.prevent="handleAccordionClick">
      <summary>
        <span>War of the Second Coalition</span>
        <small>(1798-1802)</small>
      </summary>
      <p>
        This war pitted France against a coalition including Austria, Russia,
        the Ottoman Empire, and Great Britain. It ended with French victory and
        the Treaty of Amiens in 1802.
      </p>
    </details>
    <details @click.prevent="handleAccordionClick">
      <summary>
        <span>War of the Third Coalition</span>
        <small>(1803-1806)</small>
      </summary>
      <ul>
        <li>
          <span>Battle of Austerlitz (1805)</span>
          <p>Napoleon's decisive victory over Russian and Austrian forces.</p>
        </li>
        <li>
          <span>Battle of Trafalgar (1805)</span>
          <p>
            British naval victory that ended Napoleon's plans to invade England.
          </p>
        </li>
      </ul>
    </details>
    <details @click.prevent="handleAccordionClick">
      <summary>
        <span>War of the Fourth Coalition</span>
        <small>(1806-1807)</small>
      </summary>
      <ul>
        <li>
          <span>Battle of Jena-Auerstedt (1806)</span>
          <p>Decisive French victory over Prussia</p>
        </li>
        <li>
          <span>Battle of Eylau (1807)</span>
          <p>Inconclusive battle between French and Russian forces</p>
        </li>
        <li>
          <span>Battle of Friedland (1807)</span>
          <p>French victory leading to the Treaty of Tilsit</p>
        </li>
      </ul>
    </details>
    <details @click.prevent="handleAccordionClick">
      <summary><span>Peninsular War</span> <small>(1808-1814)</small></summary>
      <p>
        This long conflict in Spain and Portugal tied down significant French
        forces and contributed to Napoleon's eventual defeat.
      </p>
    </details>
    <details @click.prevent="handleAccordionClick">
      <summary>
        <span>War of the Fifth Coalition</span> <small>(1809)</small>
      </summary>
      <p>
        Austria's attempt to break French domination, ending in French victory
        at the Battle of Wagram.
      </p>
    </details>
    <details @click.prevent="handleAccordionClick">
      <summary>
        <span>French invasion of Russia</span> <small>(1812)</small>
      </summary>
      <p>
        Napoleon's disastrous campaign into Russia that severely weakened French
        power.
      </p>
    </details>
    <details @click.prevent="handleAccordionClick">
      <summary>
        <span>War of the Sixth Coalition</span>
        <small>(1813-1814)</small>
      </summary>
      <p>
        Allied powers united to defeat Napoleon, culminating in his first
        abdication in 1814.
      </p>
    </details>
    <details @click.prevent="handleAccordionClick">
      <summary>
        <span>Hundred Days and Waterloo Campaign</span>
        <small>(1815)</small>
      </summary>
      <p>
        Napoleon's final bid for power after escaping exile, ending with his
        defeat at Waterloo
      </p>
    </details>
  </div>
</template>

<script setup>
// functions
const handleAccordionClick = (event) => {
  document
    .querySelectorAll(".accordion details")
    .forEach((detailsTag) => detailsTag.removeAttribute("open"));
  event.currentTarget.setAttribute("open", "");
};
</script>

<style lang="postcss">
div.accordion {
  @apply text-start w-full absolute;
  details {
    @apply mb-4 last:my-0;
    summary {
      @apply cursor-pointer flex select-none mb-2;
      &::before {
        content: "▼";
        @apply text-yellow-500 cursor-pointer float-start me-2;
      }
      & {
        &[open]::before {
          content: "▼";
          @apply rotate-180;
        }
      }
      span {
        @apply hover:text-yellow-500 font-bold transition-colors;
      }
      small {
        @apply italic text-gray-500;
      }
    }
    & > p {
      @apply text-slate-500 text-justify ms-4 transition;
    }
    ul {
      @apply ms-4;
      li {
        @apply my-2;
        span {
          @apply text-slate-500 float-start font-bold;
          &::after {
            content: ":";
            display: inline;
          }
        }
        p {
          @apply text-slate-500 text-justify;
        }
      }
    }
  }
}
</style>
