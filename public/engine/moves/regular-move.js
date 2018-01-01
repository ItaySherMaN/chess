const RegularMove = {
	init: function(board, movedPiece, destRow, destCol) {
		this.parent(board, movedPiece, destRow, destCol, arguments)
	}
}

RegularMove.extends(Move)
