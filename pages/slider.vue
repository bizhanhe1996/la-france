<template>
  <br />
  <br /><br />

  <div class="slider-container">
    <figure>
      <figcaption>Louis XVIII</figcaption>
      <img src="/images/histoire/louis-xviii.jpeg" alt="Louis XVIII" />
    </figure>
    <figure>
      <figcaption>Louis Philippe 1</figcaption>
      <img
        src="/images/histoire/louis-philippe-1.jpeg"
        alt="Louis Philippe 1"
      />
    </figure>
    <figure>
      <figcaption>Napoleon III</figcaption>
      <img src="/images/histoire/napoleon-III.jpeg" alt="Napoleon III" />
    </figure>
  </div>

  <br />
  <br />
  br
</template>

<script>

</script>


<style lang="postcss">

@keyframes animation-slide-x {
  0% {
    inset-inline-start: 0;
  }
  100% {
    inset-inline-start: 100%;
  }
}

div.slider-container {
  @apply flex flex-row relative max-w-64 overflow-hidden bg-red-100;
  figure {
    @apply relative;
    &:first-of-type {
      animation: animation-slide-x 5s linear;
      animation-iteration-count: infinite;
      animation-fill-mode: forwards;
      animation-direction: alternate-reverse;
    }
    /* animation: animation-slide-x 5s ease; */
    img {
      @apply min-w-64;    
    }
  }
}
</style>
