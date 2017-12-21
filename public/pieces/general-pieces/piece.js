import Alliance from './../../alliance.js'

const Piece = {
	init(row, col, type, alliance) {
		this.row = row
		this.col = col
		this.type = type
		this.alliance = alliance
	},

	toString() {
		console.log(this.type)
		return this.alliance === Alliance.WHITE ? this.type : this.type.toLowerCase()
	}
}

export default Piece
