import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`/detail/${props.id}`}>
      <div className={style.mainCard}>
        <img
          className={style.flag}
          src={props.flag}
          alt={`${props.name} flag`}
        />
        <p>Name: {props.name}</p>
        <p>Continent: {props.continent}</p>
      </div>
    </Link>
  );
};

export default Card;
