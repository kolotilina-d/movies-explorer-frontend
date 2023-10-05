import React from "react";
import "./MoreButton.css";

function MoreButton() {
  const showMore = () => {};
  return (
    <div className="moreButton">
      <button className="moreButton__more" onClick={showMore}>
        Ещё
      </button>
    </div>
  );
}

export default MoreButton;
