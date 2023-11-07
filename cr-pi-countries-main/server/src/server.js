const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const { saveCountriesApiToDb } = require("./controllers/saveCountriesDb");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

// saveCountriesApiToDb();

module.exports = server;
