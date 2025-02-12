import React from "react";

function GuessCell({ letter, status }) {
  const cellClass = letter ? `cell ${status}` : "cell";
  const cellContent = letter ? letter.toUpperCase() : "";

  return <span className={cellClass}>{cellContent}</span>;
}

export default GuessCell;
