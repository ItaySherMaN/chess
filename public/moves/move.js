const Move = {
	init(board, destRow, destCol, movedPiece) {
		this.board = board
		this.destRow = destRow
		this.destCol = destCol
		this.movedPiece = movedPiece
	},

	execute() {
		return {opponentInCheck: false}
	}
}
