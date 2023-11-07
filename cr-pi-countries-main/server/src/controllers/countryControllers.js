const { Country, Activity } = require("../db");

const getAllCountries = async () => {
  const allCountries = await Country.findAll();
  return allCountries;
};

const searchCountryByName = async (name) => {
  const countryName = await Country.findAll({
    where: {
      name: name,
    },
  });
  return countryName;
};

const getCountryById = async (id) => {
  const countryId = await Country.findByPk(id, {
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "season"],
    },
  });

  return countryId;
};

module.exports = {
  getAllCountries,
  searchCountryByName,
  getCountryById,
};
