import React from "react";
import "./HeaderForUser.css";
import { NavLink, useLocation } from "react-router-dom";
import LinkToProfile from "../../LinkToProfile/LinkToProfile";

function HeaderForUser({ handleOpenNavTab }) {
  const location = useLocation();

  return (
    <div
      className={`headerForUser ${
        location.pathname === "/" ? "headerForUser_promo" : ""
      }`}
    >
      <div className="headerForUser__logo" />
      <div className="headerForUser__wrapper">
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive
              ? "headerForUser__to-link-active"
              : "headerForUser__to-link"
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) =>
            isActive
              ? "headerForUser__to-link-active"
              : "headerForUser__to-link"
          }
        >
          Сохранённые фильмы
        </NavLink>
      </div>
      <div className="headerForUser__profile-link">
        <LinkToProfile className=""></LinkToProfile>
      </div>

      <div className="headerForUser__nav">
        <button className="navButton" onClick={() => handleOpenNavTab()}>
          <span className="navButton__icon"></span>
        </button>
      </div>
    </div>
  );
}

export default HeaderForUser;
