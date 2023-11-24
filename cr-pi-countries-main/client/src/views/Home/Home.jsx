import CardsContainer from "../../Components/CardsContainer/CardsContainer";
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
        <CardsContainer countries={countries} />
      </div>
    </>
  );
};

export default Home;
