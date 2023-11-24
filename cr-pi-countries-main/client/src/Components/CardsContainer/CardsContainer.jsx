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
  const noMatchesContinent = useSelector((state) => state.noMatchesContinent);
  const noMatchesActivity = useSelector((state) => state.noMatchesActivity);
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

  console.log(countriesOnPage);

  const handleResetCountries = () => {
    dispatch(resetCountries());
  };

  return (
    <div>
      <Filter />
      <div className={style.cardCont}>
        {countriesOnPage?.map((country) => {
          return (
            <Card
              id={country.id}
              flag={country.image}
              name={country.name}
              continent={country.continent}
              Activities={country.Activities}
              population={country.population}
            ></Card>
          );
        })}
      </div>
      <Paginated pageNumber={pageNumber} pagesTotal={pagesTotal}></Paginated>
      {searchPerformed && (
        <button onClick={handleResetCountries}>Reset Countries</button>
      )}

      {/* {!noMatchesContinent &&
        noMatchesActivity &&
        appliedFilters.continent === "All" && (
          <>
            {renderCards()}
            {renderPagination()}
            {renderResetButton()}
          </>
        )}

      {noMatchesContinent && !noMatchesActivity && renderCards()}
      {!noMatchesContinent &&
        noMatchesActivity &&
        appliedFilters.continent !== "All" &&
        renderCards()}
      {!noMatchesContinent && !noMatchesActivity && renderCards()}

      {!noMatchesContinent && !noMatchesActivity && renderPagination()}

      {renderResetButton()} */}
    </div>
  );

  //   if (noMatchesContinent) {
  //     //si no matchea por continente renderiza un div
  //     return (
  //       <div>
  //         <Filter></Filter>
  //         <div>No matches</div>
  //         <Paginated pageNumber={pageNumber} pagesTotal={pagesTotal}></Paginated>
  //       </div>
  //     );
  //   } else if (noMatchesActivity) {
  //     //si
  //     if (appliedFilters.continent === "All") {
  //       return (
  //         <div>
  //           <Filter></Filter>
  //           <div className={style.cardCont}>
  //             {countriesOnPage?.map((country) => (
  //               <Card
  //                 id={country.id}
  //                 flag={country.image}
  //                 name={country.name}
  //                 continent={country.continent}
  //                 Activities={country.Activities}
  //                 population={country.population}
  //               ></Card>
  //             ))}
  //           </div>
  //           <Paginated
  //             pageNumber={pageNumber}
  //             pagesTotal={pagesTotal}
  //           ></Paginated>
  //           {searchPerformed && (
  //             <button onClick={handleResetCountries}>Reset Countries</button>
  //           )}
  //         </div>
  //       );
  //     } else {
  //       // Renderizar los países filtrados por continente
  //       return (
  //         <div>
  //           <Filter></Filter>
  //           <div className={style.cardCont}>
  //             {countriesOnPage?.map((country) => (
  //               <Card
  //                 id={country.id}
  //                 flag={country.image}
  //                 name={country.name}
  //                 continent={country.continent}
  //                 Activities={country.Activities}
  //                 population={country.population}
  //               ></Card>
  //             ))}
  //           </div>
  //           <Paginated
  //             pageNumber={pageNumber}
  //             pagesTotal={pagesTotal}
  //           ></Paginated>
  //           {searchPerformed && (
  //             <button onClick={handleResetCountries}>Reset Countries</button>
  //           )}
  //         </div>
  //       );
  //     }
  //   } else {
  //     return (
  //       <div>
  //         <Filter></Filter>

  //         <div className={style.cardCont}>
  //           {countriesOnPage?.map((country) => (
  //             <Card
  //               id={country.id}
  //               flag={country.image}
  //               name={country.name}
  //               continent={country.continent}
  //               Activities={country.Activities}
  //               population={country.population}
  //             ></Card>
  //           ))}
  //         </div>
  //         <Paginated pageNumber={pageNumber} pagesTotal={pagesTotal}></Paginated>
  //         {searchPerformed && (
  //           <button onClick={handleResetCountries}>Reset Countries</button>
  //         )}
  //       </div>
  //     );
  //   }
};

export default CardsContainer;
