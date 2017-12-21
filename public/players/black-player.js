import Player from 'player'

const BlackPlayer = {
	init(board, legalMoves, opponentLegalMoves) {
		this.parent(board, legalMoves, opponentLegalMoves, arguments)
	}
}

BlackPlayer.extends(Player)

export default BlackPlayer
