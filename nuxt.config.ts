export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    plugins: [],
  },

  tailwindcss: {
    config: {
      safelist: [
        "col-span-1",
        "col-span-2",
        "col-span-3",
        "col-span-4",
        "col-span-5",
        "col-span-6",
        "col-span-7",
        "col-span-8",
        "col-span-9",
        "col-span-10",
        "col-span-11",
        "col-span-12",
        "row-span-1",
        "row-span-2",
        "row-span-3",
        "row-span-4",
        "row-span-5",
        "row-span-6",
        "row-span-7",
        "row-span-8",
        "row-span-9",
        "row-span-10",
        "row-span-11",
        "row-span-12",
      ],
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
