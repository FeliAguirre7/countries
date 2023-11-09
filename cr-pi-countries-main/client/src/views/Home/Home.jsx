import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <>
      <h1>this is my Home</h1>
      <CardsContainer></CardsContainer>
    </>
  );
};

export default Home;
