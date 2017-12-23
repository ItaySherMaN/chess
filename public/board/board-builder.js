const BoardBuilder = {
	init(turn) {
		this.turn = turn
		this.whiteConfig = []
		this.blackConfig = []
	},

	addPiece(piece) {
		import Alliance from './../alliance.js'
		if (piece.alliance === Alliance.WHITE) {
			this.whiteConfig.push(piece)
		}
		else {
			this.blackConfig.push(piece)
		}
	},

	build(generateLegalMoves) {
		import Board from './board.js'
		return Board.create(this, generateLegalMoves)
	}
}

export default BoardBuilder
