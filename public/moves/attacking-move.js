const AttackingMove = {
	init: function(board, movedPiece, attackedPiece, destRow, destCol) {
		this.parent(board, movedPiece, destRow, destCol, arguments)
		this.attackedPiece = attackedPiece
	},

	isAttacking: function() {
		return true
	}
}

AttackingMove.extends(Move)
