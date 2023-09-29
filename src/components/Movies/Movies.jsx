import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoreButton from "./MoreButton/MoreButton";

function Movies() {
  return (
    <>
      <main className="movies">
        <SearchForm />
        <MoviesCardList name="movies" />
        <MoreButton />
      </main>
    </>
  );
}

export default Movies;
