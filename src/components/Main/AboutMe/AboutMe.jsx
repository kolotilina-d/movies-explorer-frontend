import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import photo from "../../../images/students_photo.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__wrapper">
        <p className="about-me__author">Дарья</p>
        <p className="about-me__about">Фронтенд-разработчик, 33 года</p>
        <span className="about-me__text">
          Калининградская студентка ЯндексПрактикума. Предпочитаю не стоять на
          месте, выгорев на старой работе хочу найти что-то новое и интересное
          Люблю активный отдых, теплые и душевные разговоры у костра, хайкинг и
          конный спорт. Живу согласно девизу: "Делай что любишь и люби что
          делаешь!".
        </span>
        <Link
          to="https://github.com/kolotilina-d"
          target="_blank"
          className="about-me__link"
        >
          Github
        </Link>
        <img className="about-me__photo" alt="фото студента" src={photo}></img>
      </div>
    </div>
  );
}

export default AboutMe;
