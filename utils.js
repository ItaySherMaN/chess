const NUM_TILES = 64
const NUM_ROWS = 8
const NUM_COLS = 8

const index = (row, col) => row * NUM_COLS + col
const areValidCoordinates = (row, col) => {
	return row >= 0 && row < NUM_ROWS
		&& col >= 0 && col < NUM_COLS
}

module.exports.index = index
module.exports.areValidCoordinates = areValidCoordinates
module.exports.NUM_TILES = 64
module.exports.NUM_ROWS = 8
module.exports.NUM_COLS = 8
