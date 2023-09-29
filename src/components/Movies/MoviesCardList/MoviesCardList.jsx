import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ name }) {
  return (
    <div className="moviesCardList">
      <ul className="moviesCardList__list">
        <MoviesCard name={name} />
        <MoviesCard name={name} />
        <MoviesCard name={name} />
        <MoviesCard name={name} />
        <MoviesCard name={name} />
        <MoviesCard name={name} />
        <MoviesCard name={name} />
        <MoviesCard name={name} />
        <MoviesCard name={name} />
        <MoviesCard name={name} />
        <MoviesCard name={name} />
        <MoviesCard name={name} />
        <MoviesCard name={name} />
        <MoviesCard name={name} />
        <MoviesCard name={name} />
        <MoviesCard name={name} />
      </ul>
    </div>
  );
}

export default MoviesCardList;
