import React from "react";
import "./LinkToProfile.css";
import { NavLink, useLocation } from "react-router-dom";

function LinkToProfile() {
  const location = useLocation();
  return (
    <NavLink
      to="/profile"
      className={`linkToProfile ${
        location.pathname === "/" ? "linkToProfile_promo" : "linkToProfile_user"
      }`}
    >
      Аккаунт
    </NavLink>
  );
}

export default LinkToProfile;
