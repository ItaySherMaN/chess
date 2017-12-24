const AttackingMove = {
	init(board, destRow, destCol, movedPiece, attackedPiece) {
		this.parent(board, destRow, destCol, movedPiece, arguments)
		this.attackedPiece = attackedPiece
	},

	isAttackingMove() {
		return true
	}
}

AttackingMove.extends(Move)
