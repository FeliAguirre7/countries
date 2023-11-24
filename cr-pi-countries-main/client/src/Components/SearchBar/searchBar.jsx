import { useState } from "react";
import "./searchBar.css";
import { useDispatch } from "react-redux";
import { searchByName, setPageNumber } from "../../redux/actions";

const SearchBar = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    dispatch(searchByName(name));
    dispatch(setPageNumber(1));
    setName("");
  };

  return (
    <div className="searchBarBackground">
      <div className="searchBar">
        <input
          value={name}
          type="search"
          onChange={handleChange}
          placeholder="Type a country name..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
