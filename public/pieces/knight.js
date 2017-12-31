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

	init: function(row, col, alliance, isFirstMove) {
		this.parent(row, col, PieceType.KNIGHT, alliance, isFirstMove, arguments)
	},

	pseudoLegalMoves: function(board) {
		const moves = []

		this.moveOffsets.forEach(offset => {
			const destRow = this.row + offset.row
			const destCol = this.col + offset.col

			if (utils.areValidCoordinates(destRow, destCol)) {
				const destPiece = board.get(destRow, destCol)

				if (destPiece) {
					if (destPiece.alliance !== this.alliance) {
						moves.push(AttackingMove.create(board, this, destPiece, destRow, destCol))
					}
				}
				else {
					moves.push(RegularMove.create(board, this, destRow, destCol))
				}
			}
		})

		return moves
	}
}

Knight.extends(Piece)
