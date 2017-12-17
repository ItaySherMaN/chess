const boardjs = require('./board/board')

const Board = boardjs.Board

const indexFromCoordinates = (row, col) => row * Board.COLS + col
const row = index => parseInt(index / Board.COLS)
const col = index => index % Board.ROWS
const isValidIndex = index => index >= 0 && index < Board.NUM_TILES
const areValidCoordinates = (row, col) => {
	return row >= 0 && row < Board.ROWS
		&& col >= 0 && col < Board.COLS
}
const indexFromOffset = (index, offset) => {
	return indexFromCoordinates(row(index) + row(offset), col(index) + col(offset))
}

module.exports.indexFromCoordinates = indexFromCoordinates
module.exports.row = row
module.exports.col = col
module.exports.isValidIndex = isValidIndex
module.exports.areValidCoordinates = areValidCoordinates
module.exports.indexFromOffset = indexFromOffset
