import {
  GET_BY_ID,
  GET_COUNTRIES,
  SEARCH_BY_NAME,
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  RESET_FILTERS,
  PREV,
  NEXT,
} from "./actionTypes";

const initialState = {
  countries: [],
  detailById: [],
  appliedFilters: {
    continent: [],
    activity: [],
  },
  pageNumber: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };
    case SEARCH_BY_NAME:
      return { ...state, countries: action.payload };
    case GET_BY_ID:
      return { ...state, detailById: action.payload };
    case FILTER_CONTINENT:
      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          continent: action.payload,
        },
      };
    case FILTER_ACTIVITY:
      return {
        ...state,
        appliedFilters: { ...state.appliedFilters, activity: action.payload },
      };
    case RESET_FILTERS:
      return {
        ...state,
        appliedFilters: {
          continent: [],
          activity: [],
        },
      };
    case NEXT:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };
    case PREV:
      return {
        ...state,
        pageNumber: state.pageNumber - 1,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
