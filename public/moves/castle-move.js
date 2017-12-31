const CastleMove = {
	init: function(
		board,
		movedKing,
		kingDestRow,
		kingDestCol,
		movedRook,
		rookDestRow,
		rookDestCol
	) {
		this.parent(board, movedKing, kingDestRow, kingDestCol, arguments)

		this.movedRook = movedRook
		this.rookDestRow = rookDestRow
		this.rookDestCol = rookDestCol

		this.establishKingPathVector()
	},

	establishKingPathVector: function() {
		this.pathVector = []

		const deltaCol = this.destCol - this.movedPiece.col
		const inc = deltaCol / Math.abs(deltaCol)

		let i = this.movedPiece.col

		while (true) {
			this.pathVector.push({
				row: this.destRow,
				col: i
			})
			if (i === this.destCol) break
			i += inc
		}
	},

	isCastlingMove: function() {
		return true
	},

	execute: function(generateLegalMoves) {
		const builder = BoardBuilder.create(this.board.nextTurn())

		this.board.activePieces.forEach(piece => {
			if (piece !== this.movedPiece && piece !== this.movedRook) {
				builder.addPiece(piece)
			}
		})

		this.board.opponentPieces.forEach(piece => {
			builder.addPiece(piece)
		})

		builder.addPiece(Cache.getUsed(
			PieceType.KING,
			this.movedPiece.alliance,
			this.destRow,
			this.destCol
		))

		builder.addPiece(Cache.getUsed(
			PieceType.ROOK,
			this.movedRook.alliance,
			this.rookDestRow,
			this.rookDestCol
		))

		return builder.build(generateLegalMoves)
	}
}

CastleMove.extends(Move)
