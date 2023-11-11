import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailById } from "../../redux/actions";

const Detail = () => {
  const detailById = useSelector((state) => state.detailById);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailById(id));
  }, [dispatch]);

  return (
    <>
      <h1>Detail</h1>
      <h1>Id: {detailById.id}</h1>
      <h1>Name: {detailById.name}</h1>
      <h1>Continent: {detailById.continent}</h1>
      <h1>Capital: {detailById.capital}</h1>
      <h1>Subregion: {detailById.subregion}</h1>
      <h1>Population: {detailById.population}</h1>
      <h1>Name: {detailById.name}</h1>
      <img src={detailById.image} alt={`${detailById.name} flag`} />
    </>
  );
};

export default Detail;
