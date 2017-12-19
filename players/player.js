const Player = {
	create: function(board, legalMoves, opponentLegalMoves) {
		return Object.create(this).super(board, legalMoves, opponentLegalMoves)
	},

	super: function(board, legalMoves, opponentLegalMoves) {
		this.board = board
		this.legalMoves = legalMoves
	}
}

module.exports.Player = Player
