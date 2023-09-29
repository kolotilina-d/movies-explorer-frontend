import React, { useState } from "react";
import "./Header.css";
import HeaderForUnknown from "./HeaderForUnknown/HeaderForUnknown";
import HeaderForUser from "./HeaderForUser/HeaderForUser";

function Header({ handleOpenNavTab }) {
  const [isLogged] = useState(true);

  return (
    <header className="header">
      {isLogged ? (
        <HeaderForUser handleOpenNavTab={handleOpenNavTab}/>
      ) : (
        <HeaderForUnknown />
      )}
    </header>
  );
}

export default Header;
