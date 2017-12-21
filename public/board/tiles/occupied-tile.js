import Tile from './tile.js'

const OccupiedTile = {
	init(index, piece) {
		this.parent(index, arguments)
		this.piece = piece
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
