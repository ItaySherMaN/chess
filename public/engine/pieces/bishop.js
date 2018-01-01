const Bishop = {
	moveOffsets: [
		{row: -1, col:  1},
		{row: -1, col: -1},
		{row:  1, col:  1},
		{row:  1, col: -1}
	],

	init: function(row, col, alliance, isFirstMove) {
		this.parent(row, col, PieceType.BISHOP, alliance, isFirstMove, arguments)
	}
}

Bishop.extends(SlidingPiece)
