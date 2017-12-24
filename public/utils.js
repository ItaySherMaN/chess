const utils = {
	NUM_TILES: 64,
	NUM_ROWS: 8,
	NUM_COLS: 8,

	areValidCoordinates(row, col) {
		return row >= 0 && row < this.NUM_ROWS &&
			   col >= 0 && col < this.NUM_COLS
	},

	index(row, col) {
		return this.NUM_COLS * row + col
	},

	row(index) {
		return index / 8 | 0
	},

	col(index) {
		return index % 8
	}
}
