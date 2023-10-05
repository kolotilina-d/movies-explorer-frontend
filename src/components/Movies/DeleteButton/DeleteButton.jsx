import React from "react";
import "./DeleteButton.css";

function DeleteButton() {
  return (
    <div className="deleteButton">
      <div className="deleteButton__buttons-icon"></div>
      <button type="button" className="deleteButton__button"></button>
    </div>
  );
}

export default DeleteButton;
