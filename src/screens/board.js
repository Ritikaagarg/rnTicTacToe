import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Square from './square';
import styles from './styles';


const Board = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);

  const onPressEvent = (i) => {
    const newSquares = [...squares];
    const squareFilled = Boolean(newSquares[i]);
    const winnerDeclared = Boolean(calculateWinner(newSquares));
    if (squareFilled || winnerDeclared) { return; }
    newSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(newSquares)
    setXIsNext(!xIsNext)
  }
  const renderSquare = (i) => {
    return (
      <Square value={squares[i]} onPressEvent={() => onPressEvent(i)} />
    )
  }
  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : xIsNext ? `Player: X` : `Player: O`
  return (
    <View style={styles.boardContainer}>
      <Text style={[styles.titleText, { marginBottom: 20 }]}>{status}</Text>
      <View style={{ flexDirection: 'row' }}>
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </View>
      <View style={{ flexDirection: 'row' }}>
        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </View>
      <View style={{ flexDirection: 'row' }}>
        {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
      </View>
    </View>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] //diagnols
  ]

  for (let line of lines) {
    const [a, b, c] = line;

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
}

export default Board;