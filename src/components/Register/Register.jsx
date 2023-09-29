import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <div className="register__wrapper">
        <div className="register__logo" />
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" name="register">
          <span className="register__label">Имя</span>
          <input
            name="login"
            type="text"
            className="register__input"
            placeholder="Имя"
            value="Виталий"
            required
            minlength="2"
            maxlength="40"
          />
          <span className="register__label">E-mail</span>
          <input
            name="email"
            type="email"
            className="register__input"
            placeholder="Email"
            required
            value="pochta@yandex.ru"
            minlength="2"
            maxlength="40"
          />
          <span className="register__label">Пароль</span>
          <input
            name="pass"
            type="password"
            autoComplete="on"
            className="register__input register__input_error-active"
            placeholder="Пароль"
            required
            value="pochta@yandex.ru"
            minlength="2"
            maxlength="8"
          />
          <span className="register__error register__error_active">
            Что-то пошло не так...
          </span>
          <input
            type="submit"
            className="register__submit"
            value={"Зарегистрироваться"}
          />
        </form>
        <span className="register__text">
          Уже зарегистрированы?{" "}
          <Link to="/signin" className="register__link-to-login">
            Войти
          </Link>
        </span>
      </div>
    </section>
  );
}

export default Register;
