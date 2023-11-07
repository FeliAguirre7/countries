axios = require("axios");

const { Country, Activity } = require("../db");

const saveCountriesApiToDb = async () => {
  const response = await axios.get("http://localhost:5000/countries");
  if (!response.data) throw new Error("Error al guardar");
  let n = 0;
  for (const country of response.data) {
    n++;
    country.id = country.cca3;
    country.name = country.name.common;
    country.image = country.flags.svg;
    country.continent = country.region;
    if (!country.capital) {
      country.capital = "no data in capital";
    }
    country.capital !== false ? country.capital : "false";
    country.capital !== true ? country.capital : "true";
    country.capital = country.capital[0];
    if (country.subregion == undefined) {
      country.subregion = "no data in subregion";
    }
    country.population = country.population;
    await Country.create(country);
  }
};

module.exports = {
  saveCountriesApiToDb,
};
