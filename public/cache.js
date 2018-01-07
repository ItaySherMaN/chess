const Cache = {
	tileImages: allPossibleTileImages(),
	pieces: allPossiblePieces(),

	getNewPiece: function(row, col, type, alliance) {
		return this.pieces[Piece.hashCode(row, col, type, alliance, true)]
	},

	getUsedPiece: function(row, col, type, alliance) {
		return this.pieces[Piece.hashCode(row, col, type, alliance, false)]
	},

	getPieceImage: function(type, alliance) {
		return this.images[utils.pieceID(type, alliance)]
	}
}

const allPossiblePieces = function() {
	const pieces = new Array(
		utils.NUM_PIECE_IDS *
		utils.NUM_TILES *
		2 // new or used
	)

	for (let row = 0; row < utils.NUM_ROWS; row++) {
		for (let col = 0; col < utils.NUM_COLS; col++) {
			for (let type = 0; type < 6; type++) {
				for (let alliance = 0; alliance < 2; alliance++) {
					pieces[Piece.hashCode(row, col, type, alliance, true)] = (
						Prototype[type].create(row, col, alliance, true)
					)

					pieces[Piece.hashCode(row, col, type, alliance, false)] = (
						Prototype[type].create(row, col, alliance, false)
					)
				}
			}
		}
	}

	return pieces
}

const allPossibleTileImages = function() {
	const images = new Array(
		utils.NUM_ALLIANCES *
		utils.NUM_PIECE_IDS
	)

	for (let background = 0; background < utils.NUM_ALLIANCES; background++) {
		for (let pieceID = 0; pieceID < utils.NUM_PIECE_IDS + 1; pieceID++) {
			images[TileBuffer.hashCode(background, pieceID)] = (
				TileBuffer.create(background, pieceID)
			)
		}
	}

	return images
}

const loadImages = function() {
	return new Promise((resolve, reject) => {
		Promise.all(
			new Array(util.NUM_PIECE_IDS).fill(null).map((value, index) => {
				return loadImage(
					'/assets/img/' + PieceID.toString(index) + '.png'
				)
			}
		)).then(images => {
			Cache.images = images
			resolve()
		}).catch(err => {
			reject()
		})
	});
}
