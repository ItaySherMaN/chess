const Piece = {
	init: function(row, col, type, alliance, isFirstMove) {
		this.row = row
		this.col = col
		this.type = type
		this.alliance = alliance
		this.isFirstMove = isFirstMove
	},

	toString: function() {
		return this.alliance === Alliance.WHITE ? PieceType.toString[this.type] : PieceType.toString[this.type].toLowerCase()
	},

	hashCode: function(row, col, type, alliance, isFirstMove) {
		let r = row

		r = 8 * r + col
		r = 6 * r + type
		r = 2 * r + alliance
		r = 2 * r + (isFirstMove ? 1 : 0)

		return r
	}
}
