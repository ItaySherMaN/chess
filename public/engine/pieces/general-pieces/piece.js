const Piece = {
	init: function(row, col, type, alliance, isFirstMove) {
		this.row = row
		this.col = col
		this.type = type
		this.alliance = alliance
		this.isFirstMove = isFirstMove
	},

	toString: function() {
		return this.alliance === Alliance.WHITE ? this.type : this.type.toLowerCase()
	},

	hashCode: function(row, col, type, alliance, isFirstMove) {
		return (
			this.row + '' +
			this.col + '' +
			this.type + '' +
			this.alliance + '' +
			this.isFirstMove
		)
	}
}
