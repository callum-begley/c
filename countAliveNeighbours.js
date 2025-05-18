import getNeighbours from './getNeighbours.js'

function countAliveNeighbours(row, col, board) {
  return getNeighbours(row, col, board).reduce((a, b) => a + b, 0)
}

export default countAliveNeighbours
