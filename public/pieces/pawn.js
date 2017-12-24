const Pawn = {
	moveOffsets: [
		{row: 1, col:  0},
		{row: 1, col:  1},
		{row: 1, col: -1}
	],

	init(row, col, alliance) {
		this.parent(row, col, PieceType.PAWN, alliance, arguments)
		this.isFirstMove = true
	},

	pseudoLegalMoves(board) {
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
						moves.push(AttackingMove.create(board, destRow, destCol, this, destPiece))
					}
				}
				else {
					if (offset.col === 0) {
						moves.push(RegularMove.create(board, destRow, destCol, this))
					}
				}
			}
		})

		if (this.isFirstMove && this.row === Alliance.startingPawnRow(this.alliance)) {
			destRow = this.row + 2 * dir
			destCol = this.col

			if (!board.get(destRow, destCol)) {
				if (!board.get(destRow - dir, destCol)) {
					moves.push(RegularMove.create(board, destRow, destCol, this))
				}
			}
		}

		return moves
	}
}

Pawn.extends(Piece)
