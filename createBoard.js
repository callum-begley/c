function createBoard(size) {
  let board = Array(size)
    .fill()
    .map(() => Array(size).fill(false))
  return board
}

export default createBoard
