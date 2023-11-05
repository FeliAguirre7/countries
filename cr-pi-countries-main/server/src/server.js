const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const { getAllCountriesApiToDb } = require("./controllers/countryControllers");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

getAllCountriesApiToDb();

module.exports = server;
