const ChessGame = {
	init() {
		this.board = Board.standardBoardLayout

		this.whitePlayer = WhitePlayer.create(this)
		this.blackPlayer = blackPlayer.create(this)
	}
}
