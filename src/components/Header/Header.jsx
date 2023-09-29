import React, { useState } from "react";
import "./Header.css";
import HeaderForUnknown from "./HeaderForUnknown/HeaderForUnknown";
import HeaderForUser from "./HeaderForUser/HeaderForUser";

function Header({ handleOpenNavTab }) {
  const [isLogged] = useState(true);

  return (
    <div className="header">
      {isLogged ? (
        <HeaderForUser handleOpenNavTab={handleOpenNavTab} />
      ) : (
        <HeaderForUnknown />
      )}
    </div>
  );
}

export default Header;
