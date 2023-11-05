const OK = 200;
const ERROR = 404;

const { createActivity, getAllAct } = require("../controllers/actControllers");

getAllActHandler = async (req, res) => {
  try {
    const allActivities = await getAllAct();
    res.status(OK).json(allActivities);
  } catch (error) {
    res.status(ERROR).json({ error: error.message });
  }
};

postActHandler = async (req, res) => {
  try {
    const { id, name, difficulty, season } = req.body;
    const newAct = await createActivity(id, name, difficulty, season);
    res.status(OK).json(newAct);
  } catch (error) {
    res.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  getAllActHandler,
  postActHandler,
};
