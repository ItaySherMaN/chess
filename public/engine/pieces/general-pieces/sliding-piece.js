const SlidingPiece = {
	init: function(row, col, type, alliance, isFirstMove) {
		this.parent(row, col, type, alliance, isFirstMove, arguments)
	},

	pseudoLegalMoves: function(board) {
		const moves = []

		this.moveOffsets.forEach(offset => {
			let destRow = this.row + offset.row
			let destCol = this.col + offset.col

			while (utils.areValidCoordinates(destRow, destCol)) {
				const destPiece = board.get(destRow, destCol)

				if (destPiece) {
					if (this.alliance !== destPiece.alliance) {
						moves.push(AttackingMove.create(board, this, destPiece, destRow, destCol))
					}
					break
				}
				else {
					moves.push(RegularMove.create(board, this, destRow, destCol))
				}

				destRow += offset.row
				destCol += offset.col
			}
		})

		return moves
	}
}

SlidingPiece.extends(Piece)
