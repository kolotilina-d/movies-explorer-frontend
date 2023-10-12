import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";

function Errors() {
  const navigate = useNavigate();
  // const goBack = () => navigate(-1);

  return (
    <section className="errors">
      <h2 className="errors__title">404</h2>
      <span className="errors__text">Страница не найдена</span>
      <button className="errors__button" onClick={()=>navigate(-1)}>
        Назад
      </button>
    </section>
  );
}

export default Errors;
