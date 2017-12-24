const SlidingPiece = {
	init(row, col, type, alliance) {
		this.parent(row, col, type, alliance, arguments)
	},

	pseudoLegalMoves(board) {
		const moves = []

		this.moveOffsets.forEach(offset => {
			let destRow = this.row + offset.row
			let destCol = this.col + offset.col

			while (utils.areValidCoordinates(destRow, destCol)) {
				const destPiece = board.get(destRow, destCol)

				if (destPiece) {
					if (destPiece.alliance !== this.alliance) {
						moves.push(AttackingMove.create(board, destRow, destCol, this, destPiece))
					}
					break
				}
				else {
					moves.push(RegularMove.create(board, destRow, destCol, this))
				}

				destRow += offset.row
				destCol += offset.col
			}
		})

		return moves
	}
}

SlidingPiece.extends(Piece)
