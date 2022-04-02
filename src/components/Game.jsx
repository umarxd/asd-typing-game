import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import library from "../words";

const Game = () => {
  const [words, setWords] = useState(library);
  const [input, setInput] = useState("");
  const [CW, setCW] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  let gameState = timeLeft === 0 ? false : true;

  if (input.trim() === words[CW]) {
    setCW((CW) => CW + 1);
    setInput("");
    setScore((score) => score + words[CW].length);
  }

  useEffect(() => {
    const timer =
      timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  const replay = () => {
    setInput("");
    setTimeLeft(20);
    setScore(0);
    setWords(words.sort(() => Math.random() - 0.5));
  };

  return (
    <main>
      <h3 id="score">Score: {score}</h3>
      <h3 id="timeLeft">Time Left: {timeLeft}</h3>
      <ul>
        <li>{words[CW - 2]}</li>
        <li>{words[CW - 1]}</li>
        <li>
          {words[CW].split("").map((letter, index) => (
            <p
              style={{
                display: "inline",
                color: input[index] === words[CW][index] ? "#50C878" : "white",
              }}
            >
              {letter}
            </p>
          ))}
        </li>
        <li>{words[CW + 1]}</li>
        <li>{words[CW + 2]}</li>
      </ul>
      {timeLeft === 0 && <div id="endgame">Final Score: {score}</div>}

      {gameState ? (
        <>
          <input
            type="text"
            value={input}
            placeholder="asd"
            onChange={(e) => setInput(e.target.value)}
          />
        </>
      ) : (
        <button id="replayButton" onClick={replay}>
          Replay
        </button>
      )}
    </main>
  );
};

export default Game;
