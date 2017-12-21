import Player from 'player'

const BlackPlayer = {
	init(board, legalMoves, opponentLegalMoves) {
		this.parent(board, legalMoves, opponentLegalMoves)
	}
}

BlackPlayer.extends(Player)

export default BlackPlayer
