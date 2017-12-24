const Piece = {
	init(row, col, type, alliance) {
		this.row = row
		this.col = col
		this.type = type
		this.alliance = alliance
	},

	toString() {
		return this.alliance === Alliance.WHITE ? this.type : this.type.toLowerCase()
	}
}
