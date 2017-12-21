import Tile from './tile.js'

const EmptyTile = {
	init(index) {
		this.parent(index, null)
	},

	empty() {
		return true
	},

	toString() {
		return ' '
	},

	emptyTiles: new Array(utils.NUM_TILES).map((value, index) => {
		EmptyTile.create(index)
	})
}

EmptyTile.extends(Tile)

export default EmptyTile

// const EmptyTile = Object.create(Tile)
//
// EmptyTile.create = function(index) {
// 	const obj = Object.create(this)
// 	this.__proto__.super.call(obj, index, null, true)
// 	return obj
// }
//
// EmptyTile.toString = function() {
// 	return ' '
// }
//
// export default EmptyTile
