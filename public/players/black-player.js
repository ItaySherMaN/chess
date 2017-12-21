import Player from 'player'

const BlackPlayer = Object.create(Player)

BlackPlayer.create = function(board, legalMoves, opponentLegalMoves) {
	const obj = Object.create(this)
	this.__proto__.super.apply(obj, arguments)
	return obj
}

export default BlackPlayer
