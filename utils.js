const boardjs = require('./board/board')

const Board = boardjs.Board

module.exports = {
	index: (row, col) => row * Board.COLS + col,
	row: index => index / Board.COLS,
	col: index => index % Board.ROWS,
	isValidPosition: index => index >= 0 && index < Board.NUM_TILES
}
