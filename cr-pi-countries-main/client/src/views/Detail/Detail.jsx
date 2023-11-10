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
      <p>Id: {detailById.id}</p>
      <p>Name: {detailById.name}</p>
    </>
  );
};

export default Detail;
