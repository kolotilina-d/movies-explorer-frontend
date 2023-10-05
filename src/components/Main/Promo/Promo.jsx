import React from "react";
import "./Promo.css";
import { HashLink } from "react-router-hash-link";

function Promo() {
  return (
    <div className="promo">
      <div className="promo__wrapper">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="promo__text">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <HashLink smooth to="#aboutProject" className="promo__link">
          Узнать больше
        </HashLink>
      </div>
    </div>
  );
}

export default Promo;
