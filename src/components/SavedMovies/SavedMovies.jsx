import React, { useCallback, useEffect, useState } from "react";
import "./SavedMovies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import { SHORT_MOVIE_DURATION } from "../../utils/constans";

function SavedMovies({
  savedMovies,
  isLoading,
  handleDeleteMovie,
  setIsSuccess,
  isSuccess,
}) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [query, setQuery] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const filter = useCallback((query, isChecked, movies) => {
    setQuery(query);
    setFilteredMovies(
      movies.filter((movie) => {
        const movieRu = String(movie.nameRU).toLowerCase().trim();
        const movieEn = String(movie.nameEN).toLowerCase().trim();
        const allMovie = movieRu.includes(query) || movieEn.includes(query);
        const shortMovie =
          (movieRu.includes(query) && movie.duration <= SHORT_MOVIE_DURATION) ||
          (movieEn.includes(query) && movie.duration <= SHORT_MOVIE_DURATION);
        if (isChecked) {
          return shortMovie;
        } else {
          return allMovie;
        }
      })
    );
  }, []);

  function handleClickCheckbox() {
    if (isChecked) {
      setIsChecked(false);
      filter(query, false, savedMovies);
    } else {
      setIsChecked(true);
      filter(query, true, savedMovies);
    }
  }

  function handleSearchMovies(query) {
    filter(query, isChecked, savedMovies);
  }

  useEffect(() => {
    setFilteredMovies(savedMovies);
    filter(query, isChecked, savedMovies);
  }, [filter, isChecked, query, savedMovies]);

  return (
    <section className="savedMovies">
      <SearchForm
        handleSearchMovies={handleSearchMovies}
        handleClickCheckbox={handleClickCheckbox}
        isChecked={isChecked}
        isSuccess={isSuccess}
        setIsSuccess={setIsSuccess}
      />
      {isLoading && <Preloader />}
      {!isLoading && (
        <MoviesCardList
          isLoading={isLoading}
          movies={filteredMovies}
          handleDeleteMovie={handleDeleteMovie}
        />
      )}
    </section>
  );
}

export default SavedMovies;
