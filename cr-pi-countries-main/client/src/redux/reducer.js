import { GET_COUNTRIES, SEARCH_BY_NAME } from "./actionTypes";

const initialState = {
  countries: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };
    case SEARCH_BY_NAME:
      return { ...state, countries: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
