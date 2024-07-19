import { FamousPerson } from "~/types/FamousPerson";

export default defineEventHandler(() => {

    const famousPeople: FamousPerson[] = [
        {
          imageSrc: "/public/people/charles-de-gaulle.jpeg",
          imageAlt: "Charles de gaulle",
          title: "Charles De Gaulle",
        },
      
        {
          imageSrc: "/public/people/joan-de-arc.jpeg",
          imageAlt: "joan d'arc",
          title: "Joan D'Arc",
        },
      
        {
          imageSrc: "/public/people/napoleon.jpeg",
          imageAlt: "napoleon bonaparte",
          title: "Napoleon Bonaparte",
        },
      
        {
          imageSrc: "/public/people/pasteur.jpeg",
          imageAlt: "luis pasteur",
          title: "Luis Pasteur",
        },
      
        {
          imageSrc: "/public/people/victor-hugo.jpeg",
          imageAlt: "victor hugo",
          title: "Victor Hugo",
        },
      
        {
          imageSrc: "/public/people/voltaire.jpeg",
          imageAlt: "voltaire",
          title: "Voltaire",
        },
      ];

      return famousPeople;

});





