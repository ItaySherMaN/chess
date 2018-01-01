
// Black rook on the 5th row and the 3rd column =
//
// Cache.pieces[true][PieceType.ROOK][Alliance.BLACK][utils.index(5, 3)]

const fillPieces = function(prototypePiece, alliance, isFirstMove) {
	return new Array(utils.NUM_TILES).fill(null).map((value, index) => {
		return prototypePiece.create(utils.row(index), utils.col(index), alliance, isFirstMove)
	})
}

const loadImage = function(url) {
	return new Promise(resolve => {
		const image = new Image()

		image.addEventListener('load', () => {
			resolve(image)
		})

		image.src = url
	});
}

const Cache = {
	getNew: function(pieceType, alliance, row, col) {
		return this.pieces[true][pieceType][alliance][utils.index(row, col)]
	},

	getUsed: function(pieceType, alliance, row, col) {
		return this.pieces[false][pieceType][alliance][utils.index(row, col)]
	},

	loadImages: function() {
		return new Promise((resolve, reject) => {
			Promise.all([
				loadImage('/assets/img/bb.png'),
				loadImage('/assets/img/bk.png'),
				loadImage('/assets/img/bn.png'),
				loadImage('/assets/img/bp.png'),
				loadImage('/assets/img/bq.png'),
				loadImage('/assets/img/br.png'),
				loadImage('/assets/img/wb.png'),
				loadImage('/assets/img/wk.png'),
				loadImage('/assets/img/wn.png'),
				loadImage('/assets/img/wp.png'),
				loadImage('/assets/img/wq.png'),
				loadImage('/assets/img/wr.png')
			]).then(images => {
				// images.forEach(img => {
				// 	let imgElement = document.createElement('img')
				// 	imgElement.src = img.src
				// 	document.body.appendChild(imgElement)
				// })
				Cache.images[PieceType.BISHOP][Alliance.BLACK] = images[0]
				Cache.images[PieceType.KING  ][Alliance.BLACK] = images[1]
				Cache.images[PieceType.KNIGHT][Alliance.BLACK] = images[2]
				Cache.images[PieceType.PAWN  ][Alliance.BLACK] = images[3]
				Cache.images[PieceType.QUEEN ][Alliance.BLACK] = images[4]
				Cache.images[PieceType.ROOK  ][Alliance.BLACK] = images[5]
				Cache.images[PieceType.BISHOP][Alliance.WHITE] = images[6]
				Cache.images[PieceType.KING  ][Alliance.WHITE] = images[7]
				Cache.images[PieceType.KNIGHT][Alliance.WHITE] = images[8]
				Cache.images[PieceType.PAWN  ][Alliance.WHITE] = images[9]
				Cache.images[PieceType.QUEEN ][Alliance.WHITE] = images[10]
				Cache.images[PieceType.ROOK  ][Alliance.WHITE] = images[11]

				resolve()
			}).catch(err => {
				reject()
			})
		});
	},

	pieces: {
		[true]: {
			[PieceType.PAWN]: {
				[Alliance.WHITE]: fillPieces(Pawn, Alliance.WHITE, true),
				[Alliance.BLACK]: fillPieces(Pawn, Alliance.BLACK, true)
			},

			[PieceType.KNIGHT]: {
				[Alliance.WHITE]: fillPieces(Knight, Alliance.WHITE, true),
				[Alliance.BLACK]: fillPieces(Knight, Alliance.BLACK, true)
			},

			[PieceType.BISHOP]: {
				[Alliance.WHITE]: fillPieces(Bishop, Alliance.WHITE, true),
				[Alliance.BLACK]: fillPieces(Bishop, Alliance.BLACK, true)
			},

			[PieceType.ROOK]: {
				[Alliance.WHITE]: fillPieces(Rook, Alliance.WHITE, true),
				[Alliance.BLACK]: fillPieces(Rook, Alliance.BLACK, true)
			},

			[PieceType.QUEEN]: {
				[Alliance.WHITE]: fillPieces(Queen, Alliance.WHITE, true),
				[Alliance.BLACK]: fillPieces(Queen, Alliance.BLACK, true)
			},

			[PieceType.KING]: {
				[Alliance.WHITE]: fillPieces(King, Alliance.WHITE, true),
				[Alliance.BLACK]: fillPieces(King, Alliance.BLACK, true)
			}
		},

		[false]: {
			[PieceType.PAWN]: {
				[Alliance.WHITE]: fillPieces(Pawn, Alliance.WHITE, false),
				[Alliance.BLACK]: fillPieces(Pawn, Alliance.BLACK, false)
			},

			[PieceType.KNIGHT]: {
				[Alliance.WHITE]: fillPieces(Knight, Alliance.WHITE, false),
				[Alliance.BLACK]: fillPieces(Knight, Alliance.BLACK, false)
			},

			[PieceType.BISHOP]: {
				[Alliance.WHITE]: fillPieces(Bishop, Alliance.WHITE, false),
				[Alliance.BLACK]: fillPieces(Bishop, Alliance.BLACK, false)
			},

			[PieceType.ROOK]: {
				[Alliance.WHITE]: fillPieces(Rook, Alliance.WHITE, false),
				[Alliance.BLACK]: fillPieces(Rook, Alliance.BLACK, false)
			},

			[PieceType.QUEEN]: {
				[Alliance.WHITE]: fillPieces(Queen, Alliance.WHITE, false),
				[Alliance.BLACK]: fillPieces(Queen, Alliance.BLACK, false)
			},

			[PieceType.KING]: {
				[Alliance.WHITE]: fillPieces(King, Alliance.WHITE, false),
				[Alliance.BLACK]: fillPieces(King, Alliance.BLACK, false)
			}
		}
	},

	images: {
		[PieceType.PAWN]: {
			[Alliance.WHITE]: null,
			[Alliance.BLACK]: null
		},

		[PieceType.KNIGHT]: {
			[Alliance.WHITE]: null,
			[Alliance.BLACK]: null
		},

		[PieceType.BISHOP]: {
			[Alliance.WHITE]: null,
			[Alliance.BLACK]: null
		},

		[PieceType.ROOK]: {
			[Alliance.WHITE]: null,
			[Alliance.BLACK]: null
		},

		[PieceType.QUEEN]: {
			[Alliance.WHITE]: null,
			[Alliance.BLACK]: null
		},

		[PieceType.KING]: {
			[Alliance.WHITE]: null,
			[Alliance.BLACK]: null
		}
	}
}
