const utils = {
	NUM_TILES: 64,
	NUM_ROWS: 8,
	NUM_COLS: 8,
	NUM_ALLIANCES: 2,
	NUM_PIECE_TYPES: 6,
	NUM_PIECE_IDS: 12,

	startingPawnRow: function(alliance) {
		return alliance === this.WHITE ? 1 : 6
	},

	pawnDirection: function(alliance) {
		return alliance === Alliance.WHITE ? 1 : -1
	},

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
	},

	pieceID: function(pieceType, alliance) {
		return 2 * pieceType + alliance
	},

	pieceType: function(pieceID) {
		return pieceID / 2 | 0
	},

	alliance: function(pieceID) {
		return pieceID % 2
	},

	loadImage: function(url) {
		return new Promise((resolve, reject) => {
			const image = new Image()

			image.addEventListener('load', () => {
				resolve(image)
			})

			image.src = url
		})
	}
}
