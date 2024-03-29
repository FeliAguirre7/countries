import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAct } from "../../redux/actions";
import "./Form.css";

const Form = () => {
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

  //setea el form sin el pais removido

  const handleRemoveCountry = (removedCountry) => {
    setForm((prevForm) => ({
      ...prevForm,
      countryId: prevForm.countryId.filter((id) => id !== removedCountry),
    }));

    //setea los paises seleccionados sin el pais removido

    setSelectedCountries(
      (prevSelected) =>
        new Set([...prevSelected].filter((id) => id !== removedCountry))
    );

    //limpia los errores del pais que he eliminado

    setErrors((prevErrors) => {
      const newCountryIdErrors = Array.isArray(prevErrors.countryId)
        ? prevErrors.countryId.filter((error) => error !== removedCountry)
        : [];
      return {
        ...prevErrors,
        countryId: newCountryIdErrors,
      };
    });
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
    dispatch(createAct(finalData));
    alert("activity created");

    resetForm();
  };

  const sortedCountries = [...originalCountries].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <>
      <div className="formContainer">
        <img
          className="img"
          src="https://calalalodge.com/wp-content/uploads/2021/10/activities-1024x720.jpg"
          alt=""
        />
        <form onSubmit={handleSubmit} className="mainForm">
          <h1 className="title">Create a tourist activity!</h1>
          <div>
            <label>Activity: </label>
            {/* <input
              type="text"
              onChange={handleChange}
              value={form.name}
              name="name"
            ></input> */}

            <label htmlFor="name" className="formLabel">
              Activity:{" "}
            </label>
            <select
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="formSelect"
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
            <label className="formLabel">Difficulty: </label>
            <input
              type="number"
              name="difficulty"
              value={form.difficulty}
              onChange={handleChange}
              className="formInput"
              min="1"
              max="5"
              required
            ></input>
          </div>

          <div>
            <label className="formLabel">Duration: </label>
            <input
              type="number"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              min="1"
              max="6"
              className="formInput"
            ></input>
            <label className="hs"> hs</label>
          </div>

          <div>
            <label className="formLabel">Season: </label>
            <select
              id="season"
              name="season"
              value={form.season}
              onChange={handleChange}
              className="formSelect"
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
            <label className="formLabel">Countries: </label>
            <select
              className="formSelect"
              name="countryId"
              onChange={handleChange}
              multiple
            >
              {sortedCountries.map((country) => {
                return (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                );
              })}
            </select>
            <ul>
              {form.countryId.map((countryId) => (
                <li key={countryId} className="countryList">
                  {
                    sortedCountries.find((country) => country.id === countryId)
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

          {Object.values(form).every((value) => value !== "") &&
            form.countryId.length > 0 && <button type="submit">Create</button>}
          {submitDisable && (
            <span style={{ color: "lightgreen" }}>
              Please fill in all fields
            </span>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
