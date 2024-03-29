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
  SET_SORT,
  APPLY_SORT,
  RESET_HOME_STATE,
  SET_PAGE_NUMBER,
  RESET_COUNTRIES,
} from "./actionTypes";

const initialState = {
  countries: [],
  filterContinent: [],
  filterActivity: [],
  activities: [],
  detailById: [],
  appliedFilters: {
    continent: "All",
    activity: "All",
  },
  pageNumber: 1,
  noMatchesContinent: false,
  noMatchesActivity: false,
  sortBy: "name",
  sortOrder: "asc",
  originalCountries: [],
  searchPerformed: false,
};

const applyFilters = (countries, appliedFilters, sortBy, sortOrder) => {
  let filteredCountries = countries.filter((country) => {
    if (
      appliedFilters.continent !== "All" &&
      country.continent !== appliedFilters.continent
    ) {
      return false;
    }

    if (
      appliedFilters.activity !== "All" &&
      !country.Activities.some(
        (activity) => activity.name === appliedFilters.activity
      )
    ) {
      return false;
    }

    return true;
  });

  const sortedCountries = filteredCountries.slice().sort((a, b) => {
    const keyA = a[sortBy];
    const keyB = b[sortBy];

    if (keyA < keyB) return sortOrder === "asc" ? -1 : 1;
    if (keyA > keyB) return sortOrder === "asc" ? 1 : -1;

    return 0;
  });

  return sortedCountries;
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      const filteredCountries = applyFilters(
        action.payload,
        state.appliedFilters,
        state.sortBy,
        state.sortOrder
      );

      return {
        ...state,
        countries: filteredCountries,
        filterContinent: action.payload,
        filterActivity: action.payload,
        originalCountries: action.payload,
      };
    case SEARCH_BY_NAME:
      console.log("Search results:", action.payload);
      return { ...state, countries: action.payload, searchPerformed: true };
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
      const filteredActivity =
        action.payload === "All"
          ? state.filterActivity
          : state.filterActivity.filter((country) =>
              country.Activities.some(
                (activity) => activity.name === action.payload
              )
            );

      const filteredActivityByContinent =
        state.appliedFilters.continent === "All"
          ? filteredActivity
          : filteredActivity.filter(
              (country) => country.continent === state.appliedFilters.continent
            );

      return {
        ...state,
        countries: filteredActivityByContinent,
        appliedFilters: {
          ...state.appliedFilters,
          activity: action.payload,
        },
        pageNumber: 1,
        noMatchesActivity: filteredActivityByContinent.length === 0,
        noMatchesContinent: false,
      };
    case SET_SORT:
      return {
        ...state,
        sortBy: action.payload.sortBy,
        sortOrder: action.payload.sortOrder,
      };

    case APPLY_SORT:
      const sortedCountries = state.countries.slice().sort((a, b) => {
        const keyA = a[state.sortBy];
        const keyB = b[state.sortBy];

        if (keyA < keyB) return state.sortOrder === "asc" ? -1 : 1;
        if (keyA > keyB) return state.sortOrder === "asc" ? 1 : -1;

        return 0;
      });

      return {
        ...state,
        countries: sortedCountries,
      };

    case RESET_HOME_STATE:
      return {
        ...initialState,
      };

    case RESET_COUNTRIES:
      const resetCountries = applyFilters(
        state.originalCountries,
        state.appliedFilters,
        state.sortBy,
        state.sortOrder
      );
      return {
        ...state,
        countries: resetCountries,
        noMatchesContinent: false,
        noMatchesActivity: false,
        pageNumber: 1,
        searchPerformed: false,
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
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
