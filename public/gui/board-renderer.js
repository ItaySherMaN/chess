const BoardRenderer = {
	TILE_WIDTH: width / 8,
	TILE_COLOR = [
		'rgb(200, 185, 120)',
		'rgb(120, 80, 35)'
	]

	init: function(board, view) {
		this.tiles = []

		for (let i = 0; i < utils.NUM_ROWS; i++) {
			for (let j = 0; j < utils.NUM_COLS; j++) {
				const buffer = document.createElement('canvas')
				const ctx = buffer.getContext('2d')
				const w = buffer.width = BoardRenderer.TILE_WIDTH
				const h = buffer.height = BoardRenderer.TILE_WIDTH

				ctx.fillStyle = this.tileColor(i, j)
				ctx.fillRect(0, 0, w, h)

				this.tiles.push(buffer)
			}
		}
		this.tiles = (
			new Array(utils.NUM_TILES)
			.fill(null)
			.map((value, index) => {
				const buffer = document.createElement('canvas')

				buffer.width = BoardRenderer.TILE_WIDTH
				buffer.height = BoardRenderer.TILE_WIDTH

				buffer.

				cvs.addEventListener('click', e => {

				})

				return cvs
			})
		)

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
			y = height - row * w - w
		}

		context.fillStyle = this.tileColor(row, col)

		context.fillRect(x, y, w, w)

		if (piece !== null) {
			context.drawImage(
				Cache.images[piece.type][piece.alliance],
				x, y, w, w
			)
		}
	}
}
