import { HomeSlide } from "~/types/HomeSlide";

export default defineEventHandler((event) => {
  const slides: HomeSlide[] = [
    {
      src: "/images/home/slider/A.jpg",
      title: "Slide one",
      subtitle: "This is the slider one.",
      display: true,
    },
    {
      src: "/images/home/slider/B.jpg",
      title: "Slide two",
      subtitle: "This is the slider two.",
      display: false,
    },
    {
      src: "/images/home/slider/C.jpg",
      title: "Slide three",
      subtitle: "This is the slider three.",
      display: false,
    },
  ];
  return slides;
});
