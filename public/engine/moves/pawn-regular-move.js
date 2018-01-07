const PawnRegularMove = {
	// TODO: implement promotion!
	
	init: function(board, movedPiece, destRow, destCol) {
		this.parent(board, movedPiece, destRow, destCol, arguments)
	}
}

PawnRegularMove.extends(Move)
