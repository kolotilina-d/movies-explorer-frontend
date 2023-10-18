import React from "react";
import "./SaveButton.css";

function SaveButton({ handleSaveMovie, isSaved }) {
  return (
    <div className="saveButton">
      <button
        type="button"
        className={`saveButton__buttons-icon ${
          isSaved ? "saveButton__buttons-icon_active" : ""
        }`}
        onClick={handleSaveMovie}
      ></button>
    </div>
  );
}

export default SaveButton;
