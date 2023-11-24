import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailById } from "../../redux/actions";
import "./Detail.css";

const Detail = () => {
  const detailById = useSelector((state) => state.detailById);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailById(id));
  }, [dispatch]);

  const renderActivities = () => {
    if (detailById.Activities && detailById.Activities.length > 0) {
      return (
        <div>
          <h2>Activities:</h2>
          <ul>
            {detailById.Activities.map((activity) => (
              <li key={activity.id}>
                <strong>Name:</strong> {activity.name} <br />
                <strong>Difficulty:</strong> {activity.difficulty} <br />
                <strong>Duration:</strong> {activity.duration} hours <br />
                <strong>Season:</strong> {activity.season}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <p>No activities available</p>;
    }
  };

  return (
    <>
      <div className="infoContainer">
        <div className="cardContainer">
          <h1 className="h1">Detail</h1>
          <h1 className="h1">Id: {detailById.id}</h1>
          <h1 className="h1">Name: {detailById.name}</h1>
          <h1 className="h1">Continent: {detailById.continent}</h1>
          <h1 className="h1">Capital: {detailById.capital}</h1>
          <h1 className="h1">Subregion: {detailById.subregion}</h1>
          <h1 className="h1">Population: {detailById.population}</h1>
          {renderActivities()}
        </div>
        <img
          className="flag"
          src={detailById.image}
          alt={`${detailById.name} flag`}
        />
      </div>
    </>
  );
};

export default Detail;
