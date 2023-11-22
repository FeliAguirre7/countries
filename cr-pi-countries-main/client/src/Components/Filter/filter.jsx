import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
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

  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleContinentChange = (event) => {
    const continent = event.target.value;
    dispatch(filterContinent(continent));
    console.log(filterContinent(continent));
  };

  const handleActivityChange = (event) => {
    const activity = event.target.value;
    dispatch(filterByActivity(activity));
  };

  const handleSortByChange = (event) => {
    const newSortBy = event.target.value;
    setSortBy(newSortBy);
  };

  const handleSortOrderChange = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  const handleApplySort = () => {
    dispatch(setSort(sortBy, sortOrder));
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
        <select id="sortBy" onChange={handleSortByChange} value={sortBy}>
          <option value="name">Name</option>
          <option value="population">Population</option>
        </select>

        <label htmlFor="sortOrder">Sort order: </label>
        <select
          id="sortOrder"
          onChange={handleSortOrderChange}
          value={sortOrder}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button onClick={handleApplySort}>Apply sort</button>
      </div>
    </>
  );
}
