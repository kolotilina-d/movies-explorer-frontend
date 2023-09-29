import React from "react";
import "./NavTab.css";
import LinkToProfile from "../../LinkToProfile/LinkToProfile";
import { NavLink } from "react-router-dom";

function NavTab({ active, handleCloseNavTab }) {
  return (
    <section className="navTab">
      <div className={active ? "navTab__wrapper" : "navTab__wrapper-inactive"}>
        <button className="navTab__close" onClick={() => handleCloseNavTab()}/>
        <nav className="navTab__list">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navTab__link-active" : "navTab__link"
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "navTab__link-active" : "navTab__link"
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              isActive ? "navTab__link-active" : "navTab__link"
            }
          >
            Сохраненные фильмы
          </NavLink>
          <div className="navTab__profile">
            <LinkToProfile />
          </div>
        </nav>
      </div>
    </section>
  );
}

export default NavTab;
