<template>
  <div class="relative">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>


onMounted(() => {

  // defining the observer
  const visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animationClassSuffix = entry.target.getAttribute('data-animation');
        entry.target.classList.add("animate-custom-" + animationClassSuffix);
        entry.target.addEventListener("animationstart", (event) => {
          event.target.classList.remove("opacity-0");
        })
        visibilityObserver.unobserve(entry.target);
      }
    });
  });

  // getting all the elements that should be observed
  const observables = document.querySelectorAll("[data-animation]");
  
  // observing all the elements that should be observed
  observables.forEach(observable => {
    visibilityObserver.observe(observable);
  });

});
</script>

<style></style>
