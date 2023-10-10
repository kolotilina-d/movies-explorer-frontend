import React from "react";
import "./Header.css";
import HeaderForUnknown from "./HeaderForUnknown/HeaderForUnknown";
import HeaderForUser from "./HeaderForUser/HeaderForUser";

function Header({ handleOpenNavTab, isLogged }) {
  return (
    <header className="header">
      {isLogged ? (
        <HeaderForUser handleOpenNavTab={handleOpenNavTab} />
      ) : (
        <HeaderForUnknown />
      )}
    </header>
  );
}

export default Header;
