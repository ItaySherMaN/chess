import Player from './player.js'
import Alliance from './../alliance.js'
import BoardStatus from './../board/board-status.js'

const BlackPlayer = {
	init(game) {
		this.parent(game, arguments)
	},

	activePieces() {
		return this.board.blackPieces
	},

	alliance() {
		return Alliance.BLACK
	},

	opponent() {
		return this.game.whitePlayer
	},

	inCheck() {
		return this.game.board.status === BoardStatus.BLACK_IN_CHECK
	},

	inStalemate() {
		return this.game.board.status === BoardStatus.BLACK_IN_STALEMATE
	},

	inCheckmate() {
		return this.game.board.status === BoardStatus.BLACK_IN_CHECKMATE
	}
}

BlackPlayer.extends(Player)

export default BlackPlayer
