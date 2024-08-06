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
      <Row class="grid grid-cols-3 gap-4 mb-4">
        <Column class="sm:col-span-3 md:col-span-1">
          <!-- prenom -->
          <FormsInput
            label="Prénom"
            info="Extra info"
            :validations="['required']"
          />
        </Column>
        <Column class="sm:col-span-3 md:col-span-1">
          <!-- email -->
          <FormsInput
            label="E-mail"
            :validations="['required', 'email']"
            info="Should be a valid email address."
            placeholder="quelque_chose@mail.fr"
          />
        </Column>
        <Column class="sm:col-span-3 md:col-span-1">
          <!-- mobile -->
          <FormsInput
            :type="'tel'"
            label="Numero du Portable"
            placeholder="0912..."
            info="Onze Chiffres"
            :validations="['required', 'mobile']"
          />
        </Column>
        <Column class="sm:col-span-3 md:col-span-2">
          <FormsInput
            type="textarea"
            label="Message"
            placeholder="Écrivez votre message ici."
            :validations="['required']"
          />
        </Column>
        <Column class="sm:col-span-3 md:col-span-1">
          <div class="flex justify-between items-center">
            <FormsInput type="checkbox" label="Consent" />
            <FormsInput type="switch" label="Switch" />
          </div>
          <h1 class="ms-4 text-xl">Gender</h1>
          <div class="flex justify-between">
            <FormsInput type="radio" name="age" value="1" label="Male" />
            <FormsInput type="radio" name="age" value="0" label="Female" />
            <FormsInput type="radio" name="age" value="-1" label="Other" />
          </div>
        </Column>
      </Row>
      <Row class="grid grid-cols-12 gap-4">
        <Column class="sm:col-span-12 md:col-span-4">
          <FormsInput
            type="select"
            name="city"
            label="Ville"
            info="Type to search"
            :options="selectOptions"
          />
        </Column>
        <Column class="sm:col-span-12 md:col-span-4">
          <FormsInput
            type="select"
            name="user"
            label="User"
            info="Type to search"
            :options="selectOptions"
          />
        </Column>
        <Column class="sm:col-span-12 md:col-span-4">
          <FormsInput
            type="tags"
            name="tags"
            label="Villes"
            info="Quelles ville vous voulez visier?"
            :tags="frenchCities"
          />
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

const selectOptions = [
  {
    icon: "facebook",
    label: "Shiraz",
    description: "Fars",
    value: "sh",
  },
  {
    icon: "instagram",
    label: "Isfahan",
    description: "Isfahan",
    value: "sf",
  },
  {
    icon: "telegram",
    label: "Mashhad",
    description: "Khorasan Razavi",
    value: "md",
  },
  {
    icon: "whatsapp",
    label: "Tehran",
    description: "Tehran",
    value: "th",
  },
  {
    icon: "tiktok",
    label: "Tabriz",
    description: "Azarbaijan Sharghi",
    value: "tb",
  },
];

const frenchCities = [
  {
    label: "Paris",
    value: "pr",
  },
  {
    label: "Lyon",
    value: "LY",
  },
  {
    label: "Marseille",
    value: "MR",
  },
  {
    label: "Toulouse",
    value: "TL",
  },
  {
    label: "Nantes",
    value: "NT",
  },
  {
    label: "Bordeaux",
    value: "BD",
  },
  {
    label: "Lille",
    value: "LI",
  },
  {
    label: "Rennes",
    value: "RE",
  },
  {
    label: "Strasbourg",
    value: "ST",
  },
];
</script>
