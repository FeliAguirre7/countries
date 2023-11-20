const { Activity, Country } = require("../db");

const createActivity = async (
  id,
  name,
  difficulty,
  season,
  duration,
  countryId
) => {
  const newActivity = await Activity.create({
    id,
    name,
    difficulty,
    season,
    duration,
  });

  await newActivity.setCountries([]);

  if (countryId && countryId.length > 0) {
    const countries = await Country.findAll({
      where: {
        id: countryId,
      },
    });
    if (countries && countries.length > 0) {
      await newActivity.addCountries(countries);
    }
  }

  return newActivity;
};

const getAllAct = async () => {
  const allAct = await Activity.findAll();
  return allAct;
};

module.exports = { createActivity, getAllAct };
