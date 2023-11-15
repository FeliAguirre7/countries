import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  filterByActivity,
  filterContinent,
  resetFilters,
} from "../../redux/actions";

export default function Filter() {
  const dispatch = useDispatch();

  const handleContinentChange = (event) => {
    const continent = event.target.value;
    dispatch(filterContinent(continent));
    console.log(filterContinent(continent));
  };

  const handleActivityChange = (event) => {
    const activity = event.target.value;
    dispatch(filterByActivity(activity));
  };

  return (
    <>
      <div>
        <label htmlFor="continentFilter">Filter by continent: </label>
        <select id="continentFilter" onChange={handleContinentChange}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <label htmlFor="activityFilter">Filter by activity: </label>
        <select id="activityFilter" onChange={handleActivityChange}>
          <option value="All">All</option>
          <option value="Diving">Diving</option>
          <option value="Senderism">Senderism</option>
          <option value="Kayaking">Kayaking</option>
          <option value="Skiing">Skiing</option>
        </select>
      </div>
    </>
  );
}
