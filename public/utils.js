const NUM_TILES = 64
const NUM_ROWS = 8
const NUM_COLS = 8

const areValidCoordinates = function(row, col) {
	return row >= 0 && row < NUM_ROWS &&
		   col >= 0 && col < NUM_COLS
}

const index = function(row, col) {
	return NUM_COLS * row + col
}

const row = function(index) {
	return index / 8 | 0
}

const col = function(index) {
	return index % 8
}

export default {
	NUM_TILES,
	NUM_ROWS,
	NUM_COLS,
	areValidCoordinates,
	index,
	row,
	col
}
