import Tile from './tile.js'

const OccupiedTile = {
	init(index, piece) {
		this.parent(index, piece)
	},

	empty() {
		return false
	},

	toString() {
		return this.piece.toString()
	}
}

OccupiedTile.extends(Tile)

export default OccupiedTile

// const OccupiedTile = Object.create(Tile)
//
// OccupiedTile.create = function(index, piece) {
// 	const obj = Object.create(this)
// 	this.__proto__.super.call(obj, index, piece, false)
// 	return obj
// }
//
// OccupiedTile.toString = function() {
// 	return this.piece.toString()
// }
//
// export default OccupiedTile
