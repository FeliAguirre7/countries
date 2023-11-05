const { Router } = require("express");
const countriesRouter = require("./countriesRouter");
const activitiesRouter = require("./activitiesRouter");

const mainRouter = Router();

mainRouter.use("/countries", countriesRouter);
mainRouter.use("/activities", activitiesRouter);

module.exports = mainRouter;
