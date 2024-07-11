import { HomeFeatureIconType } from "~/types/HomeFeatureIcon";

export default defineEventHandler((event) => {

  const homeFeatureIcons: HomeFeatureIconType[] = [
    {
      icon: "airplane",
      rotate: true,
      color: "#03A9F4",
      title: "Tres Vite!",
      text: "Nous apportons rapid!",
    },
    {
      icon: "credit-card",
      rotate: false,
      color: "#F44336",
      title: "Achete Online!",
      text: "Ne besoin d'argent!",
    },
    {
      icon: "bag-check-fill",
      rotate: false,
      color: "#4CAF50",
      title: "Safe",
      text: "Buy safe and secure.",
    },
  ];

  return homeFeatureIcons;

});
