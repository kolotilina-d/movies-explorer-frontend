import React, { useEffect, useState } from "react";
import "./MoviesCard.css";
import SaveButton from "../SaveButton/SaveButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { Link, useLocation } from "react-router-dom";
import { MOVIE_URL } from "../../../utils/constans";
import { convertDuration } from "../../../utils/utils";

function MoviesCard({ deleteMovie, saveMovie, movie, savedMovies }) {
  const [isSaved, setIsSaved] = useState();
  const { pathname } = useLocation();

  function handleDeleteMovie() {
    deleteMovie(movie);
  }

  function handleSaveMovie() {
    saveMovie(movie);
  }

  useEffect(() => {
    if (pathname === "/movies")
      setIsSaved(
        savedMovies.some((savedMovie) => savedMovie.movieId === movie.id)
      );
  }, [savedMovies, movie.id, setIsSaved, pathname]);

  return (
    <li className="moviesCard">
      <figure className="moviesCard__card">
        <Link to={movie.trailerLink} target="_blank">
          <img
            src={pathname === "/movies" ? MOVIE_URL(movie) : movie.image}
            alt={movie.name}
            className="moviesCard__image"
          />
        </Link>
        <div className="moviesCard__underscribe">
          <div className="moviesCard__wrapper">
            <h2 className="moviesCard__name">{movie.nameRU}</h2>
            <p className="moviesCard__duration">
              {convertDuration(movie.duration)}
            </p>
          </div>
          {pathname !== "/movies" ? (
            <DeleteButton handleDeleteMovie={handleDeleteMovie} />
          ) : (
            <SaveButton handleSaveMovie={handleSaveMovie} isSaved={isSaved} />
          )}
        </div>
      </figure>
    </li>
  );
}

export default MoviesCard;
