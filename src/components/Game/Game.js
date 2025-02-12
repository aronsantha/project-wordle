import React from "react";
import GuessInput from "../GuessInput";
import GuessRow from "../GuessRow";
import Keyboard from "../Keyboard";
import Notification from "../Notification";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { ALPHABET } from "../../data";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
const defaultMappedAlphabet = Object.fromEntries(
  ALPHABET.map((character) => [character, "unused"])
);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [mappedLetters, setMappedLetters] = React.useState(
    defaultMappedAlphabet
  );
  const [gameStatus, setGameStatus] = React.useState("ongoing");

  function handleProcessSubmit(guessInput) {
    const newGuesses = [...guesses, guessInput];
    setGuesses(newGuesses);
    updateKeyboard(guessInput);

    if (guessInput === answer) {
      setGameStatus("won");
    } else if (newGuesses.length < NUM_OF_GUESSES_ALLOWED) {
      return;
    } else setGameStatus("lost");
  }

  function updateKeyboard(guessInput) {
    const newMappedLetters = { ...mappedLetters };

    guessInput.split("").forEach((letter) => {
      newMappedLetters[letter] = "used";
    });

    setMappedLetters(newMappedLetters);
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
      <Keyboard mappedLetters={mappedLetters} />
      <GuessInput
        handleProcessSubmit={handleProcessSubmit}
        isAllowedToGuess={gameStatus === "ongoing"}
      />
    </>
  );
}

export default Game;
