import React, { useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error from "../Error/Error";
import Layout from "../Layout/Layout";
import NavTab from "../Main/NavTab/NavTab";
import {
  deleteSavedMovie,
  editUser,
  getSavedMovies,
  getUser,
  saveMovie,
} from "../../utils/MainApi";
import { autorisation, autentification } from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute";
import UnProtectedRoute from "../UnProtectedRoute";

function App() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSuccess, setIsSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  function handleOpenNavTab() {
    setIsNavActive(true);
  }

  function handleCloseNavTab() {
    setIsNavActive(false);
  }

  useEffect(() => {
    if (localStorage.jwt) {
      getUser(localStorage.jwt)
        .then((data) => {
          setIsLogged(true);
          setCurrentUser(data);
          navigate(location.pathname, { replace: false });
        })
        .catch((err) => console.log(err));

      getSavedMovies(localStorage.jwt)
        .then((movies) => {
          setSavedMovies(movies);
        })
        .catch((err) => console.log(err));
    }
  }, [isLogged]);

  function handleLogin(email, pass) {
    setIsSubmit(true);
    autorisation(email, pass)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLogged(true);
        navigate("/movies", { replace: [false] });
        Promise.all([getUser(res.token), getSavedMovies(res.token)])
          .then(([userInfo, userMovies]) => {
            setCurrentUser(userInfo);
            localStorage.setItem("movies", JSON.stringify(userMovies));
            setSavedMovies(userMovies);
            setIsSuccess("ok");
          })
          .catch((err) => {
            setIsSuccess("err");
            console.log(err);
          });
      })
      .finally(() => {
        setIsSuccess("ok");
        setIsSubmit(true);
      })
      .catch((err) => {
        setIsSuccess("error");
        console.log("Ошибка авторизации", err);
      });
  }

  function handleRegistration({ name, email, password }) {
    setIsSubmit(true);

    autentification({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
        setIsSuccess("ok");
        navigate("/movies", { replace: [false] });
      })
      .finally(() => setIsSubmit(false))
      .catch((err) => {
        setIsSuccess("error");
        console.log("Ошибка регистрации", err);
      });
  }

  function handleOnLogOut() {
    localStorage.clear();
    setIsLogged(false);
  }

  function handleEditUser(name, email) {
    setIsSubmit(true);
    editUser(name, email, localStorage.jwt)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`Ошибка редактирования данных пользователя ${err}`);
      })
      .finally(() => {
        setIsSave(true);
        setIsSubmit(false);
      });
  }

  function handleDeleteMovie(movie) {
    deleteSavedMovie(movie._id, localStorage.jwt)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((savedMovie) => {
            return movie._id !== savedMovie._id;
          })
        );
      })
      .catch((err) => {
        console.log(`Ошибка при удалении фильма ${err}`);
      });
  }

  function handleSaveMovie(movie) {
    if (savedMovies.some((savedMovie) => savedMovie.movieId === movie.id)) {
      const movieCard = savedMovies.find(
        (savedMovie) => savedMovie.movieId === movie.id
      );
      if (movieCard) {
        handleDeleteMovie(movieCard);
      }
    } else {
      saveMovie(movie, localStorage.jwt)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })
        .catch((err) => {
          console.log(`Ошибка при сохранении фильма ${err}`);
        });
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="body">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Layout
                    setIsNavActive={setIsNavActive}
                    isNavActive={isNavActive}
                    handleOpenNavTab={handleOpenNavTab}
                    handleCloseNavTab={handleCloseNavTab}
                    isLogged={isLogged}
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
                    setIsNavActive={setIsNavActive}
                    isNavActive={isNavActive}
                    handleOpenNavTab={handleOpenNavTab}
                    handleCloseNavTab={handleCloseNavTab}
                    isLogged={isLogged}
                  />
                </>
              }
            >
              <Route
                index
                element={
                  <>
                    <ProtectedRoute
                      element={Movies}
                      savedMovies={savedMovies}
                      isLogged={isLogged}
                      isLoading={isLoading}
                      isSuccess={isSuccess}
                      setIsSuccess={setIsSuccess}
                      setIsLoading={setIsLoading}
                      handleSaveMovie={handleSaveMovie}
                      handleDeleteMovie={handleDeleteMovie}
                    />
                  </>
                }
              ></Route>
            </Route>
            <Route
              path="/saved-movies"
              element={
                <>
                  <Layout
                    setIsNavActive={setIsNavActive}
                    isNavActive={isNavActive}
                    handleOpenNavTab={handleOpenNavTab}
                    handleCloseNavTab={handleCloseNavTab}
                    isLogged={isLogged}
                  />
                </>
              }
            >
              <Route
                index
                element={
                  <>
                    <ProtectedRoute
                      element={SavedMovies}
                      savedMovies={savedMovies}
                      isLogged={isLogged}
                      isLoading={isLoading}
                      isSuccess={isSuccess}
                      setIsSuccess={setIsSuccess}
                      handleDeleteMovie={handleDeleteMovie}
                    />
                  </>
                }
              ></Route>
            </Route>
            <Route
              path="/profile"
              element={
                <>
                  <NavTab
                    setIsNavActive={setIsNavActive}
                    active={isNavActive}
                    handleCloseNavTab={handleCloseNavTab}
                  />
                  <Header
                    handleOpenNavTab={handleOpenNavTab}
                    isLogged={isLogged}
                  />
                  <ProtectedRoute
                    element={Profile}
                    isLogged={isLogged}
                    onEditUser={handleEditUser}
                    onLogOut={handleOnLogOut}
                    isSave={isSave}
                    isSubmit={isSubmit}
                  />
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <UnProtectedRoute
                  isLogged={isLogged}
                  element={Register}
                  onRegistration={handleRegistration}
                  isSuccess={isSuccess}
                  setIsSuccess={setIsSuccess}
                  isSubmit={isSubmit}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <UnProtectedRoute
                  isLogged={isLogged}
                  element={Login}
                  onLogin={handleLogin}
                  isSuccess={isSuccess}
                  setIsSuccess={setIsSuccess}
                  isSubmit={isSubmit}
                />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
