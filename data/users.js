const users = [
  {
    id: 1,
    name: "Paco",
    route: "/paco",
    age: 56,
    address: {
      streetName: "Paseo de la Castellana",
      streetNumber: 24,
      zipCode: 28000,
      city: "Madrid",
    },
    bands: ["My Chemical Romance", "Evanescence", "Tokio Hotel"],
    aboutMe: "Hi, I am Pack, I am emo, I am sad",
  },
  {
    id: 2,
    name: "Pepe",
    route: "/pepe",
    age: 23,
    address: {
      streetName: "Paseo de la Castellana",
      streetNumber: 25,
      zipCode: 28000,
      city: "Madrid",
    },
    aboutMe: "Hi, I am Pepe, I am not emo, I am happy",
  },
  {
    id: 3,
    name: "Pipo",
    route: "/pipo",
    age: 41,
    address: {
      streetName: "Calle Orense",
      streetNumber: 25,
      zipCode: 28000,
      city: "Madrid",
    },
    aboutMe: "Hi, I am Pipo, I am a student",
  }
]

module.exports = users