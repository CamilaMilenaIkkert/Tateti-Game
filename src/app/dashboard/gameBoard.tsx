"use client"; 
import React, { useState } from "react";
import { checkWinner } from "@/utils/gameLogic";
import Board from "@/components/Board";
import RestartButton from "@/components/RestartButton";

const GameBoard = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = checkWinner(squares);

  const handleClick = (index: number) => {
    if (squares[index] || winner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="my-12 flex flex-col align-center">
      <h1 className="text-5xl font-title text-center mb-4">Ta Te Ti</h1>
      <div className="text-center mb-4">
        {winner ? (
          <p className="text-secondary">Ganador: {winner}</p>
        ) : (
          <p className="text-primary mt-8">
            Turno de: {isXNext ? "X" : "O"}
          </p>
        )}
      </div>
      <Board squares={squares} onClick={handleClick} />
      <RestartButton onRestart={restartGame} />
    </div>
  );
};

export default GameBoard;
