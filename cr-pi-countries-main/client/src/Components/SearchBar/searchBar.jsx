import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";

const SearchBar = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    dispatch(searchByName(name));
    setName("");
  };

  return (
    <div>
      <input
        value={name}
        type="search"
        onChange={handleChange}
        placeholder="Type a country name..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
