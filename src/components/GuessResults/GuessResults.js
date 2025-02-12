import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.length
        ? guesses.map((guess, index) => (
            <p key={index} className="guess">
              {guess}
            </p>
          ))
        : "No guesses yet"}
    </div>
  );
}

export default GuessResults;
