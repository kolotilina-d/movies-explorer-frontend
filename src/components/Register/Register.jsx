import React, { useEffect } from "react";
import "./Register.css";
import { NavLink } from "react-router-dom";
import useValidator from "../../hooks/useValidator";
import { EmailRegEx } from "../../utils/constans";

function Register({ onRegistration, isSuccess, setIsSuccess, isSubmit }) {
  const { values, errors, handleInputChange, isFormValid } = useValidator();

  function handleSubmit(e) {
    e.preventDefault();
    if (isSubmit) {
      return;
    } else {
      onRegistration(values);
    }
  }

  useEffect(() => {
    setIsSuccess("");
  }, [setIsSuccess, isFormValid]);

  return (
    <section className="register">
      <div className="register__wrapper">
        <NavLink to="/" className="register__logo" />
        <h2 className="register__title">Добро пожаловать!</h2>
        <form
          className="register__form"
          name="register"
          onSubmit={handleSubmit}
        >
          <span className="register__label">Имя</span>
          <input
            name="name"
            type="text"
            className="register__input"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
            value={values.name || ""}
            onChange={handleInputChange}
          />
          <span className="register__error_active">{errors.name}</span>
          <span className="register__label">E-mail</span>
          <input
            name="email"
            type="email"
            className="register__input"
            placeholder="Email"
            required
            value={values.email || ""}
            pattern={EmailRegEx}
            onChange={handleInputChange}
          />
          <span className="register__error_active">{errors.email}</span>
          <span className="register__label">Пароль</span>
          <input
            name="password"
            type="password"
            autoComplete="on"
            className="register__input"
            placeholder="Пароль"
            required
            minLength="8"
            maxLength="8"
            value={values.password || ""}
            onChange={handleInputChange}
          />
          <span className="register__error_active">{errors.password}</span>
          <span
            className={`register__error ${
              isSuccess === "error"
                ? "register__error_active"
                : "register__error_successful"
            }`}
          >
            {isSuccess === "error"
              ? "Что-то пошло не так..."
              : "Вы успешно зарегистрировались"}
          </span>

          <input
            type="submit"
            className={`register__submit ${
              !isFormValid ? "register__submit_inactive" : ""
            }`}
            value={"Зарегистрироваться"}
            disabled={!isFormValid}
          />
        </form>
        <span className="register__text">
          Уже зарегистрированы?{" "}
          <NavLink to="/signin" className="register__link-to-login">
            Войти
          </NavLink>
        </span>
      </div>
    </section>
  );
}

export default Register;
