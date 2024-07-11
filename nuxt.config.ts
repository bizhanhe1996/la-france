// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [],
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-bootstrap-icons"],
  app: {
    head: {
      title: "My Sample App With Nuxt",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "charset", content: "utf-8" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.svg" }
      ],
    },
  },
  css: ["~/assets/css/main.css"]
});
