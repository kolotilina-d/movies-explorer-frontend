import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <h2 className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__underline" />
      <div className="footer__wrapper">
        <p className="footer__copyright">© 2020</p>
        <div className="footer__links">
          <Link
            to="https://practicum.yandex.ru/"
            target="_blank"
            className="footer__link"
          >
            Яндекс.Практикум
          </Link>
          <Link
            to="https://github.com/kolotilina-d"
            target="_blank"
            className="footer__link"
          >
            Github
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
