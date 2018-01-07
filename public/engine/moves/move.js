const Move = {
	init: function(board, movedPiece, destRow, destCol) {
		this.board = board
		this.movedPiece = movedPiece
		this.destRow = destRow
		this.destCol = destCol
	},

	isAttacking: function() {
		return false
	},

	isCastlingMove: function() {
		return false
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

		builder.addPiece(Cache.getUsedPiece(
			this.destRow,
			this.destCol,
			this.movedPiece.type,
			this.movedPiece.alliance
		))

		return builder.build(generateLegalMoves)
	}
}
