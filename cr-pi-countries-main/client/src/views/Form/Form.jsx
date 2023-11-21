import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAct } from "../../redux/actions";
// import { useNavigate } from "react-router-dom";

const Form = () => {
  // const navigate = useNavigate();

  const dispatch = useDispatch();
  const originalCountries = useSelector((state) => state.originalCountries);

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

  const submitDisable =
    Object.values(form).some((value) => !value) || form.countryId.length === 0;

  const handleChange = (event) => {
    const { options, name, value } = event.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
      countryId: "",
    }));

    if (name === "countryId") {
      const selectedCountries = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setForm((prevForm) => ({
        ...prevForm,
        countryId: Array.from(
          new Set([...prevForm.countryId, ...selectedCountries])
        ),
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const handleRemoveCountry = (removedCountry) => {
    setForm((prevForm) => ({
      ...prevForm,
      countryId: prevForm.countryId.filter((id) => id !== removedCountry),
    }));

    setSelectedCountries(
      (prevSelected) =>
        new Set([...prevSelected].filter((id) => id !== removedCountry))
    );
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

  const isActivityAlreadyExists = (countryId, activityName) => {
    const countryActivities =
      originalCountries.find((country) => country.id === countryId)
        ?.Activities || [];
    return countryActivities.some((activity) => activity.name === activityName);
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

    const { countryId, name } = form;

    const isActivityAlreadyInSelectedCountries = countryId.some((id) =>
      isActivityAlreadyExists(id, name)
    );

    if (isActivityAlreadyInSelectedCountries) {
      setErrors({
        ...errors,
        countryId:
          "This activity already exists in one of the selected countries",
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
          <label htmlFor="name">Activity: </label>
          <select
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Diving">Diving</option>
            <option value="Senderism">Senderism</option>
            <option value="Kayaking">Kayaking</option>
            <option value="Skiing">Skiing</option>
            <option value="Cultural visits">Cultural visits</option>
          </select>
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
          <select
            id="season"
            name="season"
            value={form.season}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
          </select>
        </div>

        <div>
          <label>Countries: </label>
          <select name="countryId" onChange={handleChange} multiple>
            {originalCountries.map((country) => {
              return (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              );
            })}
          </select>
          <ul>
            {form.countryId.map((countryId) => (
              <li key={countryId}>
                {
                  originalCountries.find((country) => country.id === countryId)
                    .name
                }
                <button
                  type="button"
                  onClick={() => handleRemoveCountry(countryId)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <span style={{ color: "red" }}>{errors.countryId}</span>
        </div>

        <button type="submit" disabled={submitDisable}>
          Create
        </button>
      </form>
    </>
  );
};

export default Form;
