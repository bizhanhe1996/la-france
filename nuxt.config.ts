export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    plugins: [],
  },

  tailwindcss: {
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
      ],
      theme: {
        screens: {
          sm: "360px",
          md: "768px",
          lg: "992px",
        },
        extend: {},
      },
      plugins: [],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-bootstrap-icons"],

  app: {
    head: {
      title: "La France",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "charset", content: "utf-8" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },

  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-08-11",
});