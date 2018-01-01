const Rook = {
	moveOffsets: [
		{row: 0, col: 1},
		{row: 1, col: 0},
		{row: 0, col: -1},
		{row: -1, col: 0}
	],

	init: function(row, col, alliance, isFirstMove) {
		this.parent(row, col, PieceType.ROOK, alliance, isFirstMove, arguments)
	}
}

Rook.extends(SlidingPiece)
