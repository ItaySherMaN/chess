
// Black rook on the 5th row and the 3rd column =
//
// Cache.pieces[true][PieceType.ROOK][Alliance.BLACK][utils.index(5, 3)]

const fillPieces = function(prototypePiece, alliance, isFirstMove) {
	return new Array(utils.NUM_TILES).fill(null).map((value, index) => {
		return prototypePiece.create(utils.row(index), utils.col(index), alliance, isFirstMove)
	})
}

const Cache = {
	getNew: function(pieceType, alliance, row, col) {
		return this.pieces[true][pieceType][alliance][utils.index(row, col)]
	},

	getUsed: function(pieceType, alliance, row, col) {
		return this.pieces[false][pieceType][alliance][utils.index(row, col)]
	},

	pieces: {
		[true]: {
			[PieceType.PAWN]: {
				[Alliance.WHITE]: fillPieces(Pawn, Alliance.WHITE, true),
				[Alliance.BLACK]: fillPieces(Pawn, Alliance.BLACK, true)
			},

			[PieceType.KNIGHT]: {
				[Alliance.WHITE]: fillPieces(Knight, Alliance.WHITE, true),
				[Alliance.BLACK]: fillPieces(Knight, Alliance.BLACK, true)
			},

			[PieceType.BISHOP]: {
				[Alliance.WHITE]: fillPieces(Bishop, Alliance.WHITE, true),
				[Alliance.BLACK]: fillPieces(Bishop, Alliance.BLACK, true)
			},

			[PieceType.ROOK]: {
				[Alliance.WHITE]: fillPieces(Rook, Alliance.WHITE, true),
				[Alliance.BLACK]: fillPieces(Rook, Alliance.BLACK, true)
			},

			[PieceType.QUEEN]: {
				[Alliance.WHITE]: fillPieces(Queen, Alliance.WHITE, true),
				[Alliance.BLACK]: fillPieces(Queen, Alliance.BLACK, true)
			},

			[PieceType.KING]: {
				[Alliance.WHITE]: fillPieces(King, Alliance.WHITE, true),
				[Alliance.BLACK]: fillPieces(King, Alliance.BLACK, true)
			}
		},

		[false]: {
			[PieceType.PAWN]: {
				[Alliance.WHITE]: fillPieces(Pawn, Alliance.WHITE, false),
				[Alliance.BLACK]: fillPieces(Pawn, Alliance.BLACK, false)
			},

			[PieceType.KNIGHT]: {
				[Alliance.WHITE]: fillPieces(Knight, Alliance.WHITE, false),
				[Alliance.BLACK]: fillPieces(Knight, Alliance.BLACK, false)
			},

			[PieceType.BISHOP]: {
				[Alliance.WHITE]: fillPieces(Bishop, Alliance.WHITE, false),
				[Alliance.BLACK]: fillPieces(Bishop, Alliance.BLACK, false)
			},

			[PieceType.ROOK]: {
				[Alliance.WHITE]: fillPieces(Rook, Alliance.WHITE, false),
				[Alliance.BLACK]: fillPieces(Rook, Alliance.BLACK, false)
			},

			[PieceType.QUEEN]: {
				[Alliance.WHITE]: fillPieces(Queen, Alliance.WHITE, false),
				[Alliance.BLACK]: fillPieces(Queen, Alliance.BLACK, false)
			},

			[PieceType.KING]: {
				[Alliance.WHITE]: fillPieces(King, Alliance.WHITE, false),
				[Alliance.BLACK]: fillPieces(King, Alliance.BLACK, false)
			}
		}
	}
}
