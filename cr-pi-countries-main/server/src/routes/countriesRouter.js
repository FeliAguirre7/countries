const { Router } = require("express");

const countriesRouter = Router();

const {
  getAllCountriesHandler,
  getCountryHandler,
} = require("../handlers/countriesHandlers");

countriesRouter.get("/", getAllCountriesHandler);

countriesRouter.get("/:id", getCountryHandler);

module.exports = countriesRouter;
