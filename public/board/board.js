const Board = {
	init(builder, generateLegalMoves) {
		this.turn = builder.turn
		this.grid = this.extractGrid(builder)

		this.establishPieces(builder)
		this.establishPseudoLegalMoves()

		if (generateLegalMoves) {
			this.establishKing()

			this.establishOpponentPseudoLegalMoves()
			this.establishLegalMoves()

			this.figureIfInCheck()
			this.figureIfCanMove()
			this.figureIfInCheckmate()
			this.figureIfInStalemate()
		}
		else {
			this.establishOpponentKing()
			this.figureIfOpponentInCheck()
		}
	},

	nextTurn() {
		return this.turn === Alliance.WHITE ? Alliance.BLACK : Alliance.WHITE
	},

	establishPseudoLegalMoves() {
		this.pseudoLegalMoves = []

		this.activePieces.forEach(piece => {
			piece.pseudoLegalMoves(this).forEach(move => {
				this.pseudoLegalMoves.push(move)
			})
		})
	},

	establishOpponentPseudoLegalMoves() {
		this.opponentPseudoLegalMoves = []

		this.opponentPieces.forEach(piece => {
			piece.pseudoLegalMoves(this).forEach(move => {
				this.opponentPseudoLegalMoves.push(move)
			})
		})
	},

	establishLegalMoves() {
		this.legalMoves = this.pseudoLegalMoves.filter(move => {
			console.log(move.execute().whiteViewToString())
			return !move.execute().opponentInCheck
		})
	},

	figureIfInCheck() {
		this.inCheck = false

		for (let i = 0; i < this.opponentPseudoLegalMoves.length; i++) {
			const move = this.opponentPseudoLegalMoves[i]

			if (move.destRow === this.king.row) {
				if (move.destCol === this.king.col) {
					this.inCheck = true
					return
				}
			}
		}
	},

	figureIfOpponentInCheck() {
		this.opponentInCheck = false

		for (let i = 0; i < this.pseudoLegalMoves.length; i++) {
			const move = this.pseudoLegalMoves[i]

			if (move.destRow === this.opponentKing.row) {
				if (move.destCol === this.opponentKing.col) {
					this.opponentInCheck = true
					return
				}
			}
		}
	},

	figureIfCanMove() {
		this.canMove = this.legalMoves.length !== 0
	},

	figureIfInStalemate() {
		this.inStalemate = !this.canMove && !this.inCheck
	},

	figureIfInCheckmate() {
		this.inCheckmate = !this.canMove && this.inCheck
	},

	extractGrid(builder) {
		const grid = new Array(utils.NUM_TILES)

		builder.whiteConfig.forEach(piece => {
			grid[utils.index(piece.row, piece.col)] = piece
		})

		builder.blackConfig.forEach(piece => {
			grid[utils.index(piece.row, piece.col)] = piece
		})

		return grid
	},

	establishPieces(builder) {
		if (this.turn === Alliance.WHITE) {
			this.activePieces = builder.whiteConfig
			this.opponentPieces = builder.blackConfig
		}
		else {
			this.activePieces = builder.blackConfig
			this.opponentPieces = builder.whiteConfig
		}
	},

	establishKing() {
		for (let i = 0; i < this.activePieces.length; i++) {
			const piece = this.activePieces[i]

			if (piece.type === PieceType.KING) {
				this.king = piece
				return
			}
		}
	},

	establishOpponentKing() {
		for (let i = 0; i < this.opponentPieces.length; i++) {
			const piece = this.opponentPieces[i]

			if (piece.type === PieceType.KING) {
				this.opponentKing = piece
				return
			}
		}
	},

	get(row, col) {
		return this.grid[utils.index(row, col)]
	},

	whiteViewToString() {
		let result = '_______________________________\n'

		const seperation = '\n___|___|___|___|___|___|___|___\n'

		let i, j

		for (i = utils.NUM_ROWS - 1; i >= 0; i--) {
			for (j = 0; j < utils.NUM_COLS; j++) {
				const piece = this.grid[utils.index(i, j)]

				if (piece) {
					result += ' ' + piece.toString() + ' '
				}
				else {
					result += '   '
				}

				if (j !== 7) {
					result += '|'
				}
			}

			result += seperation
		}

		return result
	},

	blackViewToString() {
		let result = '_______________________________\n'

		const seperation = '\n___|___|___|___|___|___|___|___\n'

		let i, j

		for (i = 0; i < utils.NUM_ROWS; i++) {
			for (j = utils.NUM_COLS - 1; j >= 0; j--) {
				const piece = this.grid[utils.index(i, j)]

				if (piece) {
					result += ' ' + piece.toString() + ' '
				}
				else {
					result += '   '
				}

				if (j !== 0) {
					result += '|'
				}
			}

			result += seperation
		}

		return result
	}
}
