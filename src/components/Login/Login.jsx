import React, { useEffect } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import useValidator from "../../hooks/useValidator";
import { EmailRegEx } from "../../utils/constans";

function Login({ onLogin, setIsSuccess, isSuccess }) {
  const { values, errors, handleInputChange, isFormValid } = useValidator();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  }

  useEffect(() => {
    setIsSuccess("");
  }, [setIsSuccess, isFormValid]);

  return (
    <section className="login">
      <div className="login__wrapper">
        <NavLink to="/" className="login__logo" />
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" name="login" onSubmit={handleSubmit}>
          <span className="login__label">E-mail</span>
          <input
            name="email"
            type="email"
            className="login__input"
            placeholder="Email"
            required
            value={values.email || ""}
            pattern={EmailRegEx}
            onChange={handleInputChange}
          />
          <span className="login__error_active">{errors.email}</span>
          <span className="login__label">Пароль</span>
          <input
            name="password"
            type="password"
            autoComplete="on"
            className="login__input "
            required
            minLength="8"
            maxLength="8"
            placeholder="Пароль"
            value={values.password || ""}
            onChange={handleInputChange}
          />
          <span className="login__error_active">{errors.password}</span>
          <span
            className={`login__error ${
              isSuccess === "error"
                ? "login__error_active"
                : "login__error_successful"
            }`}
          >
            {isSuccess === "error"
              ? "Что-то пошло не так..."
              : "Вы успешно зарегистрировались"}
          </span>
          <input
            type="submit"
            className={`login__submit ${
              !isFormValid ? "login__submit_inactive" : ""
            }`}
            value={"Войти"}
            disabled={!isFormValid}
          />
        </form>
        <span className="login__text">
          Ещё не зарегистрированы?{" "}
          <NavLink to="/signup" className="login__link-to-register">
            Регистрация
          </NavLink>
        </span>
      </div>
    </section>
  );
}

export default Login;
