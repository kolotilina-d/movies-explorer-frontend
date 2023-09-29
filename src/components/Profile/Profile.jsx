import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form">
        <span className="profile__label">Имя</span>
        <input
          type="text"
          className="profile__input"
          id="login"
          name="login"
          placeholder="Имя"
          required
          value="Виталий"
          autoComplete="on"
        />
        <span className="profile__label">E-mail</span>
        <input
          type="email"
          className="profile__input"
          id="email"
          name="email"
          placeholder="E-mail"
          required
          value="pochta@yandex.ru"
          autoComplete="on"
        />
      </form>
      <button type="button" className="profile__edit">
        Редактировать
      </button>
      <span
        className="profile__error-text
        //profile__error-text-active
      "
      >
        При обновлении профиля произошла ошибка.
      </span>
      <button
        type="submit"
        className="profile__changes-safe 
        //profile__changes-safe_active 
        //profile__changes-safe_inactive
        "
      >
        Сохранить
      </button>
      <button type="submit" className="profile__exit">
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
