const AttackingMove = {
	init: function(board, movedPiece, attackedPiece, destRow, destCol) {
		this.parent(board, movedPiece, destRow, destCol, arguments)
		this.attackedPiece = attackedPiece
	},

	isAttacking: function() {
		return true
	},

	execute: function(generateLegalMoves) {
		const builder = BoardBuilder.create(this.board.nextTurn())

		this.board.activePieces.forEach(piece => {
			if (piece !== this.movedPiece) {
				builder.addPiece(piece)
			}
		})

		this.board.opponentPieces.forEach(piece => {
			if (piece !== this.attackedPiece) {
				builder.addPiece(piece)
			}
		})

		builder.addPiece(Cache.getUsed(
			this.movedPiece.type,
			this.movedPiece.alliance,
			this.destRow,
			this.destCol
		))

		return builder.build(generateLegalMoves)
	}
}

AttackingMove.extends(Move)
