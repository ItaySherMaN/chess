const Tile = {
	_create: function(index) {
		let obj = Object.create(this)
		obj.index = index
		return obj
	},

	createEmpty: function(index) {
		const obj = Tile._create(index)
		obj.empty = true
		return obj
	},

	createOccupied: function(index, piece) {
		const obj = Tile._create(index)
		obj.empty = false
		obj.piece = piece
		return obj
	},

	create: function(index, piece) {
		return piece == null ? this.emptyTiles[index] : this.createOccupied(index, piece)
	}
}

Tile.emptyTiles = (function () {
	const emptyTiles = []

	for (let i = 0; i < 64; i++) {
		emptyTiles.push(Tile.createEmpty(i))
	}

	return emptyTiles
})()
