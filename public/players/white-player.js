import Player from 'player'

const WhitePlayer = {
	init(board, legalMoves, opponentLegalMoves) {
		this.parent(board, legalMoves, opponentLegalMoves)
	}
}

WhitePlayer.extends(Player)

export default WhitePlayer
