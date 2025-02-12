import React from "react";

import GuessCell from "../GuessCell";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessRow({ guess, answer }) {
  const guessLetters = checkGuess(guess, answer) || range(5);
  console.log(guessLetters);

  return (
    <p className="guess">
      {guessLetters.map(({ letter, status }, index) => (
        <GuessCell key={index} letter={letter} status={status} />
      ))}
    </p>
  );
}

export default GuessRow;
