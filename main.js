// canvas = document.getElementById('canvas')
// g = canvas.getContext('2d')
// width = canvas.width
// height = canvas.height

const boardjs = require('./board/board')

const Board = boardjs.Board

console.log(Board.standardBoardLayout.whiteView())
console.log(Board.standardBoardLayout.blackView())
