import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Route, Routes } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error from "../Error/Error";
import Layout from "../Layout/Layout";
import NavTab from "../Main/NavTab/NavTab";

function App() {
  const [isNavActive, setIsNavActive] = useState(false);
  function handleOpenNavTab() {
    setIsNavActive(true);
  }

  function handleCloseNavTab() {
    setIsNavActive(false);
  }

  return (
    <div className="App">
      <div className="body">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout
                  isNavActive={isNavActive}
                  handleOpenNavTab={handleOpenNavTab}
                  handleCloseNavTab={handleCloseNavTab}
                />
              </>
            }
          >
            <Route
              index
              element={
                <>
                  <Main />
                </>
              }
            ></Route>
          </Route>
          <Route
            path="/movies"
            element={
              <>
                <Layout
                  isNavActive={isNavActive}
                  handleOpenNavTab={handleOpenNavTab}
                  handleCloseNavTab={handleCloseNavTab}
                />
              </>
            }
          >
            <Route
              index
              element={
                <>
                  <Movies />
                </>
              }
            ></Route>
          </Route>
          <Route
            path="/saved-movies"
            element={
              <>
                <Layout
                  isNavActive={isNavActive}
                  handleOpenNavTab={handleOpenNavTab}
                  handleCloseNavTab={handleCloseNavTab}
                />
              </>
            }
          >
            <Route
              index
              element={
                <>
                  <SavedMovies />
                </>
              }
            ></Route>
          </Route>
          <Route
            path="/profile"
            element={
              <>
                <NavTab
                  active={isNavActive}
                  handleCloseNavTab={handleCloseNavTab}
                />
                <Header handleOpenNavTab={handleOpenNavTab} />
                <Profile />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Register />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/*"
            element={
              <>
                <Error />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
