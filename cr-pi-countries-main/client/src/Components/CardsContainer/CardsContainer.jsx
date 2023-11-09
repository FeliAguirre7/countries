import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "../CardsContainer/CardsContainer.module.css";

const CardsContainer = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <div className={style.cardCont}>
      {countries.map((country) => {
        return (
          <Card
            flag={country.image}
            name={country.name}
            continent={country.continent}
          ></Card>
        );
      })}
    </div>
  );
};

export default CardsContainer;
