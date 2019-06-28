import React, { useState } from 'react';
import Square from './Square';
import { lines } from '../constants';

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState('X');

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    newSquares[i] = nextPlayer;
    setSquares(newSquares);
    nextPlayer === 'X' ? setNextPlayer('O') : setNextPlayer('X');
  };

  const renderSquare = i => (
    <Square value={squares[i]} onClick={() => handleClick(i)} />
  );

 const calculateWinner = squares => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `Next player: ${nextPlayer}`;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
