import utils from './../../utils.js'
import Tile from './tile.js'

const EmptyTile = {
	init(index) {
		this.parent(index, arguments)
	},

	empty() {
		return true
	},

	toString() {
		return ' '
	}
}

EmptyTile.extends(Tile)

EmptyTile.emptyTiles = new Array(utils.NUM_TILES).fill(null).map((value, index) => {
	return EmptyTile.create(index)
})

export default EmptyTile
