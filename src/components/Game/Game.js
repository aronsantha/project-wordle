import React from "react";
import GuessInput from "../GuessInput";
import GuessRow from "../GuessRow";
import Notification from "../Notification";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("ongoing");

  function handleProcessSubmit(guessInput) {
    const nextGuessCount = guesses.length + 1;
    handleSetGuesses(guessInput);

    console.log(guessInput, answer, guessInput === answer);

    if (guessInput === answer) {
      setGameStatus("won");
    } else if (nextGuessCount < NUM_OF_GUESSES_ALLOWED) {
      return;
    } else setGameStatus("lost");
  }

  function handleSetGuesses(guessInput) {
    const newGuesses = [...guesses, guessInput];
    setGuesses(newGuesses);
  }

  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <GuessRow key={index} guess={guesses[index]} answer={answer} />
        ))}
      </div>

      {gameStatus !== "ongoing" && (
        <Notification
          gameStatus={gameStatus}
          answer={answer}
          guessCount={guesses.length}
        />
      )}

      <GuessInput
        handleProcessSubmit={handleProcessSubmit}
        isAllowedToGuess={gameStatus === "ongoing"}
      />
    </>
  );
}

export default Game;
