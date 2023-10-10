import React from "react";
import "./MoreButton.css";

function MoreButton(handleMoreClick) {
  function handleShowMore() {
    handleMoreClick();
  }

  return (
    <div className="moreButton">
      <button className="moreButton__more" onClick={() => handleShowMore}>
        Ещё
      </button>
    </div>
  );
}

export default MoreButton;
