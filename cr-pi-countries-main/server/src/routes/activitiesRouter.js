const { Router } = require("express");

const activitiesRouter = Router();

const {
  getAllActHandler,
  postActHandler,
} = require("../handlers/activitiesHandlers");

activitiesRouter.get("/", getAllActHandler);

activitiesRouter.post("/", postActHandler);

module.exports = activitiesRouter;
