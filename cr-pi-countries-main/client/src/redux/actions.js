import axios from "axios";
import { GET_COUNTRIES, SEARCH_BY_NAME } from "./actionTypes";

export const getCountries = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/countries");
    const countries = response.data;
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

export const searchByName = (name) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/countries?name=${name.trim()}`
    );
    const results = response.data;
    dispatch({ type: SEARCH_BY_NAME, payload: results });
  };
};
