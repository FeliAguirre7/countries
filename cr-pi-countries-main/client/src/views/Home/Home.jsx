import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import SearchBar from "../../Components/SearchBar/searchBar";
import "./Home.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCountries } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <>
      <div className="Home">
        <h1>Countries</h1>
        <h1>
          <SearchBar />
        </h1>
        <CardsContainer countries={countries} />
      </div>
    </>
  );
};

export default Home;
