const boardjs = require('./board/board')

const Board = boardjs.Board

const index = (row, col) => row * Board.COLS + col
const areValidCoordinates = (row, col) => {
	return row >= 0 && row < Board.ROWS
		&& col >= 0 && col < Board.COLS
}

module.exports.index = index
module.exports.areValidCoordinates = areValidCoordinates
