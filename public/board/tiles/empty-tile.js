import Tile from './tile.js'

const EmptyTile = {
	init(index) {
		this.parent(index, null, arguments)
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
