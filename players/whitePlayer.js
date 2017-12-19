const playerjs = require('./player')

const Player = playerjs.Player

const WhitePlayer = {
	create: function(board, legalMoves, opponentLegalMoves) {
		const obj = Object.create(this)
		this.__proto__.super.apply(obj, arguments)
		return obj
	}
}

WhitePlayer.__proto__ = Player

module.exports.WhitePlayer = WhitePlayer
