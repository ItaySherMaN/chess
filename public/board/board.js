const Board = {
	init: function(builder, generateLegalMoves) {
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

	nextTurn: function() {
		return this.turn === Alliance.WHITE ? Alliance.BLACK : Alliance.WHITE
	},

	establishPseudoLegalMoves: function() {
		this.pseudoLegalMoves = []

		this.activePieces.forEach(piece => {
			piece.pseudoLegalMoves(this).forEach(move => {
				this.pseudoLegalMoves.push(move)
			})
		})
	},

	establishOpponentPseudoLegalMoves: function() {
		this.opponentPseudoLegalMoves = []

		this.opponentPieces.forEach(piece => {
			piece.pseudoLegalMoves(this).forEach(move => {
				this.opponentPseudoLegalMoves.push(move)
			})
		})
	},

	establishLegalMoves: function() {
		this.legalMoves = this.pseudoLegalMoves.filter(move => {
			if (move.isCastlingMove()) {
				return !move.execute(false).pseudoLegalMoves.some(newMove => {
					return move.pathVector.some(pos => {
						pos.row === newMove.destRow &&
						pos.col === newMove.destCol
					})
				})
			}
			return !move.execute(false).opponentInCheck
		})
	},

	figureIfInCheck: function() {
		this.inCheck = this.opponentPseudoLegalMoves.some(move => {
			return move.attackedPiece === this.king
		})
	},

	figureIfOpponentInCheck: function() {
		this.opponentInCheck = this.pseudoLegalMoves.some(move => {
			return move.attackedPiece === this.opponentKing
		})
	},

	figureIfCanMove: function() {
		this.canMove = this.legalMoves.length !== 0
	},

	figureIfInStalemate: function() {
		this.inStalemate = !this.canMove && !this.inCheck
	},

	figureIfInCheckmate: function() {
		this.inCheckmate = !this.canMove && this.inCheck
	},

	extractGrid: function(builder) {
		const grid = new Array(utils.NUM_TILES).fill(null)

		builder.whiteConfig.forEach(piece => {
			grid[utils.index(piece.row, piece.col)] = piece
		})

		builder.blackConfig.forEach(piece => {
			grid[utils.index(piece.row, piece.col)] = piece
		})

		return grid
	},

	establishPieces: function(builder) {
		if (this.turn === Alliance.WHITE) {
			this.activePieces = builder.whiteConfig
			this.opponentPieces = builder.blackConfig
		}
		else {
			this.activePieces = builder.blackConfig
			this.opponentPieces = builder.whiteConfig
		}
	},

	establishKing: function() {
		this.activePieces.forEach(piece => {
			if (piece.type === PieceType.KING) {
				this.king = piece
				return
			}
		})
	},

	establishOpponentKing: function() {
		this.opponentPieces.forEach(piece => {
			if (piece.type === PieceType.KING) {
				this.opponentKing = piece
				return
			}
		})
	},

	get: function(row, col) {
		return this.grid[utils.index(row, col)]
	},

	whiteViewToString: function() {
		let result = '_______________________________\n'

		for (let i = utils.NUM_ROWS - 1; i >= 0; i--) {
			for (let j = 0; j < utils.NUM_COLS; j++) {
				const piece = this.grid[utils.index(i, j)]

				result += ' ' + (piece !== null ? piece.toString() : ' ') + ' '

				if (j !== 7) {
					result += '|'
				}
			}

			result += '\n___|___|___|___|___|___|___|___\n'
		}

		return result
	},

	blackViewToString: function() {
		let result = '_______________________________\n'

		for (let i = 0; i < utils.NUM_ROWS; i++) {
			for (let j = utils.NUM_COLS - 1; j >= 0; j--) {
				const piece = this.grid[utils.index(i, j)]

				result += ' ' + (piece !== null ? piece.toString() : ' ') + ' '

				if (j !== 0) {
					result += '|'
				}
			}

			result += '\n___|___|___|___|___|___|___|___\n'
		}

		return result
	}
}
