import isOverPopulated from './isOverPopulated.js'
import isUnderPopulated from './isUnderPopulated.js'
import isResurrectable from './isResurrectable.js'

function nextCellState(cellState, neighbourCount) {
  if (cellState === false) {
    return isResurrectable(neighbourCount)
  } else {
    if (isOverPopulated(neighbourCount)) {
      return false
    } else if (isUnderPopulated(neighbourCount)) {
      return false
    } else return true
  }
}

export default nextCellState
