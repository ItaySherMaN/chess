const SteppingPiece = {
	init(row, col, type, alliance) {
		this.parent(row, col, type, alliance, arguments)
	},

	pseudoLegalMoves(board) {
		const moves = []

		this.moveOffsets.forEach(offset => {
			const destRow = this.row + offset.row
			const destCol = this.col + offset.col

			if (utils.areValidCoordinates(destRow, destCol)) {
				const destPiece = board.get(destRow, destCol)

				if (destPiece) {
					if (destPiece.alliance !== this.alliance) {
						moves.push(AttackingMove.create(board, destRow, destCol, this, destPiece))
					}
				}
				else {
					moves.push(RegularMove.create(board, destRow, destCol, this))
				}
			}
		})

		return moves
	}
}

SteppingPiece.extends(Piece)
