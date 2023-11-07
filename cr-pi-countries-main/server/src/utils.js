const cleanApi = (arr) => {
  const clean = arr.map((elem) => {
    return {
      id: elem.cca3,
      name: elem.name.official,
      image: elem.flags.svg,
      continent: elem.region,
      capital: elem.capital,
      subregion: elem.subregion,
      population: elem.population,
    };
  });
  return clean;
};

module.exports = {
  cleanApi,
};
