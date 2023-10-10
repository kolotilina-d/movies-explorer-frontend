import React, { useEffect, useState, useContext } from "react";
import "./Profile.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

function Profile({ onEditUser, onLogOut, isSave }) {
  const currentUser = useContext(CurrentUserContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isButtonCorrect, setIsButtonCorrect] = useState(false);
  const [state, setState] = useState(false);

  function handleNameChange(e) {
    setIsButtonCorrect(true);
    setUserName(e.target.value);
  }

  function handleEmailChange(e) {
    setIsButtonCorrect(true);
    setEmail(e.target.value);
  }

  function handleButtonChangeUserData() {
    setIsButtonActive(true);
    setState(false);
  }

  useEffect(() => {
    setUserName(currentUser.name);
    setEmail(currentUser.email);
    setIsButtonActive(false);
    setIsButtonCorrect(false);
    setState(true);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onEditUser(userName, email);
  }

  return (
    <main className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <span className="profile__label">Имя</span>
        <input
          type="text"
          className="profile__input"
          id="username"
          name="username"
          placeholder="Имя"
          required
          minLength={2}
          maxLength={40}
          onChange={(e) => {
            handleNameChange(e);
            setIsButtonCorrect(true);
          }}
          value={userName || ""}
          autoComplete="on"
          disabled={!isButtonActive}
        />
        <span className="profile__label">E-mail</span>
        <input
          type="email"
          className="profile__input"
          id="email"
          name="email"
          placeholder="E-mail"
          required
          value={email || ""}
          autoComplete="on"
          onChange={handleEmailChange}
          disabled={!isButtonActive}
        />
      </form>
      <span
        className="profile__warning"
        style={state ? { opacity: "1" } : { opacity: "0" }}
      >
        {isSave ? "Изменения сохранены" : ""}
      </span>
      <button
        type="button"
        className={`profile__edit ${
          isButtonActive ? "profile__edit_hide" : ""
        }`}
        onClick={handleButtonChangeUserData}
      >
        Редактировать
      </button>
      <span
        className="profile__error-text
        //profile__error-text-active
      "
      >
        При обновлении профиля произошла ошибка.
      </span>
      <div
        className={`profile__profile_button-visible ${
          isButtonActive ? "profile__profile_button-visible_on" : ""
        }`}
      >
        <button
          type="submit"
          className={`profile__changes-safe_inactive ${
            isButtonCorrect ? "profile__changes-safe_active" : ""
          }
        }`}
          style={
            isButtonCorrect
              ? { backgroundColor: "#4285f4", color: "white" }
              : {}
          }
          disabled={!isButtonCorrect}
          onClick={handleSubmit}
        >
          Сохранить
        </button>
      </div>
      <Link
        to="/"
        onClick={onLogOut}
        className={`profile__exit ${
          isButtonActive ? "profile__exit_hide" : ""
        }`}
      >
        Выйти из аккаунта
      </Link>
    </main>
  );
}

export default Profile;
