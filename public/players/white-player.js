import Player from './player.js'

const WhitePlayer = {
	init(board, legalMoves, opponentLegalMoves) {
		this.parent(board, legalMoves, opponentLegalMoves, arguments)
	}
}

WhitePlayer.extends(Player)

export default WhitePlayer
