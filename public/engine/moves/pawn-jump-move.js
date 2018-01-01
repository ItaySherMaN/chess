const PawnJumpMove = {
	init: function(board, movedPawn, destRow, destCol) {
		this.parent(board, movedPawn, destRow, destCol, arguments)
	},

	execute: function(generateLegalMoves) {
		const builder = BoardBuilder.create(this.board.nextTurn())

		this.board.activePieces.forEach(piece => {
			if (piece !== this.movedPiece) {
				builder.addPiece(piece)
			}
		})

		this.board.opponentPieces.forEach(piece => {
			builder.addPiece(piece)
		})

		const newPawn = Cache.getUsed(
			PieceType.PAWN,
			this.movedPiece.alliance,
			this.destRow,
			this.destCol
		)

		builder.addPiece(newPawn)
		builder.enPassantPawn = newPawn

		return builder.build(generateLegalMoves)
	}
}

PawnJumpMove.extends(RegularMove)
