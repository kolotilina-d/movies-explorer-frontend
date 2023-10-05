import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__links">
        <Link
          to="https://github.com/kolotilina-d/how-to-learn"
          className="portfolio__link"
          target="_blank"
        >
          Статичный сайт
        </Link>
        <Link
          to="https://github.com/kolotilina-d/russian-travel"
          className="portfolio__link"
          target="_blank"
        >
          Адаптивный сайт
        </Link>
        <Link
          to="https://github.com/kolotilina-d/react-mesto-auth"
          className="portfolio__link"
          target="_blank"
        >
          Одностраничное приложение
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
