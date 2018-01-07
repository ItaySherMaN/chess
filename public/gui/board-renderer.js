const BoardRenderer = {
	TILE_WIDTH: width / 8,
	TILE_COLOR: [
		'rgb(200, 185, 120)',
		'rgb(120, 80, 35)'
	],

	init: function(board, view) {
		this.board = board
		this.view = view
	},

	render: function() {
		for (let i = 0; i < utils.NUM_ROWS; i++) {
			for (let j = 0; j < utils.NUM_COLS; j++) {
				this.renderTile(i, j)
			}
		}
	},

	tileAlliance: function(row, col) {
		return row % 2 === col % 2 ? 1 : 0
	},

	renderTile: function(row, col) {
		const piece = this.board.get(row, col)
		const w = BoardRenderer.TILE_WIDTH

		const x = col * w
		const y =
			this.view === Alliance.BLACK ?
				row * w
			:
				height - row * w - w

		const background = this.tileAlliance(row, col)
		const pieceID =
			piece ?
				utils.pieceID(piece.type, piece.alliance)
			:
				PieceID.EMPTY_PIECE

		context.drawImage(
			Cache.tileBuffers[TileBuffer.hashCode(background, pieceID)],
			x, y,
			w, w
		)
	}
}
