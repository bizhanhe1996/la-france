export default defineEventHandler(() => {
  const louvreImages = {
    value: [
      {
        src: "/images/home/louvre-1.jpeg",
        alt: "Louvre 1",
        display: false,
        title:"Section A",
        subtitle: "Lorem ipsum dolor sit amet consectetur les francais."
      },
      {
        src: "/images/home/louvre-2.jpeg",
        alt: "Louvre 2",
        display: true,
        title:"Section B",
        subtitle: "Lorem ipsum dolor sit amet consectetur la vache."
      },
      {
        src: "/images/home/louvre-3.jpeg",
        alt: "Louvre 3",
        display: false,
        title:"Section C",
        subtitle: "Lorem ipsum dolor sit amet consectetur le miel."
      },
    ],
  };
  return louvreImages;
});
