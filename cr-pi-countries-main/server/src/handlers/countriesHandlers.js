const OK = 200;
const ERROR = 404;

getAllCountriesHandler = async (req, res) => {
  res.send("NIY: ESTA RUTA TRAE TODOS LOS PAISES");

  // try {
  //   const allCountries = await getCountries();
  //   res.status(OK).json(allCountries);
  // } catch (error) {
  //   res.status(ERROR).json({ error: error.message });
  // }
};

getCountryNameHandler = async (req, res) => {
  const { name } = req.query;

  res.send(`NIY: est ruta trae la info del usuario ${name}`);

  // const { name } = req.query;
  // try {
  //   const countryName = await getCountryByName(name);

  //   if (countryName.length > 0) {
  //     res.status(OK).json(countryName);
  //   } else {
  //     res.status(ERROR).json({ message: "country not found" });
  //   }
  // } catch (error) {
  //   res.status(ERROR).json({ error: error.message });
  // }
};

getCountryHandler = async (req, res) => {
  const { id } = req.params;
  res.send(`NIY: ESTA RUTA TRAE EL PAIS CON EL ID NUMERO ${id}`);
  // const { id } = req.params;
  // try {
  //   const country = await getCountryById(id);
  //   res.status(OK).json(country);
  // } catch (error) {
  //   res.status(ERROR).json({ error: error.message });
  // }
};

module.exports = {
  getAllCountriesHandler,
  getCountryHandler,
  getCountryNameHandler,
};
