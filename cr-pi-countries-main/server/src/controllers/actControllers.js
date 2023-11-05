const { Activity } = require("../db");

const createActivity = async (id, name, difficulty, season) => {
  return await Activity.create({ id, name, difficulty, season });
};

const getAllAct = async () => {
  const allAct = await Activity.findAll();
  return [...allAct];
};

module.exports = { createActivity, getAllAct };
