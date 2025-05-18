import nextCellState from './nextCellState.js'
import countAliveNeighbours from './countAliveNeighbours.js'
import createBoard from './createBoard.js'

function nextBoard(currentBoard) {
  let newBoard = createBoard(currentBoard.length)

  currentBoard.map((currentRow, row) => {
    currentRow.map((currentCol, col) => {
      let neighbours = countAliveNeighbours(row, col, currentBoard)
      newBoard[row][col] = nextCellState(currentCol, neighbours)
    })
  })

  return newBoard
}

export default nextBoard
