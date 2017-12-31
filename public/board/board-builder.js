const BoardBuilder = {
	init: function(turn) {
		this.turn = turn
		this.enPassantPawn = null
		this.whiteConfig = []
		this.blackConfig = []
	},

	addPiece: function(piece) {
		if (piece.alliance === Alliance.WHITE) {
			this.whiteConfig.push(piece)
		}
		else {
			this.blackConfig.push(piece)
		}
	},

	build: function(generateLegalMoves) {
		return Board.create(this, generateLegalMoves)
	}
}

BoardBuilder.standardBoardLayout = (function() {
	const builder = BoardBuilder.create(Alliance.WHITE)

	builder.addPiece(Cache.getNew(PieceType.ROOK  , Alliance.WHITE, 0, 0))
	builder.addPiece(Cache.getNew(PieceType.KNIGHT, Alliance.WHITE, 0, 1))
	builder.addPiece(Cache.getNew(PieceType.BISHOP, Alliance.WHITE, 0, 2))
	builder.addPiece(Cache.getNew(PieceType.QUEEN , Alliance.WHITE, 0, 3))
	builder.addPiece(Cache.getNew(PieceType.KING  , Alliance.WHITE, 0, 4))
	builder.addPiece(Cache.getNew(PieceType.BISHOP, Alliance.WHITE, 0, 5))
	builder.addPiece(Cache.getNew(PieceType.KNIGHT, Alliance.WHITE, 0, 6))
	builder.addPiece(Cache.getNew(PieceType.ROOK  , Alliance.WHITE, 0, 7))

	for (let i = 0; i < utils.NUM_COLS; i++) {
		builder.addPiece(Cache.getNew(PieceType.PAWN, Alliance.WHITE, 1, i))
		builder.addPiece(Cache.getNew(PieceType.PAWN, Alliance.BLACK, 6, i))
	}

	builder.addPiece(Cache.getNew(PieceType.ROOK  , Alliance.BLACK, 7, 0))
	builder.addPiece(Cache.getNew(PieceType.KNIGHT, Alliance.BLACK, 7, 1))
	builder.addPiece(Cache.getNew(PieceType.BISHOP, Alliance.BLACK, 7, 2))
	builder.addPiece(Cache.getNew(PieceType.QUEEN , Alliance.BLACK, 7, 3))
	builder.addPiece(Cache.getNew(PieceType.KING  , Alliance.BLACK, 7, 4))
	builder.addPiece(Cache.getNew(PieceType.BISHOP, Alliance.BLACK, 7, 5))
	builder.addPiece(Cache.getNew(PieceType.KNIGHT, Alliance.BLACK, 7, 6))
	builder.addPiece(Cache.getNew(PieceType.ROOK  , Alliance.BLACK, 7, 7))

	return builder.build(true)
})()
