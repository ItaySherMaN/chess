const King = {
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
		this.parent(row, col, PieceType.KING, alliance, isFirstMove, arguments)
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

		if (this.isFirstMove) {
			const kingRow = this.alliance === Alliance.WHITE ? 0 : 7

			const queenSidePiece = board.get(kingRow, 0)
			const kingSidePiece = board.get(kingRow, 7)

			if (queenSidePiece !== null) {
				if (queenSidePiece.type === 'R') {
					if (queenSidePiece.alliance === this.alliance) {
						if (
							board.get(kingRow, 1) === null &&
							board.get(kingRow, 2) === null &&
							board.get(kingRow, 3) === null
						) {
							moves.push(QueensideCastleMove.create(board, this, kingRow, 2, queenSidePiece, kingRow, 3))
						}
					}
				}
			}

			if (kingSidePiece !== null) {
				if (kingSidePiece.type === 'R') {
					if (kingSidePiece.alliance === this.alliance) {
						if (
							board.get(kingRow, 5) === null &&
							board.get(kingRow, 6) === null
						) {
							moves.push(KingsideCastleMove.create(board, this, kingRow, 6, kingSidePiece, kingRow, 5))
						}
					}
				}
			}
		}

		return moves
	}
}

King.extends(Piece)
