import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login">
      <div className="login__wrapper">
        <div className="login__logo" />
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" name="login">
          <span className="login__label">E-mail</span>
          <input
            name="email"
            type="email"
            className="login__input"
            placeholder="Email"
            required
            value="pochta@yandex.ru"
            minlength="2"
            maxlength="40"
          />
          <span className="login__label">Пароль</span>
          <input
            name="pass"
            type="password"
            autoComplete="on"
            className="login__input "
            required
            value=""
            minlength="2"
            maxlength="8"
          />
          <span className="login__error ">Что-то пошло не так...</span>
          <input type="submit" className="login__submit" value={"Войти"} />
        </form>
        <span className="login__text">
          Ещё не зарегистрированы?{" "}
          <Link to="/signup" className="login__link-to-register">
            Регистрация
          </Link>
        </span>
      </div>
    </section>
  );
}

export default Login;
