// canvas = document.getElementById('canvas')
// g = canvas.getContext('2d')
// width = canvas.width
// height = canvas.height

const boardjs = require('./board/board')

const Board = boardjs.Board

const board = Board.standardBoardLayout

console.log(board.whiteView())
