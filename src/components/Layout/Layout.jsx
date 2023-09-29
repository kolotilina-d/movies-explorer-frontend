import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NavTab from "../Main/NavTab/NavTab";

function Layout({ isNavActive, handleOpenNavTab, handleCloseNavTab }) {
  return (
    <>
      <NavTab active={isNavActive} handleCloseNavTab={handleCloseNavTab} />
      <Header handleOpenNavTab={handleOpenNavTab}/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
