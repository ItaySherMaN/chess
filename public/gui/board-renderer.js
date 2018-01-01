const BoardRenderer = {
	TILE_WIDTH: width / 8,
	WHITE_TILE_COLOR: 'rgb(200, 185, 120)',
	BLACK_TILE_COLOR: 'rgb(120, 80, 35)',

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

	renderTile: function(row, col) {
		const piece = this.board.get(row, col)
		const w = BoardRenderer.TILE_WIDTH

		let x = col * w
		let y = row * w

		if (this.view === Alliance.WHITE) {
			x = width - col * w - w
			y = height - row * w - w

			context.fillStyle =
				row % 2 === col % 2 ?
					BoardRenderer.WHITE_TILE_COLOR
				:
					BoardRenderer.BLACK_TILE_COLOR
		}
		else {
			context.fillStyle =
				row % 2 !== col % 2 ?
					BoardRenderer.WHITE_TILE_COLOR
				:
					BoardRenderer.BLACK_TILE_COLOR
		}

		context.fillRect(x, y, w, w)

		if (piece !== null) {
			context.drawImage(
				Cache.images[piece.type][piece.alliance],
				x, y, w, w
			)
		}
	}
}
