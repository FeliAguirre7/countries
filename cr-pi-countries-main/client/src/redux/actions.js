import axios from "axios";
import { GET_COUNTRIES } from "./actionTypes";

export const getCountries = () => {
  return async function (dispatch) {
    const backendReq = await axios.get("http://localhost:3001/countries");
    const countries = backendReq.data;
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};
