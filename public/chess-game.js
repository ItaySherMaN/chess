const ChessGame = {
	init() {
		this.whitePlayer = WhitePlayer.create(this)
		this.blackPlayer = blackPlayer.create(this)

		this.board = Board.standardBoardLayout

		this.board.whitePlayer = this.whitePlayer
		this.board.blackPlayer = this.blackPlayer
	}
}
