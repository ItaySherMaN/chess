const QueensideCastleMove = {
	init: function(
		board,
		movedKing,
		kingDestRow,
		kingDestCol,
		movedRook,
		rookDestRow,
		rookDestCol
	) {
		this.parent(
			board,
			movedKing,
			kingDestRow,
			kingDestCol,
			movedRook,
			rookDestRow,
			rookDestCol,
			arguments
		)
	},

	toString() {
		return 'O-O-O'
	}
}

QueensideCastleMove.extends(CastleMove)
