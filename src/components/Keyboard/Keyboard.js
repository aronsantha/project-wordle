import React from "react";

const KEYBOARD_LETTERS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

function Keyboard({ mappedLetters }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        justifyContent: "center",
        flexWrap: "wrap",
        border: `2px solid var(--color-gray-700)`,
        borderRadius: "6px",
        padding: "12px",
      }}
    >
      {KEYBOARD_LETTERS.map((row, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "5px",
            width: "100%",
          }}
        >
          {row.map((letter, index) => (
            <div
              key={index}
              style={{
                backgroundColor:
                  mappedLetters[letter] === "unused"
                    ? `var(--color-gray-700)`
                    : `var(--color-gray-300)`,
                height: "40px",
                borderRadius: "6px",
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "center",
                color: `var(--color-gray-300)`,
                fontSize: "1.2rem",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              {letter.toUpperCase()}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
