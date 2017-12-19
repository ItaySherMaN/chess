const WhitePlayer = {
	create: function(board, legalMoves, opponentLegalMoves) {
		const obj = Player.create(board, legalMoves, opponentLegalMoves)
		obj.alliance = Alliance.WHITE
		return obj
	}
}
