import Player from 'player'

const WhitePlayer = Object.create(Player)

WhitePlayer.create = function(board, legalMoves, opponentLegalMoves) {
	const obj = Object.create(this)
	this.__proto__.super.apply(obj, arguments)
	return obj
}

export default WhitePlayer
