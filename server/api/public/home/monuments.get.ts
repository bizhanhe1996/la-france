export default defineEventHandler(async (event) => {
  const monuments = [
    {
      name: "Eiffel",
      location: "La tour Eiffel",
      backgroundColor:"#1d4ed8",
      color: "white"
    },
    {
      name: "Louvre",
      location: "Le musee du Louvre",
      backgroundColor: "white",
      color:"gray"
    },
    {
      name: "Versailles",
      location: "Arc de Triomphe",
      backgroundColor: "#b91c1c",
      color:"white"
    },
  ];
  return monuments;
});
