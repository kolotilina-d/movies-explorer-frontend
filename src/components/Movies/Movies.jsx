import React, { useCallback, useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import { getMovies } from "../../utils/MoviesApi";
import { SHORT_MOVIE_DURATION } from "../../utils/constans";

function Movies({
  savedMovies,
  isLoading,
  setIsLoading,
  setIsSuccess,
  isSuccess,
  handleSaveMovie,
}) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const filter = useCallback((query, isChecked, movies) => {
    setQuery(query);
    localStorage.setItem("query", JSON.stringify(query));
    localStorage.setItem("isChecked", JSON.stringify(isChecked));
    localStorage.setItem("movies", JSON.stringify(movies));
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
      filter(query, false, movies);
      localStorage.setItem("isChecked", JSON.stringify(false));
    } else {
      setIsChecked(true);
      filter(query, true, movies);
      localStorage.setItem("isChecked", JSON.stringify(true));
    }
  }

  function handleSearchMovies(query) {
    setIsSubmit(true);
    setIsLoading(true);
    if (movies.length !== 0) {
      filter(query, isChecked, movies);
      setIsLoading(false);
      setIsSubmit(false);
    } else {
      getMovies()
        .then((movie) => {
          setMovies(movie);
          filter(query, isChecked, movie);
        })
        .catch((err) => {
          setIsSuccess("notFound");
          console.error(`Ошибка при поиске фильмов ${err}`);
        })
        .finally(() => {
          setIsLoading(false);
          setIsSubmit(false);
        });
    }
  }

  useEffect(() => {
    if (
      localStorage.getItem("movies") &&
      localStorage.getItem("query") &&
      localStorage.getItem("isChecked")
    ) {
      const movies = JSON.parse(localStorage.movies);
      const query = JSON.parse(localStorage.query);
      const isChecked = JSON.parse(localStorage.isChecked);
      setQuery(query);
      setIsChecked(isChecked);
      setMovies(movies);
      filter(query, isChecked, movies);
    } else {
      return;
    }
  }, [filter]);

  return (
    <>
      <main className="movies">
        <SearchForm
          handleSearchMovies={handleSearchMovies}
          handleClickCheckbox={handleClickCheckbox}
          isChecked={isChecked}
          setIsSuccess={setIsSuccess}
          isSuccess={isSuccess}
          isSubmit={isSubmit}
          query={query}
        />
        {isLoading && <Preloader />}
        {!isLoading && (
          <>
            <MoviesCardList
              isSuccess={isSuccess}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              movies={filteredMovies}
              savedMovies={savedMovies}
              handleSaveMovie={handleSaveMovie}
            />
          </>
        )}
      </main>
    </>
  );
}

export default Movies;
