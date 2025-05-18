function displayBoard(currentBoard) {
  currentBoard.map((currentRow, row) => {
    currentRow.map((currentCol, col) => {
      const gridBox = document.getElementById('gridBox.' + row + '.' + col)
      if (currentCol) {
        gridBox.classList = 'alive'
      } else {
        gridBox.classList = 'dead'
      }
    })
  })
  return currentBoard
}

export default displayBoard
