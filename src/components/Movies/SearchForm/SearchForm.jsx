import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useValidator from "../../../hooks/useValidator";

function SearchForm({
  handleSearchMovies,
  setIsSuccess,
  handleClickCheckbox,
  isChecked,
  isSuccess,
}) {
  const { values, handleInputChange } = useValidator();

  function onSubmit(e) {
    e.preventDefault();
    if (values.searchMovie) {
      handleSearchMovies(values.searchMovie);
      setIsSuccess("ok");
    } else {
      setIsSuccess("error");
    }
  }
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
          <button className="searchForm__button" type="submit" />
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
