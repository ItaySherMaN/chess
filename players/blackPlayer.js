const playerjs = require('./player')

const Player = playerjs.Player

const BlackPlayer = {
	create: function(board, legalMoves, opponentLegalMoves) {
		const obj = Object.create(this)
		this.__proto__.super.apply(obj, arguments)
		return obj
	}
}

BlackPlayer.__proto__ = Player

module.exports.BlackPlayer = BlackPlayer
