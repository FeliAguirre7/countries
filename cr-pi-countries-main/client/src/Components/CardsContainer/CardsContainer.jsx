import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "../CardsContainer/CardsContainer.module.css";
import Paginated from "../../Components/Paginated/Paginated";
import Filter from "../../Components/Filter/filter";

const CardsContainer = () => {
  const countries = useSelector((state) => state.countries);
  const pageNumber = useSelector((state) => state.pageNumber);
  const noMatchesContinent = useSelector((state) => state.noMatchesContinent);
  const noMatchesActivity = useSelector((state) => state.noMatchesActivity);

  const countriesPerPage = 10;

  let from = (pageNumber - 1) * countriesPerPage;
  let until = pageNumber * countriesPerPage;

  let pagesTotal = Math.floor(countries.length / countriesPerPage);

  const countriesOnPage = countries?.slice(from, until);

  console.log(countriesOnPage);

  if (noMatchesContinent) {
    return (
      <div>
        <Filter></Filter>
        <div>No matches found for continent</div>
        <Paginated pageNumber={pageNumber} pagesTotal={pagesTotal}></Paginated>
      </div>
    );
  } else if (noMatchesActivity) {
    return (
      <div>
        <Filter></Filter>
        <div>No matches found for activity</div>
        <Paginated pageNumber={pageNumber} pagesTotal={pagesTotal}></Paginated>
      </div>
    );
  } else {
    return (
      <div>
        <Filter></Filter>
        <div className={style.cardCont}>
          {countriesOnPage?.map((country) => {
            return (
              <Card
                id={country.id}
                flag={country.image}
                name={country.name}
                continent={country.continent}
                Activities={country.Activities}
              ></Card>
            );
          })}
        </div>
        <Paginated pageNumber={pageNumber} pagesTotal={pagesTotal}></Paginated>
      </div>
    );
  }
};

export default CardsContainer;
