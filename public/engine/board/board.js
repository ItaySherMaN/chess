const Board = {
	init: function(builder, generateLegalMoves) {
		this.turn = builder.turn
		this.enPassantPawn = builder.enPassantPawn
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
			this.figureIfInTie()
		}
		else {
			this.establishOpponentKing()
			this.figureIfOpponentInCheck()
		}
	},

	createMove: function(initialRow, initialCol, destRow, destCol) {
		return this.legalMoves.filter(move => {
			const piece = move.movedPiece

			return piece.row === initialRow
				&& piece.col === initialCol
				&& move.destRow === destRow
				&& move.destCol === destCol
		})[0]
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
				return move.execute(false).pseudoLegalMoves.every(threat => {
					return move.pathVector.every(pos => {
						return pos.row !== threat.destRow
							|| pos.col !== threat.destCol
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

	figureIfInTie: function() {
		// TODO: implement checking if tie

		// 1. Insufficient material for checkmate
		// 2. The same position appeared 3 times
		// 3. More than 30 moves have passed since
		//    one player was left with only a king

		this.inTie = false
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
