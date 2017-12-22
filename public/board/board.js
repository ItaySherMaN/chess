import utils from './../utils.js'
import Alliance from './../alliance.js'
import EmptyTile from './tiles/empty-tile.js'
import OccupiedTile from './tiles/occupied-tile.js'
import PieceType from './../piece-type.js'
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

const Board = {
	init(builder, whitePlayer, blackPlayer) {
		this.turn = builder.turn
		this.tiles = this.extractTiles(builder)

		this.whitePlayer = whitePlayer
		this.blackPlayer = blackPlayer

		this.whitePieces = builder.whiteConfig
		this.blackPieces = builder.blackConfig

		this.whiteKing = this.findKing(this.whitePieces)
		this.blackKing = this.findKing(this.blackPieces)

		this.status = this.calculateBoardStatus()
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

		return builder.build()
	},

	calculateBoardStatus() {
		let inCheck = false

		if (this.turn === Alliance.WHITE) {
			const pseudoLegalMoves = this.blackPlayer.pseudoLegalMoves

			for (let i = 0; i < pseudoLegalMoves.length && !inCheck; i++) {
				const move = pseudoLegalMoves[i]

				if (move.destRow === this.whiteKing.row) {
					if (move.destCol === this.whiteKing.col) {
						inCheck = true
					}
				}
			}

			if (inCheck) {
				if (this.whitePlayer.canMove()) {
					return BoardStatus.WHITE_IN_CHECK
				}
				else {
					return BoardStatus.WHITE_IN_CHECKMATE
				}
			}
			else {
				if (!this.whitePlayer.canMove()) {
					return BoardStatus.STALEMATE
				}
			}

			return BoardStatus.ON_GOING
		}
		else {
			const pseudoLegalMoves = this.whitePlayer.pseudoLegalMoves

			for (let i = 0; i < pseudoLegalMoves.length && !inCheck; i++) {
				const move = pseudoLegalMoves[i]

				if (move.destRow === this.blackKing.row) {
					if (move.destCol === this.blackKing.col) {
						inCheck = true
					}
				}
			}

			if (inCheck) {
				if (this.blackPlayer.canMove()) {
					return BoardStatus.BLACK_IN_CHECK
				}
				else {
					return BoardStatus.BLACK_IN_CHECKMATE
				}
			}
			else {
				if (!this.blackPlayer.canMove()) {
					return BoardStatus.STALEMATE
				}
			}
			return BoardStatus.ON_GOING
		}
	}

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

	findKing(pieces) {
		for (let i = 0; i < pieces.length; i++) {
			const piece = pieces[i]

			if (piece.type === PieceType.KING) {
				return piece
			}
		}
	},

	// calculateLegalMoves(pieces) {
	// 	const legalMoves = []
    //
	// 	pieces.forEach(piece => {
	// 		piece.pseudoLegalMoves(this).forEach(move => {
	// 			legalMoves.push(move)
	// 		})
	// 	})
    //
	// 	return legalMoves
	// },

	get(row, col) {
		return this.tiles[utils.index(row, col)]
	},

	whiteViewToString() {
		let result = '_______________________________\n'

		const seperation = '\n___|___|___|___|___|___|___|___\n'

		let i, j

		for (i = 7; i >= 0; i--) {
			for (j = 0; j < 8; j++) {
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

		for (i = 0; i < 8; i++) {
			for (j = 7; j >= 0; j--) {
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
