import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <div className="searchForm">
      <form className="searchForm__form">
        <div className="searchForm__wrapper">
          <input
            type="text"
            className="searchForm__input"
            placeholder="Фильм"
            name="searchMovie"
            required
          />
          <button className="searchForm__button" type="submit" />
        </div>
        <FilterCheckbox />
      </form>
    </div>
  );
}

export default SearchForm;
