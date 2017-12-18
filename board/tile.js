const utilsjs = require('./../utils')

const Tile = {
	_create: function(index) {
		let obj = Object.create(this)

		obj.index = index

		return obj
	},

	create: function(index, piece) {
		return piece == null ? this.emptyTiles[index] : OccupiedTile.create(index, piece)
	}
}

const EmptyTile = {
	create: function(index) {
		const obj = Tile._create(index)
		obj.empty = true
		return obj
	}
}

const OccupiedTile = {
	create: function(index, piece) {
		const obj = Tile._create(index)

		obj.empty = false
		obj.piece = piece

		return obj
	}
}

Tile.emptyTiles = (function () {
	const emptyTiles = []

	for (let i = 0; i < utilsjs.NUM_TILES; i++) {
		emptyTiles.push(EmptyTile.create(i))
	}

	return emptyTiles
})()

module.exports.Tile = Tile
