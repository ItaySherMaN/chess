const Move = {
	create: function(board, destIndex, movedPiece) {
		const obj = Object.create(this)

		obj.board = board
		obj.destIndex = destIndex
		obj.movedPiece = movedPiece

		return obj
	}
}

const RegularMove = {
	create: function(board, destIndex, movedPiece) {
		const obj = Move.create(board, destIndex, movedPiece)
		return obj
	}
}

const AttackingMove = {
	create: function(board, destIndex, movedPiece, attackedPiece) {
		const obj = Move.create(board, destIndex, movedPiece)
		obj.attackedPiece = attackedPiece
		return obj
	}
}

module.exports.RegularMove = RegularMove
module.exports.AttackingMove = AttackingMove
