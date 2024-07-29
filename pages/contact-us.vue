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
          <h1 class="ms-4 text-xl">Gender</h1>
          <div class="flex justify-between">
            <FormInput type="radio" name="age" value="1" label="Male" />
            <FormInput type="radio" name="age" value="0" label="Female" />
            <FormInput type="radio" name="age" value="-1" label="Other" />
          </div>
          <ul class="list-disc">
            <li>select: tag, multi, search ...</li>
            <li>linear range</li>
            <li>range</li>
          </ul>
        </Column>
      </Row>
      <Row class="grid grid-cols-12 gap-4">
        <Column class="sm:col-span-12 md:col-span-4">
          <FormInput type="select" name="select" label="Custom select" :options="[
            {
              icon:'star',
              label:'Shiraz',
              description:'Fars',
              value:'sh'
            },
            {
              icon:'instagram',
              label:'Isfahan',
              description:'Isfahan',
              value:'sf'
            },
            {
              icon:'telegram',
              label:'Mashhad',
              description:'Khorasan Razavi',
              value:'md'
            }
          ]" />
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
