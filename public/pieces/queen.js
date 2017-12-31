const Queen = {
	moveOffsets: [
		{row:  1, col:  0},
		{row:  1, col:  1},
		{row:  0, col:  1},
		{row: -1, col:  1},
		{row: -1, col:  0},
		{row: -1, col: -1},
		{row:  0, col: -1},
		{row:  1, col: -1}
	],

	init: function(row, col, alliance, isFirstMove) {
		this.parent(row, col, PieceType.QUEEN, alliance, isFirstMove, arguments)
	}
}

Queen.extends(SlidingPiece)
