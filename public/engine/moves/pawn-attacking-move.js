const PawnAttackingMove = {
	init: function(board, movedPiece, attackedPiece, destRow, destCol) {
		this.parent(board, movedPiece, attackedPiece, destRow, destCol, arguments)
	}
}

PawnAttackingMove.extends(AttackingMove)
