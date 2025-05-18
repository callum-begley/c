import createBoard from './createBoard.js'
import nextBoard from './nextBoard.js'
import displayBoard from './displayBoard.js'
import createGameBoard from './createGameBoard.js'
import aliens from './alien.json' with { type: "json" }

const size = 80
const refreshInterval = 100
let board = createBoard(size)

createGameBoard(board)

// START
const startButton = document.getElementById('startButton')
startButton.addEventListener('click', function () {
  start()
})

function start() {
  const run = setInterval(() => {
    displayBoard(board)
    board = nextBoard(board)
  }, refreshInterval)
  stop(run)
}

// STOP
function stop(run) {
  const stopButton = document.getElementById('stopButton')
  stopButton.addEventListener('click', function () {
    clearInterval(run)
    displayBoard(board)
  })
}

// RANDOM
const randButton = document.getElementById('randButton')
randButton.addEventListener('click', function () {
  board.map((currentRow, row) => {
    currentRow.map((currentCol, col) => {
      let rand = Number(Math.floor(Math.random() * 10))
      if (rand < 1) {
        board[row][col] = true
      }
    })
    displayBoard(board)
  })
})

// CLEAR
const clearButton = document.getElementById('clearButton')
clearButton.addEventListener('click', function () {
  board.map((currentRow, row) => {
    currentRow.map((currentCol, col) => {
      const gridBox = document.getElementById('gridBox.' + row + '.' + col)
      board[row][col] = false
      gridBox.class = 'dead'
    })
  })
  createGameBoard(board)
  addClick()
})

// Click
function addClick(){
  board.map((currentRow, row) => {
  currentRow.map((currentCol, col) => {
    const gridBox = document.getElementById('gridBox.' + row + '.' + col)
    gridBox.addEventListener('click', function () {
      currentCol = !currentCol
      board[row][col] = currentCol
      gridBox.class = 'alive'
      displayBoard(board)
    })
  })
})
}

addClick()

// aliens.forEach(([col,row]) => {
//   board[row][col] = true  
//   })
// displayBoard(board)

const spaceshipButton = document.getElementById('spaceshipButton')
spaceshipButton.addEventListener('click', function () {
  const spaceship = [
    [33, 66], [34, 66], [35, 66], [46, 66], [47, 66], [48, 66],
    [28, 67], [29, 67], [30, 67], [32, 67], [40, 67], [41, 67], [49, 67],[51, 67],[52, 67],[53, 67],
    [32, 68], [36, 68], [39, 68], [42, 68], [45, 68], [49, 68],
    [32, 69], [38, 69], [43, 69], [49, 69],
    [38, 70], [39, 70], [42, 70], [43, 70],
    [35, 71], [39, 71], [42, 71], [46, 71],
    [35, 72], [37, 72], [44, 72], [46, 72],
    [36, 73], [37, 73], [38, 73], [39, 73], [40, 73], [41, 73], [42, 73], [43, 73], [44, 73], [45, 73],
    [38, 74], [43, 74], 
    [36, 75], [45, 75], 
    [35, 76], [46, 76], 
    [36, 77], [45, 77], 
 ]

spaceship.forEach(([col,row]) => {
  board[row][col] = true  
  })
displayBoard(board)
})