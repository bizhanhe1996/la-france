import { IconBoxDetail } from "~/types/IconBoxDetails";

export default defineEventHandler(async (event) => {
  const iconBoxes: IconBoxDetail[] = [
    {
      icon: "earbuds",
      color: "#4CAF50",
      link: "#",
      title: "Les Earbuds",
      text: "Tu aimes la musique?",
    },
    {
      color: "#FFC107",
      icon: "tablet-landscape",
      link: "#",
      title: "Les Tablets",
      text: "Un plus grand portable!",
    },
    {
      color: "#2196F3",
      icon: "laptop",
      link: "#",
      title: "Les Ordinateurs",
      text: "Tu vuex un autr ordinateur?",
    },
    {
      color: "#F44336",
      icon: "phone",
      link: "#",
      title: "Les Portables",
      text: "Achete ton portable maintenant.",
    },
  ];
  return iconBoxes;
});
