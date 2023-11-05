const { Router } = require("express");

const countriesRouter = Router();

const {
  getAllCountriesHandler,
  getCountryHandler,
  getCountryNameHandler,
} = require("../handlers/countriesHandlers");

countriesRouter.get("/", getAllCountriesHandler);

countriesRouter.get("/:id", getCountryHandler);

countriesRouter.get("/search", getCountryNameHandler);

module.exports = countriesRouter;
