const PawnAttackingMove = {
	// TODO: implement promotion
	
	init: function(board, movedPiece, attackedPiece, destRow, destCol) {
		this.parent(board, movedPiece, attackedPiece, destRow, destCol, arguments)
	}
}

PawnAttackingMove.extends(AttackingMove)
