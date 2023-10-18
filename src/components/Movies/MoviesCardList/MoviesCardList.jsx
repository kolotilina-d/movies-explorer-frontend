import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import {
  ADD_CARDS_BIG_SCREEN,
  ADD_CARDS_MEDIUM_SCREEN,
  ADD_CARDS_SMALL_SCREEN,
  BIG_SCREEN,
  MEDIUM_SCREEN,
  QUANTITY_CARDS_BIG_SCREEN,
  QUANTITY_CARDS_EXTRA_SMALL_SCREEN,
  QUANTITY_CARDS_MEDIUM_SCREEN,
  QUANTITY_CARDS_SMALL_SCREEN,
  SMALL_SCREEN,
} from "../../../utils/constans";

function MoviesCardList({
  savedMovies,
  movies,
  handleDeleteMovie,
  handleSaveMovie,
  isSuccess,
}) {
  const { pathname } = useLocation();
  const [initialCards, setInitialCards] = useState(0);
  const sliceMovies = movies.slice(0, initialCards);

  useEffect(() => {
    const setInitialCardlist = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= BIG_SCREEN) {
        setInitialCards(QUANTITY_CARDS_BIG_SCREEN);
      } else if (screenWidth >= MEDIUM_SCREEN) {
        setInitialCards(QUANTITY_CARDS_MEDIUM_SCREEN);
      } else if (screenWidth >= SMALL_SCREEN) {
        setInitialCards(QUANTITY_CARDS_SMALL_SCREEN);
      } else {
        setInitialCards(QUANTITY_CARDS_EXTRA_SMALL_SCREEN);
      }
    };

    setInitialCardlist();
    window.addEventListener("resize", setInitialCardlist);

    return () => {
      window.removeEventListener("resize", setInitialCardlist);
    };
  }, []);

  const handleShowMore = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= BIG_SCREEN) {
      setInitialCards(initialCards + ADD_CARDS_BIG_SCREEN);
    } else if (screenWidth >= MEDIUM_SCREEN) {
      setInitialCards(initialCards + ADD_CARDS_MEDIUM_SCREEN);
    } else if (screenWidth >= MEDIUM_SCREEN) {
      setInitialCards(initialCards + ADD_CARDS_SMALL_SCREEN);
    } else {
      setInitialCards(initialCards + ADD_CARDS_SMALL_SCREEN);
    }
  };

  return (
    <div className="moviesCardList">
      <span className="moviesCardList_error">
        {isSuccess === "notFound"
          ? "Ошибка соединения"
          : movies.length === 0
          ? "Ничего не найдено"
          : ""}
      </span>
      <ul className="moviesCardList__list">
        {pathname === "/movies"
          ? sliceMovies.map((movie) => {
              return (
                <>
                  <MoviesCard
                    key={movie.id}
                    savedMovies={savedMovies}
                    saveMovie={handleSaveMovie}
                    deleteMovie={handleDeleteMovie}
                    movie={movie}
                  />
                </>
              );
            })
          : movies.map((movie) => {
              return (
                <MoviesCard
                  key={movie._id}
                  savedMovies={savedMovies}
                  deleteMovie={handleDeleteMovie}
                  movie={movie}
                />
              );
            })}
      </ul>
      {pathname === "/saved-movies" ? (
        <></>
      ) : sliceMovies.length === movies.length ? (
        <></>
      ) : (
        <div className="moreButton">
          <button className={`moreButton__more`} onClick={handleShowMore}>
            Ещё
          </button>
        </div>
      )}
    </div>
  );
}

export default MoviesCardList;
