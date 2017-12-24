const Knight = {
	moveOffsets: [
		{row:  2, col:  1},
		{row:  2, col: -1},
		{row:  1, col:  2},
		{row:  1, col: -2},
		{row: -1, col:  2},
		{row: -1, col: -2},
		{row: -2, col:  1},
		{row: -2, col: -1}
	],

	init(row, col, alliance) {
		this.parent(row, col, PieceType.KNIGHT, alliance, arguments)
	}
}

Knight.extends(SteppingPiece)
