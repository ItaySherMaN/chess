import utils from './../utils.js'
import Alliance from './../alliance.js'
import EmptyTile from './tiles/empty-tile.js'
import OccupiedTile from './tiles/occupied-tile.js'
import Type from './../type.js'
import WhitePlayer from './../players/white-player.js'
import BlackPlayer from './../players/black-player.js'
import BoardBuilder from './board-builder.js'

import Pawn from './../pieces/pawn.js'
import Knight from './../pieces/knight.js'
import Bishop from './../pieces/bishop.js'
import Rook from './../pieces/rook.js'
import Queen from './../pieces/queen.js'
import King from './../pieces/king.js'

// Board.whiteView() =
// _______________________________
//  r | n | b | q | k | b | n | r
// ___|___|___|___|___|___|___|___
//  p | p | p | p | p | p | p | p
// ___|___|___|___|___|___|___|___
//    |   |   |   |   |   |   |
// ___|___|___|___|___|___|___|___
//    |   |   |   |   |   |   |
// ___|___|___|___|___|___|___|___
//    |   |   |   |   |   |   |
// ___|___|___|___|___|___|___|___
//    |   |   |   |   |   |   |
// ___|___|___|___|___|___|___|___
//  P | P | P | P | P | P | P | P
// ___|___|___|___|___|___|___|___
//  R | N | B | Q | K | B | N | R
// ___|___|___|___|___|___|___|___

const Board = {
	init(builder) {
		this.turn = builder.turn
		this.tiles = this.calculateTiles(builder)

		this.whitePieces = builder.whiteConfig
		this.blackPieces = builder.blackConfig

		this.whiteKing = this.findKing(this.whitePieces)
		this.blackKing = this.findKing(this.blackPieces)

		const whiteLegalMoves = this.calculateLegalMoves(this.whitePieces)
		const blackLegalMoves = this.calculateLegalMoves(this.blackPieces)

		this.whitePlayer = WhitePlayer.create(this, whiteLegalMoves, blackLegalMoves)
		this.blackPlayer = BlackPlayer.create(this, blackLegalMoves, whiteLegalMoves)
	},

	calculateTiles(builder) {
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
		for (let i in pieces) {
			const piece = pieces[i]
			if (piece.type === Type.KING) {
				return piece
			}
		}
	},

	calculateLegalMoves(pieces) {
		const legalMoves = []

		pieces.forEach(piece => {
			piece.pseudoLegalMoves(this).forEach(move => {
				legalMoves.push(move)
			})
		})

		return legalMoves
	},

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

const createStandardBoardLayout = function() {
	const builder = BoardBuilder.create(Alliance.WHITE)

	builder.addPiece(Rook.create(0, 0, Alliance.WHITE))
	builder.addPiece(Knight.create(0, 1, Alliance.WHITE))
	builder.addPiece(Bishop.create(0, 2, Alliance.WHITE))
	builder.addPiece(Queen.create(0, 3, Alliance.WHITE))
	builder.addPiece(King.create(0, 4, Alliance.WHITE))
	builder.addPiece(Bishop.create(0, 5, Alliance.WHITE))
	builder.addPiece(Knight.create(0, 6, Alliance.WHITE))
	builder.addPiece(Rook.create(0, 7, Alliance.WHITE))

	for (let i = 0; i < 8; i++) {
		builder.addPiece(Pawn.create(1, i, Alliance.WHITE))
		builder.addPiece(Pawn.create(6, i, Alliance.BLACK))
	}

	builder.addPiece(Rook.create(7, 0, Alliance.BLACK))
	builder.addPiece(Knight.create(7, 1, Alliance.BLACK))
	builder.addPiece(Bishop.create(7, 2, Alliance.BLACK))
	builder.addPiece(Queen.create(7, 3, Alliance.BLACK))
	builder.addPiece(King.create(7, 4, Alliance.BLACK))
	builder.addPiece(Bishop.create(7, 5, Alliance.BLACK))
	builder.addPiece(Knight.create(7, 6, Alliance.BLACK))
	builder.addPiece(Rook.create(7, 7, Alliance.BLACK))

	return builder.build()
}

export default Board

Board.standardBoardLayout = createStandardBoardLayout()
