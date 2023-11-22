import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "../Filter/filter.module.css";

import {
  filterByActivity,
  filterContinent,
  setSort,
  applySort,
} from "../../redux/actions";

export default function Filter() {
  const dispatch = useDispatch();
  const appliedFilters = useSelector((state) => state.appliedFilters);

  const sortBy = useSelector((state) => state.sortBy);
  const sortOrder = useSelector((state) => state.sortOrder);

  const [localSortBy, setLocalSortBy] = useState("name");
  const [localSortOrder, setLocalSortOrder] = useState("asc");

  useEffect(() => {
    setLocalSortBy(sortBy);
    setLocalSortOrder(sortOrder);
  }, [sortBy, sortOrder]);

  const handleContinentChange = (event) => {
    const continent = event.target.value;
    dispatch(filterContinent(continent));
    handleApplySort();
    console.log(filterContinent(continent));
  };

  const handleActivityChange = (event) => {
    const activity = event.target.value;
    dispatch(filterByActivity(activity));
    handleApplySort();
  };

  const handleSortByChange = (event) => {
    const newSortBy = event.target.value;
    setLocalSortBy(newSortBy);
  };

  const handleSortOrderChange = () => {
    const newSortOrder = localSortOrder === "asc" ? "desc" : "asc";
    setLocalSortOrder(newSortOrder);
  };

  const handleApplySort = () => {
    dispatch(setSort(localSortBy, localSortOrder));
    dispatch(applySort());
  };

  return (
    <>
      <div className={style.filter}>
        <label htmlFor="continentFilter">Filter by continent: </label>
        <select
          id="continentFilter"
          value={appliedFilters.continent}
          onChange={handleContinentChange}
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Asia">Asia</option>
        </select>

        <label htmlFor="activityFilter">Filter by activity: </label>
        <select
          id="activityFilter"
          value={appliedFilters.activity}
          onChange={handleActivityChange}
        >
          <option value="All">All</option>
          <option value="Diving">Diving</option>
          <option value="Senderism">Senderism</option>
          <option value="Kayaking">Kayaking</option>
          <option value="Skiing">Skiing</option>
          <option value="Cultural visits">Cultural visits</option>
        </select>

        <label htmlFor="sortBy">Sort by: </label>
        <select id="sortBy" onChange={handleSortByChange} value={localSortBy}>
          <option value="name">Name</option>
          <option value="population">Population</option>
        </select>

        <label htmlFor="sortOrder">Sort order: </label>
        <select
          id="sortOrder"
          onChange={handleSortOrderChange}
          value={localSortOrder}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button onClick={handleApplySort}>Apply sort</button>
      </div>
    </>
  );
}
