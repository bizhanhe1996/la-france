import { HomeSlide } from "~/types/HomeSlide";

export default defineEventHandler((event) => {
  const slides: HomeSlide[] = [
    {
      src: "/images/home/slider/A.jpg",
      title: "Tu es beau",
      subtitle: "Tout le monde sait",
      display: true,
    },
    {
      src: "/images/home/slider/B.jpg",
      title: "Je t'aime",
      subtitle: "Parle avec moi plus souvent",
      display: false,
    },
    {
      src: "/images/home/slider/C.jpg",
      title: "Nous sommes ici",
      subtitle: "J'aime mon travail",
      display: false,
    },
  ];
  return slides;
});
