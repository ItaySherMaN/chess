const Pawn = {
	moveOffset: {row: 1, col: 0},
	jumpOffset: {row: 2, col: 0},

	attackOffsets: [
		{row: 1, col:  1},
		{row: 1, col: -1}
	],

	init: function(row, col, alliance, isFirstMove) {
		this.parent(
			row,
			col,
			PieceType.PAWN,
			alliance, isFirstMove,
			arguments
		)
	},

	isOnStartingRow: function() {
		if (this.alliance === Alliance.WHITE) {
			return this.row === 1
		}
		return this.row === 6
	},

	// TODO: implement promotions!
	pseudoLegalMoves: function(board) {
		const moves = []
		const dir = Alliance.pawnDirection(this.alliance)

		let destRow = this.row + this.moveOffset.row * dir
		let destCol = this.col + this.moveOffset.col

		// checking the regular pawn move
		if (utils.areValidCoordinates(destRow, destCol)) {
			if (board.get(destRow, destCol) === null) {
				moves.push(PawnRegularMove.create(
					board,
					this,
					destRow,
					destCol
				))
			}
		}

		// checking the pawn attacking moves
		this.attackOffsets.forEach(offset => {
			destRow = this.row + offset.row * dir
			destCol = this.col + offset.col

			if (utils.areValidCoordinates(destRow, destCol)) {
				const destPiece = board.get(destRow, destCol)

				if (destPiece !== null) {
					if (destPiece.alliance !== this.alliance) {
						moves.push(PawnAttackingMove.create(
							board,
							this,
							destPiece,
							destRow,
							destCol
						))
					}
				}
			}
		})

		// checking the pawn jump move
		if (this.isFirstMove && this.isOnStartingRow()) {
			destRow = this.row + this.jumpOffset.row * dir
			destCol = this.col

			if (board.get(destRow, destCol) === null) {
				if (board.get(destRow - dir, destCol) === null) {
					moves.push(PawnJumpMove.create(
						board,
						this,
						destRow,
						destCol
					))
				}
			}
		}

		// checking the pawn en passant move
		const epPawn = board.enPassantPawn

		if (epPawn) {
			if (this.row === epPawn.row) {
				if (Math.abs(epPawn.col - this.col) === 1) {
					moves.push(AttackingMove.create(
						board,
						this,
						epPawn,
						this.row + dir,
						epPawn.col
					))
				}
			}
		}

		return moves
	}
}

Pawn.extends(Piece)
