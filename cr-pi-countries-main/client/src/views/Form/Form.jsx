import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAct } from "../../redux/actions";
// import { useNavigate } from "react-router-dom";

const Form = () => {
  // const navigate = useNavigate();

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  });

  const [selectedCountries, setSelectedCountries] = useState([]);

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  });

  const handleChange = (event) => {
    const { options, name, value } = event.target;

    if (name === "countryId") {
      const selectedCountries = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setForm((prevForm) => ({
        ...prevForm,
        countryId: selectedCountries.map((country) => country.id),
      }));

      setSelectedCountries((prevSelected) => [
        ...prevSelected,
        ...selectedCountries,
      ]);
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countryId: [],
    });
    setSelectedCountries([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.countryId.length === 0) {
      setErrors({
        ...errors,
        countryId: "please select at least one country",
      });
      return;
    }

    const finalData = {
      ...form,
    };
    console.log(finalData);
    dispatch(createAct(finalData));
    alert("activity created");

    resetForm();
  };

  return (
    <>
      <h1>Create a tourist activity!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label>Difficulty: </label>
          <input
            type="number"
            name="difficulty"
            value={form.difficulty}
            onChange={handleChange}
            min="1"
            max="5"
            required
          ></input>
        </div>

        <div>
          <label>Duration: </label>
          <input
            type="number"
            name="duration"
            value={form.duration}
            onChange={handleChange}
          ></input>
          <label> hs</label>
        </div>

        <div>
          <label>Season: </label>
          <input
            type="text"
            name="season"
            value={form.season}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label>Country: </label>
          <select name="countryId" onChange={handleChange} multiple>
            {countries.map((country) => {
              return (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              );
            })}
          </select>
          <ul>
            {selectedCountries.map((countryId) => (
              <li key={countryId}>
                {countries.find((country) => country.id === countryId).name}
              </li>
            ))}
          </ul>
          <span style={{ color: "red" }}>{errors.countryId}</span>
        </div>

        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default Form;
