const boardjs = require('./board')
const Board = boardjs.Board

const Tile = {
	_create: function(row, col) {
		let obj = Object.create(this)

		obj.row = row
		obj.col = col

		return obj
	},

	create: function(row, col, piece) {
		return piece == null ? this.emptyTiles[utilsjs.index(row, col)] : OccupiedTile.create(row, col, piece)
	}
}

const EmptyTile = {
	create: function(row, col) {
		const obj = Tile._create(row, col)
		obj.empty = true
		return obj
	}
}

const OccupiedTile = {
	create: function(row, col, piece) {
		const obj = Tile._create(row, col)

		obj.empty = false
		obj.piece = piece

		return obj
	}
}

Tile.emptyTiles = (function () {
	const emptyTiles = []

	for (let i = 0; i < Board.NUM_TILES; i++) {
		emptyTiles.push(EmptyTile.create(i))
	}

	return emptyTiles
})()

module.exports.Tile = Tile
