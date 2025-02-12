import React from "react";

function Notification({ gameStatus, guessCount, answer }) {
  console.log(gameStatus);

  return (
    <>
      {gameStatus === "won" ? (
        <div className="happy banner">
          Congrats! You solved it in {guessCount} guesses.
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
