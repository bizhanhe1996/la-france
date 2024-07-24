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
      <Row class="grid grid-cols-3 gap-4">
        <Column class="sm:col-span-3 md:col-span-1">
          <!-- prenom -->
          <FormAppInput
            label="Prénom"
            info="Extra info"
            :validations="['required']"
          />
        </Column>
        <Column class="sm:col-span-3 md:col-span-1">
          <!-- email -->
          <FormAppInput
            label="E-mail"
            :validations="['required', 'email']"
            info="Should be a valid email address."
            placeholder="quelque_chose@mail.fr"
          />
        </Column>
        <Column class="sm:col-span-3 md:col-span-1">
          <!-- mobile -->
          <FormAppInput
            :type="'tel'"
            label="Numero du Portable"
            placeholder="0912..."
            info="Onze Chiffres"
            :validations="['required', 'mobile']"
          />
        </Column>
      
        <Column class="sm:col-span-3 md:col-span-2">
          <FormAppInput
            type="textarea"
            label="Message"
            placeholder="Écrivez votre message ici."
            :validations="['required']"
          />
        </Column>

        <Column class="sm:col-span-3 md:col-span-1">
          <FormAppInput
            type="checkbox"
            label="Consent"
          />
        </Column>


      </Row>

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
