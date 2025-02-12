import React from "react";

function GuessInput({ handleSetGuesses }) {
  const [guessInput, setGuessInput] = React.useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log("GUESS: ", guessInput.toUpperCase());
    handleSetGuesses(guessInput);
    setGuessInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        className="text-uppercase"
        onChange={(event) => {
          setGuessInput(event.target.value);
        }}
        required
        minLength="5"
        maxLength="5"
        value={guessInput}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
