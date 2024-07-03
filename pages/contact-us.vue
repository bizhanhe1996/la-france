<template>
    <Banner
    :src="bannerImageDetails.src"
    :alt="bannerImageDetails.alt"
    :title="bannerImageDetails.title"
    :subTitle="bannerImageDetails.subTitle"
    />
</template>

<script setup>

    const bannerImageDetails = ref({
        src:"/images/contact-us/banner.jpeg",
        alt:"Contact Us",
        title:"Contactez-nous",
        subTitle:"Contactez-nous avec ces informations!"
    })

</script>