import {
  GET_BY_ID,
  GET_COUNTRIES,
  SEARCH_BY_NAME,
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  RESET_FILTERS,
  PREV,
  NEXT,
  CREATE_ACT,
} from "./actionTypes";

const initialState = {
  countries: [],
  filterContinent: [],
  filterActivity: [],
  activities: [],
  detailById: [],
  appliedFilters: {
    continent: [],
    activity: [],
  },
  pageNumber: 1,
  noMatchesContinent: false,
  noMatchesActivity: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filterContinent: action.payload,
        filterActivity: action.payload,
      };
    case SEARCH_BY_NAME:
      return { ...state, countries: action.payload };
    case GET_BY_ID:
      return { ...state, detailById: action.payload };
    case FILTER_CONTINENT:
      let filteredByContinent;
      let finalFilterContinent;

      if (action.payload === "All") {
        filteredByContinent = [...state.filterContinent];
      } else {
        filteredByContinent = state.filterContinent.filter(
          (country) => country.continent === action.payload
        );
      }
      if (state.appliedFilters.activity === "All") {
        finalFilterContinent = filteredByContinent;
      } else {
        finalFilterContinent = filteredByContinent.filter((country) =>
          country.Activities.some(
            (activity) => activity.name === state.appliedFilters.activity
          )
        );
      }

      const noMatchesContinent = finalFilterContinent.length === 0;

      return {
        ...state,
        countries: finalFilterContinent,

        appliedFilters: {
          ...state.appliedFilters,
          continent: action.payload,
        },
        pageNumber: 1,
        noMatchesContinent,
      };
    case FILTER_ACTIVITY:
      let filterByAct;
      let finalFilterAct;

      if (action.payload === "All") {
        filterByAct = [...state.filterActivity];
      } else {
        filterByAct = state.filterActivity.filter((country) =>
          country.Activities.some(
            (activity) => activity.name === action.payload
          )
        );
      }

      if (state.appliedFilters.continent === "All") {
        finalFilterAct = filterByAct;
      } else {
        finalFilterAct = filterByAct.filter(
          (country) => country.continent === state.appliedFilters.continent
        );
      }

      const noMatchesActivity = finalFilterAct.length === 0;

      return {
        ...state,
        countries: finalFilterAct,
        appliedFilters: {
          ...state.appliedFilters,
          activity: action.payload,
        },
        pageNumber: 1,
        noMatchesActivity,
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
    case CREATE_ACT:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
