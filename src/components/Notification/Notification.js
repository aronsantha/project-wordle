import React from "react";

function Notification({ gameStatus, guessCount, answer }) {
  return (
    <>
      {gameStatus === "won" ? (
        <div className="happy banner">
          Congrats! You solved it in {guessCount} guess(es).
        </div>
      ) : (
        <div className="sad banner">
          Sorry, the solution was {answer.toUpperCase()}.
        </div>
      )}
    </>
  );
}

export default Notification;
