import Alliance from './../alliance.js'
import Board from './board.js'

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

export default BoardBuilder
