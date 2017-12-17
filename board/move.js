const Move = {
	create: function(board, destRow, destCol, movedPiece) {
		const obj = Object.create(this)

		obj.board = board
		obj.destRow = destRow
		obj.destCol = destCol
		obj.movedPiece = movedPiece

		return obj
	}
}

const RegularMove = {
	create: function(board, destRow, destCol, movedPiece) {
		return Move.create(board, destRow, destCol, movedPiece)
	}
}

const AttackingMove = {
	create: function(board, destRow, destCol, movedPiece, attackedPiece) {
		const obj = Move.create(board, destRow, destCol, movedPiece)
		obj.attackedPiece = attackedPiece
		return obj
	}
}

const RegularPawnMove = {
	create: function(board, destRow, destCol, movedPiece) {
		const obj = RegularMove.create(board, destRow, destCol, movedPiece)

		// TODO: implement promotions!

		return obj
	}
}

const AttackingPawnMove = {
	create: function(board, destRow, destCol, movedPiece, attackedPiece) {
		const obj = AttackingMove.create(board, destRow, destCol, movedPiece, attackedPiece)

		// TODO: implement promotions!

		return obj
	}
}

module.exports.RegularMove = RegularMove
module.exports.AttackingMove = AttackingMove
