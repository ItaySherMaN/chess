import utils from './../utils.js'
import Alliance from './../alliance.js'
import EmptyTile from './tiles/empty-tile.js'
import OccupiedTile from './tiles/occupied-tile.js'
import PieceType from './../pieces/piece-type.js'
import WhitePlayer from './../players/white-player.js'
import BlackPlayer from './../players/black-player.js'
import BoardBuilder from './board-builder.js'
import BoardStatus from './board-status.js'

import Pawn from './../pieces/pawn.js'
import Knight from './../pieces/knight.js'
import Bishop from './../pieces/bishop.js'
import Rook from './../pieces/rook.js'
import Queen from './../pieces/queen.js'
import King from './../pieces/king.js'

/*
Board.whiteViewToString() =

_______________________________
 r | n | b | q | k | b | n | r
___|___|___|___|___|___|___|___
 p | p | p | p | p | p | p | p
___|___|___|___|___|___|___|___
   |   |   |   |   |   |   |
___|___|___|___|___|___|___|___
   |   |   |   |   |   |   |
___|___|___|___|___|___|___|___
   |   |   |   |   |   |   |
___|___|___|___|___|___|___|___
   |   |   |   |   |   |   |
___|___|___|___|___|___|___|___
 P | P | P | P | P | P | P | P
___|___|___|___|___|___|___|___
 R | N | B | Q | K | B | N | R
___|___|___|___|___|___|___|___
*/

/*

every board must have:
	1. active pieces
	2. opponent pieces
	3. board tiles
	4. opponent pseudo legal moves
	5. status
*/

const Board = {
	init(builder, generateLegalMoves) {
		this.turn = builder.turn
		this.tiles = this.extractTiles(builder)

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

	createStandardBoardLayout() {
		const builder = BoardBuilder.create(Alliance.WHITE)

		builder.addPiece(Rook  .create(0, 0, Alliance.WHITE))
		builder.addPiece(Knight.create(0, 1, Alliance.WHITE))
		builder.addPiece(Bishop.create(0, 2, Alliance.WHITE))
		builder.addPiece(Queen .create(0, 3, Alliance.WHITE))
		builder.addPiece(King  .create(0, 4, Alliance.WHITE))
		builder.addPiece(Bishop.create(0, 5, Alliance.WHITE))
		builder.addPiece(Knight.create(0, 6, Alliance.WHITE))
		builder.addPiece(Rook  .create(0, 7, Alliance.WHITE))

		for (let i = 0; i < 8; i++) {
			builder.addPiece(Pawn.create(1, i, Alliance.WHITE))
			builder.addPiece(Pawn.create(6, i, Alliance.BLACK))
		}

		builder.addPiece(Rook  .create(7, 0, Alliance.BLACK))
		builder.addPiece(Knight.create(7, 1, Alliance.BLACK))
		builder.addPiece(Bishop.create(7, 2, Alliance.BLACK))
		builder.addPiece(Queen .create(7, 3, Alliance.BLACK))
		builder.addPiece(King  .create(7, 4, Alliance.BLACK))
		builder.addPiece(Bishop.create(7, 5, Alliance.BLACK))
		builder.addPiece(Knight.create(7, 6, Alliance.BLACK))
		builder.addPiece(Rook  .create(7, 7, Alliance.BLACK))

		return builder.build(true)
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

		this.opponentActivePieces.forEach(piece => {
			piece.pseudoLegalMoves(this).forEach(move => {
				this.opponentPseudoLegalMoves.push(move)
			})
		})
	},

	establishLegalMoves() {
		this.legalMoves = this.pseudoLegalMoves.filter(move => {
			// return !move.execute().opponentInCheck
			return true
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

	extractTiles(builder) {
		const tiles = new Array(utils.NUM_TILES)

		for (let i = 0; i < utils.NUM_TILES; i++) {
			tiles[i] = EmptyTile.emptyTiles[i]
		}

		builder.whiteConfig.forEach(piece => {
			const index = utils.index(piece.row, piece.col)
			tiles[index] = OccupiedTile.create(index, piece)
		})

		builder.blackConfig.forEach(piece => {
			const index = utils.index(piece.row, piece.col)
			tiles[index] = OccupiedTile.create(index, piece)
		})

		return tiles
	},

	establishPieces(builder) {
		if (this.turn === Alliance.WHITE) {
			this.activePieces = builder.whiteConfig
			this.opponentActivePieces = builder.blackConfig
		}
		else {
			this.activePieces = builder.blackConfig
			this.opponentActivePieces = builder.whiteConfig
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
		for (let i = 0; i < opponentActivePieces.length; i++) {
			const piece = pieces[i]

			if (piece.type === PieceType.KING) {
				this.oppnentKing = piece
				return
			}
		}
	},

	get(row, col) {
		return this.tiles[utils.index(row, col)]
	},

	whiteViewToString() {
		let result = '_______________________________\n'

		const seperation = '\n___|___|___|___|___|___|___|___\n'

		let i, j

		for (i = utils.NUM_ROWS - 1; i >= 0; i--) {
			for (j = 0; j < utils.NUM_COLS; j++) {
				result += ' ' + this.tiles[utils.index(i, j)].toString() + ' '

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
				result += ' ' + this.tiles[utils.index(i, j)].toString() + ' '

				if (j !== 0) {
					result += '|'
				}
			}

			result += seperation
		}

		return result
	}
}

export default Board

Board.standardBoardLayout = Board.createStandardBoardLayout()
