import React from "react";
import "./MoreButton.css";

function MoreButton(handleShowMore) {
  function handleMoreClick() {
    handleShowMore();
  }

  return (
    <div className="moreButton">
      <button className="moreButton__more" onClick={() => handleMoreClick}>
        Ещё
      </button>
    </div>
  );
}

export default MoreButton;
