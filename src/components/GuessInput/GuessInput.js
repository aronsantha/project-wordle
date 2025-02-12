import React from "react";

function GuessInput({ handleProcessSubmit, isAllowedToGuess }) {
  const [guessInput, setGuessInput] = React.useState("");
  function handleSubmit(event) {
    event.preventDefault();
    handleProcessSubmit(guessInput.toLowerCase());
    setGuessInput("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="guess-input-wrapper"
      style={{
        transition: "opacity 0.3s linear",
        opacity: !isAllowedToGuess ? 0 : 1,
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={!isAllowedToGuess}
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
