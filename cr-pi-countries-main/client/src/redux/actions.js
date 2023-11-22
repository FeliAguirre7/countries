import axios from "axios";
import {
  GET_COUNTRIES,
  SEARCH_BY_NAME,
  GET_BY_ID,
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  RESET_FILTERS,
  NEXT,
  PREV,
  CREATE_ACT,
  SET_SORT,
  APPLY_SORT,
  RESET_HOME_STATE,
} from "./actionTypes";

export const getCountries = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/countries");
    const countries = response.data;
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

export const resetHomeState = () => ({
  type: RESET_HOME_STATE,
});

export const searchByName = (name) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/countries?name=${name.trim()}`
    );
    const results = response.data;
    dispatch({ type: SEARCH_BY_NAME, payload: results });
  };
};

export const getDetailById = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/countries/${id}`);
    const results = response.data;
    dispatch({ type: GET_BY_ID, payload: results });
  };
};

export const filterContinent = (continent) => {
  return {
    type: FILTER_CONTINENT,
    payload: continent,
  };
};

export const filterByActivity = (activity) => {
  return {
    type: FILTER_ACTIVITY,
    payload: activity,
  };
};

export const setSort = (sortBy, sortOrder) => {
  return {
    type: SET_SORT,
    payload: { sortBy, sortOrder },
  };
};

export const applySort = () => {
  return {
    type: APPLY_SORT,
  };
};

export const resetFilters = () => {
  return {
    type: RESET_FILTERS,
  };
};

export const next = () => {
  return {
    type: NEXT,
  };
};

export const prev = () => {
  return {
    type: PREV,
  };
};

export const createAct = (activity) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/activities",
        activity
      );
      return dispatch({
        type: CREATE_ACT,
        payload: data,
      });
    } catch (error) {
      alert(`lo sentimos, la actividad ya se encuentra en la db`);
    }
  };
};
