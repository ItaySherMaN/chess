const TileBuffer = {
	createBuffer: function(background, pieceID) {
		const buffer = document.createElement('canvas')

		const ctx = buffer.getContext('2d')

		const w = buffer.width = BoardRenderer.TILE_WIDTH
		const h = buffer.height = BoardRenderer.TILE_WIDTH

		ctx.fillStyle = BoardRenderer.TILE_COLOR[background]
		ctx.fillRect(0, 0, w, h)

		if (pieceID !== PieceID.EMPTY_PIECE) {
			ctx.drawImage(
				Cache.images[pieceID],
				0, 0,
				w, h
			)
		}

		return buffer
	},

	hashCode: function(background, pieceID) {
		return 2 * pieceID + background
	}
}
