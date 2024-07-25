export default defineEventHandler(async (event) => {
  const monuments = [
    {
      name: "Eiffel",
      location: "Tu aimes la musique?",
    },
    {
      name: "Louvre",
      location: "Un plus grand portable!",
    },
    {
      name: "Arc de Triomphe",
      location: "Tu vuex un autr ordinateur?",
    },
    {
      name: "Versailles",
      location: "Achete ton portable maintenant.",
    },
  ];
  return monuments;
});
