const allPossibleTileImages = function() {

}

const allPossiblePieces = function() {

}

const Cache = {
	getNewPiece: function(row, col, type, alliance) {
		return this.pieces[Piece.hashCode(row, col, type, alliance, true)]
	},

	getUsedPiece: function(row, col, type, alliance) {
		return this.pieces[Piece.hashCode(row, col, type, alliance, false)]
	},

	getPieceImage: function(type, alliance) {
		return this.images[utils.pieceID(type, alliance)]
	},

	loadImages: function() {
		return new Promise((resolve, reject) => {
			Promise.all(
				new Array(utils.NUM_PIECE_IDS)
				.fill(null)
				.map((value, id) => {
					return utils.loadImage(
						'/assets/img/' + PieceID.toString[id] + '.png'
					)
				})
			).then(images => {
				console.log(images)
				Cache.images = images
				resolve()
			}).catch(err => {
				reject()
			})
		})
	},

	loadAllPossibleTileBuffers: function() {
		this.tileBuffers = new Array(
			utils.NUM_ALLIANCES *
			(utils.NUM_PIECE_IDS + 1) // including the empty tile images
		)

		this.tileBuffers = new Array(26)

		for (let background = 0; background < utils.NUM_ALLIANCES; background++) {
			for (let pieceID = 0; pieceID < utils.NUM_PIECE_IDS + 1; pieceID++) {
				this.tileBuffers[TileBuffer.hashCode(background, pieceID)] =
					TileBuffer.createBuffer(background, pieceID)
			}
		}

		this.tileBuffers[0] = TileBuffer.createBuffer(0, 0)
	},

	loadAllPossiblePieces: function() {
		this.pieces = new Array(
			utils.NUM_PIECE_IDS *
			utils.NUM_TILES *
			2 // new or used
		)

		for (let row = 0; row < utils.NUM_ROWS; row++) {
			for (let col = 0; col < utils.NUM_COLS; col++) {
				for (let type = 0; type < utils.NUM_PIECE_TYPES; type++) {
					for (let alliance = 0; alliance < utils.NUM_PIECE_TYPES; alliance++) {
						this.pieces[Piece.hashCode(row, col, type, alliance, true)] = (
							PieceType.prototype(type).create(row, col, alliance, true)
						)

						this.pieces[Piece.hashCode(row, col, type, alliance, false)] = (
							PieceType.prototype(type).create(row, col, alliance, false)
						)
					}
				}
			}
		}
	}
}
