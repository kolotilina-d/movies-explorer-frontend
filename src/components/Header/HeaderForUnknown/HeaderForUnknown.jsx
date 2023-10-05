import React from "react";
import "./HeaderForUnknown.css";
import { Link, useLocation } from "react-router-dom";

function HeaderForUnknown() {
  const location = useLocation();

  return (
    <div
      className={`headerForUnknown ${
        location.pathname === "/" ? "headerForUnknown_promo" : ""
      }`}
    >
      <Link to="/" className="headerForUnknown__logo" />
      <div className="headerForUnknown__wrapper">
        <Link to="/signup" className="headerForUnknown__to-register">
          Регистрация
        </Link>
        <Link to="/signin" className="headerForUnknown__to-login">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default HeaderForUnknown;
