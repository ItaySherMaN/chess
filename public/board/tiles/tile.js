import utils from './../../utils.js'
import EmptyTile from './empty-tile.js'
import OccupiedTile from './occupied-tile.js'

const Tile = {
	init(index, piece) {
		this.index = index
		this.piece = piece
	},

	factoryCreate(index, piece) {
		return piece == null ? this.emptyTiles[index] : OccupiedTile.create(index, piece)
	},

	toString() {
		return this.piece ? this.piece.toString() : ' '
	}
}

export default Tile
