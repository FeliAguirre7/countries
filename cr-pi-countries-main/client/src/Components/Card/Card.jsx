import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  let activitiesSection;

  {
    if (props.Activities && props.Activities.length > 0) {
      activitiesSection = (
        <div>
          <p>Activities:</p>
          <ul>
            {props.Activities.map((activity) => (
              <li key={activity.id}>{activity.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      activitiesSection = <p>No activities</p>;
    }
  }

  return (
    <Link to={`/detail/${props.id}`} className={style.Link}>
      <div className={style.mainCard}>
        <img
          className={style.flag}
          src={props.flag}
          alt={`${props.name} flag`}
        />
        <p>Name: {props.name}</p>
        <p>Continent: {props.continent}</p>
        <p>Population: {props.population}</p>
        {activitiesSection}
      </div>
    </Link>
  );
};

export default Card;
