// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  typescript: {
    typeCheck: true
  },
  vite: {
    plugins: [

    ]
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: "My Sample App With Nuxt",
      meta: [
        {name: "viewport", content:"width=device-width, initial-scale=1"},
        {name: "charset", content: "utf-8"}
      ]
    }
  }
})
