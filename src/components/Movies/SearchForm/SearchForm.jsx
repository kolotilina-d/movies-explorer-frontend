import React, { useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useValidator from "../../../hooks/useValidator";
import { useLocation } from "react-router-dom";

function SearchForm({
  handleSearchMovies,
  setIsSuccess,
  handleClickCheckbox,
  isChecked,
  isSuccess,
  isSubmit,
  savedMovies,
  query,
}) {
  const { values, handleInputChange, resetForm } = useValidator();
  const location = useLocation();

  function onSubmit(e) {
    e.preventDefault();
    if (values.searchMovie) {
      handleSearchMovies(values.searchMovie);
      setIsSuccess("ok");
    } else {
      setIsSuccess("error");
    }
  }

  useEffect(() => {
    if (location.pathname === "/saved-movies") {
      resetForm({ searchMovie: "" });
    } else {
      resetForm({ searchMovie: query });
    }
  }, [query, resetForm, location.pathname, savedMovies]);

  return (
    <div className="searchForm">
      <form className="searchForm__form" noValidate onSubmit={onSubmit}>
        <div className="searchForm__wrapper">
          <input
            type="text"
            className="searchForm__input"
            placeholder="Фильм"
            name="searchMovie"
            required
            onChange={handleInputChange}
            value={values.searchMovie || ""}
          />
          <button
            className="searchForm__button"
            type="submit"
            disabled={isSubmit}
          />
        </div>
        <span
          className={`searchForm__error ${
            isSuccess === "error" ? "searchForm__error_active" : ""
          }`}
        >
          {isSuccess === "error" ? "Поле не должно быть пустым" : ""}
        </span>
        <FilterCheckbox
          handleClickCheckbox={handleClickCheckbox}
          isChecked={isChecked}
        />
      </form>
    </div>
  );
}

export default SearchForm;
