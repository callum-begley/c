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

// const spaceship = [
//     [35, 66], [36, 66], [37, 66], [48, 66], [49, 66], [50, 66],
//     [30, 67], [31, 67], [32, 67], [34, 67], [42, 67], [43, 67], [51, 67],[53, 67],[54, 67],[55, 67],
//     [34, 68], [38, 68], [41, 68], [44, 68], [47, 68], [51, 68],
//     [34, 69], [40, 69], [45, 69], [51, 69],
//     [40, 70], [41, 70], [44, 70], [45, 70],
//     [37, 71], [41, 71], [44, 71], [48, 71],
//     [37, 72], [39, 72], [46, 72], [48, 72],
//     [38, 73], [39, 73], [40, 73], [41, 73], [42, 73], [43, 73], [44, 73], [45, 73], [46, 73], [47, 73],
//     [40, 74], [45, 74], 
//     [38, 75], [47, 75], 
//     [37, 76], [48, 76], 
//     [38, 77], [47, 77], 
//  ]



// spaceship.forEach(([col,row]) => {
//   board[row][col] = true  
//   })
// displayBoard(board)