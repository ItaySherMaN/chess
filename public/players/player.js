const Player = {
	init(game) {
		this.game = game

		this.updatePseudoLegalMoves()
	},

	updateLegalMoves() {
		this.legalMoves = this.pseudoLegalMoves.filter(move => {
			return this.playMove(move).status === BoardStatus.ON_GOING
		})
	},

	updatePseudoLegalMoves() {
		this.pseudoLegalMoves = []

		this.pieces.forEach(piece => {
			piece.pseudoLegalMoves(this.game.board).forEach(move => {
				this.pseudoLegalMoves.push(move)
			})
		})
	},

	updateAvailableMoves() {
		updatePseudoLegalMoves()
		updateLegalMoves()
	},

	playMove(move) {

	},

	canMove() {
		return this.legalMoves.length !== 0
	}
}

export default Player
