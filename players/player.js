const Player = {
	create: function(board, legalMoves, opponentLegalMoves) {
		const obj = Object.create(this)

		obj.board = board
		obj.legalMoves = legalMoves

		return obj
	}
}
