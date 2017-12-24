const Bishop = {
	moveOffsets: [
		{row: -1, col:  1},
		{row: -1, col: -1},
		{row:  1, col:  1},
		{row:  1, col: -1}
	],

	init(row, col, alliance) {
		this.parent(row, col, PieceType.BISHOP, alliance, arguments)
	}
}

Bishop.extends(SlidingPiece)
