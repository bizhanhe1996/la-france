<template>
  <!-- banner -->
  <section>
    <Banner
      :src="bannerImageDetails.src"
      :alt="bannerImageDetails.alt"
      :title="bannerImageDetails.title"
      :subTitle="bannerImageDetails.subTitle"
    />
  </section>

  <section class="m-4">
    <p class="text-center text-3xl p-4 mb-4">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </p>
    <form class="border p-4 rounded-lg shadow-sm" action="#">
      <div class="grid grid-cols-2 gap-y-4">
        <div class="sm:col-span-2 md:col-span-1">           
            <FormInputText
                label="Prénom"
                info="Extra info"
                
            />
        </div>
        <div class="sm:col-span-2 md:col-span-1">
            <FormInputText
                label="E-mail"
                error="This is an error"
                :validations="['email']"
            />
        </div>
      </div>

      message
      <textarea type="textarea"></textarea>

      Consent<input type="checkbox" />

      Homme<input type="radio" value="0" /> Femme<input
        type="radio"
        value="1"
      />

      <input type="range" />
    </form>
  </section>
</template>

<script setup>
const bannerImageDetails = ref({
  src: "/images/contact-us/banner.jpeg",
  alt: "Contact Us",
  title: "Contactez-nous",
  subTitle: "Contactez-nous avec ces informations!",
});
</script>
