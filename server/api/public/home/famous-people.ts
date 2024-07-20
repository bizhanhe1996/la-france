import { FamousPerson } from "~/types/FamousPerson";

export default defineEventHandler(() => {

    const famousPeople: FamousPerson[] = [
        {
          imageSrc: "/images/home/people/charles-de-gaulle.jpeg",
          imageAlt: "Charles de gaulle",
          title: "Charles De Gaulle",
        },
      
        {
          imageSrc: "/images/home/people/joan-de-arc.jpeg",
          imageAlt: "joan d'arc",
          title: "Joan D'Arc",
        },
      
        {
          imageSrc: "/images/home/people/napoleon.jpeg",
          imageAlt: "napoleon bonaparte",
          title: "Napoleon Bonaparte",
        },
      
        {
          imageSrc: "/images/home/people/pasteur.jpeg",
          imageAlt: "luis pasteur",
          title: "Luis Pasteur",
        },
      
        {
          imageSrc: "/images/home/people/victor-hugo.jpeg",
          imageAlt: "victor hugo",
          title: "Victor Hugo",
        },
      
        {
          imageSrc: "/images/home/people/voltaire.jpeg",
          imageAlt: "voltaire",
          title: "Voltaire",
        },
      ];

      return famousPeople;

});





