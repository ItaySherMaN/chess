// canvas = document.getElementById('canvas')
// g = canvas.getContext('2d')
// width = canvas.width
// height = canvas.height

const boardjs = require('./board/board')

const Board = boardjs.Board

Board.standardBoardLayout.printWhiteView()
Board.standardBoardLayout.printBlackView()

// _______________________________________
//  wr | wk | wb | wK | wq | wb | wk | wr
// ____|____|____|____|____|____|____|____
//  wp | wp | wp | wp | wp | wp | wp | wp
// ____|____|____|____|____|____|____|____
//     |    |    |    |    |    |    |
// ____|____|____|____|____|____|____|____
//     |    |    |    |    |    |    |
// ____|____|____|____|____|____|____|____
//     |    |    |    |    |    |    |
// ____|____|____|____|____|____|____|____
//     |    |    |    |    |    |    |
// ____|____|____|____|____|____|____|____
//  bp | bp | bp | bp | bp | bp | bp | bp
// ____|____|____|____|____|____|____|____
//  br | bk | bb | bK | bq | bb | bk | br
// ____|____|____|____|____|____|____|____
