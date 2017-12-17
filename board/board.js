const alliancejs = require('./../alliance')

const Alliance = alliancejs.Alliance

const generateNewTileBoard = function() {
	return []
}

const Board = {
	ROWS: 8,
	COLS: 8,
	NUM_TILES: 64,

	tiles: generateNewTileBoard(),
	turn: Alliance.WHITE,

	create: function() {
		const obj = Object.create(this)

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

module.exports.Board = Board
