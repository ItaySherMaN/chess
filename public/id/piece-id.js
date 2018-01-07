const PieceID = {
	WHITE_PAWN:   0,
	BLACK_PAWN:   1,
	WHITE_KNIGHT: 2,
	BLACK_KNIGHT: 3,
	WHITE_BISHOP: 4,
	BLACK_BISHOP: 5,
	WHITE_ROOK:   6,
	BLACK_ROOK:   7,
	WHITE_QUEEN:  8,
	BLACK_QUEEN:  9,
	WHITE_KING:   10,
	BLACK_KING:   11,
	EMPTY_PIECE:  12,

	toString: new Array(12).fill(null).map((value, index) => {
		return (
			Alliance.toString[utils.alliance(index)] +
			PieceType.toString[utils.pieceType(index)]
		)
	})
}
