const Piece = {
	init(row, col, type, alliance) {
		this.row = row
		this.col = col
		this.type = type
		this.alliance = alliance
	},

	toString() {
		return this.alliance === Alliance.WHITE ? this.type : this.type.toLowerCase()
	},

	movedPiece(row, col) {
		return Cache.pieces[this.type][this.alliance][utils.index(this.row, this.col)]
	}
}

import Alliance from './../../alliance.js'
import Cache from './../../cache.js'

export default Piece
