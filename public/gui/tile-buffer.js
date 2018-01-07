const TileBuffer = {
	init: function(background, pieceID) {
		this.buffer = document.createElement('canvas')

		const ctx = buffer.getContext('2d')

		const w = buffer.width = BoardRenderer.TILE_WIDTH
		const h = buffer.height = BoardRenderer.TILE_WIDTH

		ctx.fillStyle = BoardRenderer.tileColor(background)
		ctx.fillRect(0, 0, w, h)

		if (pieceID !== PieceID.EMPTY) {
			ctx.drawImage(
				Cache.images[pieceID],
				0, 0,
				w, h
			)
		}
	},

	hashCode: function(backgroundAlliance, pieceID) {
		let r = pieceID
		r = 2 * r + backgroundAlliance
		return r
	}
}
