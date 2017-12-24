const RegularMove = {
	init(board, destRow, destCol, movedPiece) {
		this.parent(board, destRow, destCol, movedPiece, arguments)
	},

	execute(generateLegalMoves) {
		const builder = BoardBuilder.create(this.board.nextTurn())

		this.board.activePieces.forEach(piece => {
			if (piece !== this.movedPiece) {
				builder.addPiece(piece)
			}
		})

		this.board.opponentPieces.forEach(piece => {
			builder.addPiece(piece)
		})

		builder.addPiece(
			Cache.pieces
				[this.movedPiece.type]
					[this.movedPiece.alliance]
						[utils.index(this.destRow, this.destCol)]
		)

		return builder.build(generateLegalMoves)
	},

	isAttackingMove() {
		return false
	}
}

RegularMove.extends(Move)
