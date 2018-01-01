const utils = {
	NUM_TILES: 64,
	NUM_ROWS: 8,
	NUM_COLS: 8,

	areValidCoordinates: function(row, col) {
		return row >= 0 && row < this.NUM_ROWS &&
			   col >= 0 && col < this.NUM_COLS
	},

	index: function(row, col) {
		return this.NUM_COLS * row + col
	},

	row: function(index) {
		return index / 8 | 0
	},

	col: function(index) {
		return index % 8
	}
}
