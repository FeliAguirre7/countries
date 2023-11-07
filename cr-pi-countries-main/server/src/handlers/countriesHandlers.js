const OK = 200;
const ERROR = 404;

const {
  getAllCountries,
  searchCountryByName,
  getCountryById,
} = require("../controllers/countryControllers");

getAllCountriesHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const results = name
      ? await searchCountryByName(name)
      : await getAllCountries();
    res.status(200).json(results);
  } catch (error) {
    res.status(ERROR).json({ error: error.message });
  }
};

getCountryHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const country = await getCountryById(id);
    res.status(OK).json(country);
  } catch (error) {
    res.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  getAllCountriesHandler,
  getCountryHandler,
};
