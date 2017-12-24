const BoardBuilder = {
	init(turn) {
		this.turn = turn
		this.whiteConfig = []
		this.blackConfig = []
	},

	addPiece(piece) {
		if (piece.alliance === Alliance.WHITE) {
			this.whiteConfig.push(piece)
		}
		else {
			this.blackConfig.push(piece)
		}
	},

	build(generateLegalMoves) {
		return Board.create(this, generateLegalMoves)
	}
}

BoardBuilder.standardBoardLayout = (function() {
	const builder = BoardBuilder.create(Alliance.WHITE)

	builder.addPiece(Cache.pieces[PieceType.ROOK  ][Alliance.WHITE][utils.index(0, 0)])
	builder.addPiece(Cache.pieces[PieceType.KNIGHT][Alliance.WHITE][utils.index(0, 1)])
	builder.addPiece(Cache.pieces[PieceType.BISHOP][Alliance.WHITE][utils.index(0, 2)])
	builder.addPiece(Cache.pieces[PieceType.QUEEN ][Alliance.WHITE][utils.index(0, 3)])
	builder.addPiece(Cache.pieces[PieceType.KING  ][Alliance.WHITE][utils.index(0, 4)])
	builder.addPiece(Cache.pieces[PieceType.BISHOP][Alliance.WHITE][utils.index(0, 5)])
	builder.addPiece(Cache.pieces[PieceType.KNIGHT][Alliance.WHITE][utils.index(0, 6)])
	builder.addPiece(Cache.pieces[PieceType.ROOK  ][Alliance.WHITE][utils.index(0, 7)])

	for (let i = 0; i < utils.NUM_COLS; i++) {
		builder.addPiece(Cache.pieces[PieceType.PAWN][Alliance.WHITE][utils.index(1, i)])
		builder.addPiece(Cache.pieces[PieceType.PAWN][Alliance.BLACK][utils.index(6, i)])
	}

	builder.addPiece(Cache.pieces[PieceType.ROOK  ][Alliance.BLACK][utils.index(7, 0)])
	builder.addPiece(Cache.pieces[PieceType.KNIGHT][Alliance.BLACK][utils.index(7, 1)])
	builder.addPiece(Cache.pieces[PieceType.BISHOP][Alliance.BLACK][utils.index(7, 2)])
	builder.addPiece(Cache.pieces[PieceType.QUEEN ][Alliance.BLACK][utils.index(7, 3)])
	builder.addPiece(Cache.pieces[PieceType.KING  ][Alliance.BLACK][utils.index(7, 4)])
	builder.addPiece(Cache.pieces[PieceType.BISHOP][Alliance.BLACK][utils.index(7, 5)])
	builder.addPiece(Cache.pieces[PieceType.KNIGHT][Alliance.BLACK][utils.index(7, 6)])
	builder.addPiece(Cache.pieces[PieceType.ROOK  ][Alliance.BLACK][utils.index(7, 7)])

	return builder.build(true)
})()
