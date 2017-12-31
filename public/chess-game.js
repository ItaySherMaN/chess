const ChessGame = {
	init: function() {
		this.board = Board.standardBoardLayout

		this.whitePlayer = WhitePlayer.create(this)
		this.blackPlayer = blackPlayer.create(this)
	}
}
