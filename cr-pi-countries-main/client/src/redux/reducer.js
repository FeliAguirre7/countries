import { GET_BY_ID, GET_COUNTRIES, SEARCH_BY_NAME } from "./actionTypes";

const initialState = {
  countries: [],
  detailById: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };
    case SEARCH_BY_NAME:
      return { ...state, countries: action.payload };
    case GET_BY_ID:
      return { ...state, detailById: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
