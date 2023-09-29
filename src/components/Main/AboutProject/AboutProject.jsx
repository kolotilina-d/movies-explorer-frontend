import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <div className="aboutProject" id="aboutProject">
      <h2 className="aboutProject__title">О проекте</h2>
      <div className="aboutProject__wrapper">
        <p className="aboutProject__subtitle">
          Дипломный проект включал 5 этапов
        </p>

        <p className="aboutProject__text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="aboutProject__subtitle">
          На выполнение диплома ушло 5 недель
        </p>

        <p className="aboutProject__text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="aboutProject__scale">
        <div className="aboutProject__weeks">1 неделя</div>
        <div className="aboutProject__work">Back-end</div>
        <div className="aboutProject__weeks">4 недели</div>
        <div className="aboutProject__work">Front-end</div>
      </div>
    </div>
  );
}

export default AboutProject;
