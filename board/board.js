const Board = {
	ROWS: 8,
	COLS: 8,
	NUM_TILES: 64,

	turn: Alliance.WHITE,
	tiles: generateNewTileBoard(),

	create: function() {
		const obj = Object.create(this)

		obj.rows = Board.ROWS
		obj.col = Board.COLS
		obj.tiles = this.tiles
		obj.turn = this.turn

		return obj
	},

	play: function(move) {
		const newBoard = this.create()

		// TODO: fill function

		return newBoard
	}
}

const generateNewTileBoard = function() {
	return []
}

module.exports.Board = Board
