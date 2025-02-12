import React from "react";

function Keyboard({ mappedLetters }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "5px",
          flexWrap: "wrap",
          border: `2px solid var(--color-gray-700)`,
          borderRadius: "6px",
          padding: "12px",
        }}
      >
        {Object.keys(mappedLetters).map((letter, index) => (
          <div
            key={index}
            style={{
              backgroundColor:
                mappedLetters[letter] === "unused"
                  ? `var(--color-gray-700)`
                  : `var(--color-gray-300)`,
              padding: "13px",
              borderRadius: "6px",
              flexGrow: 1,
              textAlign: "center",
              color: `var(--color-gray-300)`,
            }}
          >
            {letter.toUpperCase()}
          </div>
        ))}
      </div>
    </>
  );
}

export default Keyboard;
