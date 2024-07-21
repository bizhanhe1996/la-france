<template>
  <footer class="text-gray-300">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-zinc-900 gap-8 text-justify p-8"
    >
      <div class="col-span-1">
        <h4 class="text-2xl font-bold pb-3">Les Projets</h4>
        <ul class="list-disc list-inside">
          <li>
            <a href="https://www.aronia-dt.com">Aronia Digital Twin</a>
          </li>
          <li>
            <a href="https://www.poorsamadi.ir">Poorsamadi</a>
          </li>
          <li>
            <a href="https://www.bintebpouya.ir">Bina Teb Pouya</a>
          </li>
          <li>
            <a href="https://doctorkazemian.com/">Doctor Kazemian</a>
          </li>
          <li>
            <a href="https://flashka.com/">FlashKa</a>
          </li>
        </ul>
      </div>
      <div class="col-span-1">
        <h4 class="text-2xl font-bold pb-3">Recent Posts</h4>
        <p class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magni
          ducimus beatae eum ab enim nesciunt perspiciatis exercitationem dolor,
          provident libero aperiam officiis veritatis ut nisi dolore tenetur
          labore minima?
        </p>
      </div>
      <div class="col-span-1">
        <h4 class="text-2xl font-bold pb-3">Social Media</h4>
        <ul class="list-none flex flex-col gap-3">
          <li>
            <a href="https://www.instagram.com">
              <div class="flex flex-row gap-3 items-center">
                <BootstrapIcon class="footer-social-icon" name="instagram" />
                <span class="footer-social-link">Your Instagram</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.whatsapp.com">
              <div class="flex flex-row gap-3 items-center">
                <BootstrapIcon class="footer-social-icon" name="whatsapp" />
                <span class="footer-social-link">Your WhatsApp</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.telegram.com">
              <div class="flex flex-row gap-3 items-center">
                <BootstrapIcon class="footer-social-icon" name="telegram" />
                <span class="footer-social-link">Your Telegram</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com">
              <div class="flex flex-row gap-3 items-cente">
                <BootstrapIcon class="footer-social-icon" name="youtube" />
                <span class="footer-social-link">Your YouTube</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="col-span-1 flex items-center">
        <a href="https://www.nuxt.com">
          <img
            id="footer-nuxt-logo"
            src="~/assets/svg/nuxt-logo.svg"
            alt="nuxt logo"
          />
          <p class="text-center pt-4">Made with Nuxt 3</p>
        </a>
      </div>
    </div>
    <div class="bg-stone-950 text-center p-2">
      <span>Designed and Developed by</span> <a class="text-cyan-400" href="https://github.com/bizhanhe1996">bizhanhe1996</a>
    </div>
  </footer>
</template>

<script setup>
</script>

<style>

#footer-nuxt-logo {
  width: 60%;
  filter: grayscale(1);
  transition: filter 0.5s ease;
  margin: auto;
  &:hover {
    filter: grayscale(0);
  }
  cursor: pointer;
}

.footer-social-icon {
  transition: color 0.5s ease;
  font-size: 1.5rem;
  &:hover {
    color: yellow;
  }
}
.footer-social-link {
  transition: color 0.5s ease;
  &:hover {
    color: yellow;
  }

}














</style>
