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
	},

	establishStandardBoardLayout: function() {
		const builder = BoardBuilder.create(Alliance.WHITE)

		builder.addPiece(Cache.getNewPiece(0, 0, PieceType.ROOK  , Alliance.WHITE))
		builder.addPiece(Cache.getNewPiece(0, 1, PieceType.KNIGHT, Alliance.WHITE))
		builder.addPiece(Cache.getNewPiece(0, 2, PieceType.BISHOP, Alliance.WHITE))
		builder.addPiece(Cache.getNewPiece(0, 3, PieceType.QUEEN , Alliance.WHITE))
		builder.addPiece(Cache.getNewPiece(0, 4, PieceType.KING  , Alliance.WHITE))
		builder.addPiece(Cache.getNewPiece(0, 5, PieceType.BISHOP, Alliance.WHITE))
		builder.addPiece(Cache.getNewPiece(0, 6, PieceType.KNIGHT, Alliance.WHITE))
		builder.addPiece(Cache.getNewPiece(0, 7, PieceType.ROOK  , Alliance.WHITE))

		for (let i = 0; i < utils.NUM_COLS; i++) {
			builder.addPiece(Cache.getNewPiece(1, i, PieceType.PAWN, Alliance.WHITE))
			builder.addPiece(Cache.getNewPiece(6, i, PieceType.PAWN, Alliance.BLACK))
		}

		builder.addPiece(Cache.getNewPiece(7, 0, PieceType.ROOK  , Alliance.BLACK))
		builder.addPiece(Cache.getNewPiece(7, 1, PieceType.KNIGHT, Alliance.BLACK))
		builder.addPiece(Cache.getNewPiece(7, 2, PieceType.BISHOP, Alliance.BLACK))
		builder.addPiece(Cache.getNewPiece(7, 3, PieceType.QUEEN , Alliance.BLACK))
		builder.addPiece(Cache.getNewPiece(7, 4, PieceType.KING  , Alliance.BLACK))
		builder.addPiece(Cache.getNewPiece(7, 5, PieceType.BISHOP, Alliance.BLACK))
		builder.addPiece(Cache.getNewPiece(7, 6, PieceType.KNIGHT, Alliance.BLACK))
		builder.addPiece(Cache.getNewPiece(7, 7, PieceType.ROOK  , Alliance.BLACK))

		this.standardBoardLayout = builder.build(true)
	}
}
