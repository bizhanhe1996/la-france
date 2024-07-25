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
          <FormInput
            label="Prénom"
            info="Extra info"
            :validations="['required']"
          />
        </Column>
        <Column class="sm:col-span-3 md:col-span-1">
          <!-- email -->
          <FormInput
            label="E-mail"
            :validations="['required', 'email']"
            info="Should be a valid email address."
            placeholder="quelque_chose@mail.fr"
          />
        </Column>
        <Column class="sm:col-span-3 md:col-span-1">
          <!-- mobile -->
          <FormInput
            :type="'tel'"
            label="Numero du Portable"
            placeholder="0912..."
            info="Onze Chiffres"
            :validations="['required', 'mobile']"
          />
        </Column>

        <Column class="sm:col-span-3 md:col-span-2">
          <FormInput
            type="textarea"
            label="Message"
            placeholder="Écrivez votre message ici."
            :validations="['required']"
          />
        </Column>
        <Column class="sm:col-span-3 md:col-span-1">
          <div class="flex justify-between items-center">
            <FormInput type="checkbox" label="Consent" />
            <FormInput type="switch" label="Switch" />
          </div>
          <ul class="list-disc" >
            <li>radio</li>
            <li>circle range</li>
            <li>linear range</li>
          </ul>
        </Column>
      </Row>
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
