import React from "react";
import "./DeleteButton.css";

function DeleteButton({ handleDeleteMovie }) {
  return (
    <div className="deleteButton">
      <div className="deleteButton__buttons-icon">
        <button
          type="button"
          className="deleteButton__button"
          onClick={handleDeleteMovie}
        ></button>
      </div>
    </div>
  );
}

export default DeleteButton;
