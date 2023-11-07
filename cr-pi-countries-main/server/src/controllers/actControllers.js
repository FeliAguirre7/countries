const { Activity, Country } = require("../db");

const createActivity = async (id, name, difficulty, season, countryId) => {
  const newActivity = await Activity.create({ id, name, difficulty, season });

  const country = await Country.findByPk(countryId);

  if (country) {
    await newActivity.addCountry(country);
  }

  return newActivity;
};

const getAllAct = async () => {
  const allAct = await Activity.findAll();
  return allAct;
};

module.exports = { createActivity, getAllAct };
