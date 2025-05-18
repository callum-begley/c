import { default as oob } from './indicesAreOutOfBounds.js'

function getNeighbours(row, col, board) {
  let n = []
  // row above
  if (oob(row - 1, col - 1, board)) n.push(board[row - 1][col - 1])
  if (oob(row - 1, col, board)) n.push(board[row - 1][col])
  if (oob(row - 1, col + 1, board)) n.push(board[row - 1][col + 1])

  // row current
  if (oob(row, col - 1, board)) n.push(board[row][col - 1])
  if (oob(row, col + 1, board)) n.push(board[row][col + 1])

  // row below
  if (oob(row + 1, col - 1, board)) n.push(board[row + 1][col - 1])
  if (oob(row + 1, col, board)) n.push(board[row + 1][col])
  if (oob(row + 1, col + 1, board)) n.push(board[row + 1][col + 1])

  return n
}
export default getNeighbours
