import isOutOfBounds from './isOutOfBounds.js'

function indicesAreOutOfBounds(rowIndex, columnIndex, board) {
  if (isOutOfBounds(rowIndex, board)) return false
  if (isOutOfBounds(columnIndex, board)) return false
  else return true
}

export default indicesAreOutOfBounds
