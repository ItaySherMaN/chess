const BlackPlayer = {
	create: function(board, legalMoves, opponentLegalMoves) {
		const obj = Player.create(board, legalMoves, opponentLegalMoves)
		obj.alliance = Alliance.BLACK
		return obj
	}
}
