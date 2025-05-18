import displayBoard from './displayBoard.js'
import nextBoard from './nextBoard.js'

function createGameBoard(board) {
  const gameGrid = document.getElementById('gameGrid')
  gameGrid.className = 'gameGrid'
  gameGrid.innerHTML = ''

  board.map((currentRow, row) => {
    currentRow.map((currentCol, col) => {
      makeBox(gameGrid, row, col, board)
    })
  })
}
function makeBox(gameGrid, row, col, board) {
  const gridBox = document.createElement('div')
  gridBox.className = 'dead'
  gridBox.id = 'gridBox.' + row + '.' + col
  gameGrid.appendChild(gridBox)
  return gridBox
}

export default createGameBoard
