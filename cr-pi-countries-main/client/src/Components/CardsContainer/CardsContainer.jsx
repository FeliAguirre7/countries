import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "../CardsContainer/CardsContainer.module.css";
import Paginated from "../../Components/Paginated/Paginated";
import Filter from "../../Components/Filter/filter";
import { resetCountries } from "../../redux/actions";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const pageNumber = useSelector((state) => state.pageNumber);
  const appliedFilters = useSelector((state) => state.appliedFilters);
  const searchPerformed = useSelector((state) => state.searchPerformed);

  const countriesPerPage = 10;

  const filteredCountries = countries.filter((country) => {
    if (appliedFilters.continent === "All") {
      return true;
    }
    return country.continent === appliedFilters.continent;
  });

  let from = (pageNumber - 1) * countriesPerPage;
  let until = pageNumber * countriesPerPage;

  if (pageNumber === Math.ceil(filteredCountries.length / countriesPerPage)) {
    until = filteredCountries.length;
  }

  let pagesTotal = Math.ceil(filteredCountries?.length / countriesPerPage);

  const countriesOnPage = filteredCountries?.slice(from, until);

  const handleResetCountries = () => {
    dispatch(resetCountries());
  };

  return (
    <div>
      <Filter />
      <div className={style.cardCont}>
        {searchPerformed && countriesOnPage.length === 0 ? (
          <div className={style.noCountryFound}>No country found.</div>
        ) : (
          countriesOnPage.map((country) => (
            <Card
              key={country.name}
              id={country.id}
              flag={country.image}
              name={country.name}
              continent={country.continent}
              Activities={country.Activities}
              population={country.population}
            />
          ))
        )}
      </div>
      <Paginated pageNumber={pageNumber} pagesTotal={pagesTotal}></Paginated>
      {searchPerformed && (
        <button onClick={handleResetCountries}>Reset Countries</button>
      )}
    </div>
  );
};
export default CardsContainer;
