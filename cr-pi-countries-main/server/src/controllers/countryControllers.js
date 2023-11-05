axios = require("axios");
// const { v4: uuidv4 } = require("uuid");
const { Country, Activity } = require("../db");

const generateRandomId = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let id = "";
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    id += alphabet[randomIndex];
  }
  return id;
};

const getAllCountriesApiToDb = async () => {
  try {
    const response = await axios.get("http://localhost:5000/countries");
    const countries = response.data;

    const countriesMapeados = countries.map((country) => {
      return {
        id: generateRandomId(),
        name: country.name.common,
        image: country.flags.png,
        continent: country.continents,
        capital: country.capital,
        population: country.population,
      };
    });
    // console.log(countriesMapeados);

    // await Country.bulkCreate(countriesMapeados);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCountriesApiToDb,
};
