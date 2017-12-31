const Pawn = {
	moveOffsets: [
		{row: 1, col:  0},
		{row: 1, col:  1},
		{row: 1, col: -1}
	],

	init: function(row, col, alliance, isFirstMove) {
		this.parent(row, col, PieceType.PAWN, alliance, isFirstMove, arguments)
	},

	isOnStartingRow: function() {
		if (this.alliance === Alliance.WHITE) {
			return this.row === 1
		}
		return this.row === 6
	},

	pseudoLegalMoves: function(board) {
		const moves = []
		const dir = Alliance.direction(this.alliance)

		let destRow, destCol

		this.moveOffsets.forEach(offset => {
			destRow = this.row + offset.row * dir
			destCol = this.col + offset.col

			if (utils.areValidCoordinates(destRow, destCol)) {
				const destPiece = board.get(destRow, destCol)

				if (destPiece) {
					if (destPiece.alliance !== this.alliance) {
						moves.push(PawnAttackingMove.create(board, this, destPiece, destRow, destCol))
					}
				}
				else {
					if (offset.col === 0) {
						moves.push(PawnRegularMove.create(board, this, destRow, destCol))
					}
				}
			}
		})

		if (this.isFirstMove && this.isOnStartingRow()) {
			destRow = this.row + dir + dir
			destCol = this.col

			if (board.get(destRow, destCol) === null) {
				if (board.get(destRow - dir, destCol) === null) {
					moves.push(PawnJumpMove.create(board, this, destRow, destCol))
				}
			}
		}

		return moves
	}
}

Pawn.extends(Piece)
