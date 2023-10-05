import React from "react";
import "./SaveButton.css";

function SaveButton() {
  return (
    <div className="saveButton">
      <div className="saveButton__buttons-icon"></div>
      <button type="button" className="saveButton__button"></button>
    </div>
  );
}

export default SaveButton;
