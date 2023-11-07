const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require("./src/db.js");
const {
  saveCountriesApiToDb,
} = require("./src/controllers/saveCountriesDb.js");
const PORT = 3001;

conn
  .sync({ alter: true })
  .then(async () => {
    const countryCount = await Country.count();
    if (countryCount === 0) {
      await saveCountriesApiToDb();
      console.log("Countries saved");
    } else {
      console.log("Countries already in db, skipping api call");
    }

    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
