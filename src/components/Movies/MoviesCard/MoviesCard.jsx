import React from "react";
import "./MoviesCard.css";
import card from "../../../images/test-picture.jpg";
import SaveButton from "../SaveButton/SaveButton";
import DeleteButton from "../DeleteButton/DeleteButton";

function MoviesCard({ name }) {
  return (
    <li className="moviesCard">
      <figure className="moviesCard__card">
        <img className="moviesCard__image" src={card} alt="постер фильма" />
        <div className="moviesCard__underscribe">
          <div className="moviesCard__wrapper">
            <h2 className="moviesCard__name">
              {/* {card.name} */}33 слова о дизайне
            </h2>
            <p className="moviesCard__duration">{/* {card.duration} */}1ч42м</p>
          </div>
          {name === "movies" ? <SaveButton /> : <DeleteButton />}
        </div>
      </figure>
    </li>
  );
}

export default MoviesCard;
