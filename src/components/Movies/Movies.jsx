import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoreButton from "./MoreButton/MoreButton";

function Movies() {
  return (
    <>
      <section className="movies">
        <SearchForm />
        <MoviesCardList name="movies" />
        <MoreButton />
      </section>
    </>
  );
}

export default Movies;
