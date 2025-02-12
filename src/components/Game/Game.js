import React from "react";
import GuessInput from "../GuessInput";
import GuessRow from "../GuessRow";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSetGuesses(guessInput) {
    const newGuesses = [...guesses, guessInput.toUpperCase()];
    setGuesses(newGuesses);
  }

  let isAllowedToGuess = Boolean(guesses.length < NUM_OF_GUESSES_ALLOWED);

  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <GuessRow key={index} guess={guesses[index]} />
        ))}
      </div>

      <GuessInput
        handleSetGuesses={handleSetGuesses}
        isAllowedToGuess={isAllowedToGuess}
      />
    </>
  );
}

export default Game;
