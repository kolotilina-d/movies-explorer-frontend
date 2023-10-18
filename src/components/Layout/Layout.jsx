import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NavTab from "../Main/NavTab/NavTab";

function Layout({
  isNavActive,
  handleOpenNavTab,
  handleCloseNavTab,
  setIsNavActive,
  isLogged,
}) {
  return (
    <>
      <NavTab
        active={isNavActive}
        handleCloseNavTab={handleCloseNavTab}
        setIsNavActive={setIsNavActive}
      />
      <Header
        handleOpenNavTab={handleOpenNavTab}
        isNavActive={isNavActive}
        isLogged={isLogged}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
