import Player from './player.js'
import Alliance from './../alliance.js'
import BoardStatus from './../board/board-status.js'

const WhitePlayer = {
	init(game) {
		this.parent(game, arguments)
	},

	activePieces() {
		return this.board.whitePieces
	},

	alliance() {
		return Alliance.WHITE
	},

	opponent() {
		return this.game.blackPlayer
	},

	inCheck() {
		return this.game.board.status === BoardStatus.WHITE_IN_CHECK
	},

	inStalemate() {
		return this.game.board.status === BoardStatus.WHITE_IN_STALEMATE
	},

	inCheckmate() {
		return this.game.board.status === BoardStatus.WHITE_IN_CHECKMATE
	}
}

WhitePlayer.extends(Player)

export default WhitePlayer
