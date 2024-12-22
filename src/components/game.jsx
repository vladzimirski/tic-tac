import { useMemo, useState } from "react";
import {calculateWinner} from "../lib/calculateWinner"
import { Square } from "./square";
import { WinnerCounter } from "./WinnerCounter";


const DEFAULT_SQUARES = Array(9).fill(null);
 export function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(DEFAULT_SQUARES);
    const winner = calculateWinner(squares);
    const status = useMemo(() => {
      if (winner) {
        return "Winner: " + winner;
      } else {
        return "Next player: " + (xIsNext ? "X" : "O");
      }
    }, [winner, xIsNext])
    
    function handleClick(i) {
      if (squares[i] || calculateWinner(squares)) {
        return;
      }
      const nextSquares = squares.slice();
      if (squares[i]) {
        return;
      }
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
    function reset() {
      setSquares(DEFAULT_SQUARES)
    }
    
    return (
      <>
      <WinnerCounter winner={winner}/>
        {winner ? (
          <div>
            <button onClick={reset}>reset</button>
          </div>
        ) : (
          "no has winner"
        )}
        <div className="game">
          <div className="game-board">
          </div>
          <div className="game-info">
            <ol>{/*TODO*/}</ol>
          </div>
        </div>
        <div className="status">{status}</div>
        <div>
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
      </>
    );
  }