import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "../CardsContainer/CardsContainer.module.css";
import Paginated from "../../Components/Paginated/Paginated";
import Filter from "../../Components/Filter/filter";

const CardsContainer = () => {
  const { countries, pageNumber } = useSelector((state) => state);

  const countriesPerPage = 8;

  let from = (pageNumber - 1) * countriesPerPage;
  let until = pageNumber * countriesPerPage;

  let pagesTotal = Math.floor(countries.length / countriesPerPage);

  const countriesOnPage = countries?.slice(from, until);

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
            ></Card>
          );
        })}
      </div>
      <Paginated pageNumber={pageNumber} pagesTotal={pagesTotal}></Paginated>
    </div>
  );
};

export default CardsContainer;
