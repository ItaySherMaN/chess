const PawnRegularMove = {
	init: function(board, movedPiece, destRow, destCol) {
		this.parent(board, movedPiece, destRow, destCol, arguments)
	}
}

PawnRegularMove.extends(Move)
