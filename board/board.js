const alliancejs = require('./../alliance')
const utilsjs = require('./../utils')
const tilejs = require('./tile')
const pawnjs = require('./../pieces/pawn')
const knightjs = require('./../pieces/knight')
const bishopjs = require('./../pieces/bishop')
const rookjs = require('./../pieces/rook')
const queenjs = require('./../pieces/queen')
const kingjs = require('./../pieces/king')
const typejs = require('./../type')
const playerjs = require('./../players/player')
const whitePlayerjs = require('./../players/whitePlayer')
const blackPlayerjs = require('./../players/blackPlayer')

const Alliance = alliancejs.Alliance
const Tile = tilejs.Tile
const EmptyTile = tilejs.EmptyTile
const Pawn = pawnjs.Pawn
const Knight = knightjs.Knight
const Bishop = bishopjs.Bishop
const Rook = rookjs.Rook
const Queen = queenjs.Queen
const King = kingjs.King
const Type = typejs.Type
const Player = playerjs.Player
const WhitePlayer = whitePlayerjs.WhitePlayer
const BlackPlayer = blackPlayerjs.BlackPlayer

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
	create: function(builder) {
		const obj = Object.create(this)

		obj.turn = builder.turn
		obj.tiles = this.calculateTiles(builder)

		obj.whitePieces = builder.whiteConfig
		obj.blackPieces = builder.blackConfig

		obj.whiteKing = this.findKing(obj.whitePieces)
		obj.blackKing = this.findKing(obj.blackPieces)

		const whiteLegalMoves = obj.calculateLegalMoves(obj.whitePieces)
		const blackLegalMoves = obj.calculateLegalMoves(obj.blackPieces)

		obj.whitePlayer = WhitePlayer.create(obj, whiteLegalMoves, blackLegalMoves)
		obj.blackPlayer = BlackPlayer.create(obj, blackLegalMoves, whiteLegalMoves)

		return obj
	},

	calculateTiles: function(builder) {
		const tiles = new Array(utilsjs.NUM_TILES)

		for (let i = 0; i < utilsjs.NUM_TILES; i++) {
			tiles[i] = Tile.create(i, null)
		}

		builder.whiteConfig.forEach(piece => {
			const index = utilsjs.index(piece.row, piece.col)
			tiles[index] = Tile.create(index, piece)
		})

		builder.blackConfig.forEach(piece => {
			const index = utilsjs.index(piece.row, piece.col)
			tiles[index] = Tile.create(index, piece)
		})

		return tiles
	},

	findKing: function(pieces) {
		for (let i in pieces) {
			if (pieces[i].type === Type.KING) {
				return pieces[i]
			}
		}
	},

	calculateLegalMoves: function(pieces) {
		const legalMoves = []

		pieces.forEach(piece => {
			piece.pseudoLegalMoves(this).forEach(move => {
				legalMoves.push(move)
			})
		})

		return legalMoves
	},

	play: function(move) {
		const newBoard = this.create()

		// TODO: fill function

		return newBoard
	},

	get: function(row, col) {
		return this.tiles[utilsjs.index(row, col)]
	},

	whiteView: function() {
		let result = '_______________________________\n'

		const seperation = '\n___|___|___|___|___|___|___|___\n'

		let i, j

		for (i = 7; i >= 0; i--) {
			for (j = 0; j < 8; j++) {
				result += ' ' + this.tiles[utilsjs.index(i, j)].toString() + ' '

				if (j !== 7) {
					result += '|'
				}
			}

			result += seperation
		}

		return result
	},

	blackView: function() {
		let result = '_______________________________\n'

		const seperation = '\n___|___|___|___|___|___|___|___\n'

		let i, j

		for (i = 0; i < 8; i++) {
			for (j = 7; j >= 0; j--) {
				result += ' ' + this.tiles[utilsjs.index(i, j)].toString() + ' '

				if (j !== 0) {
					result += '|'
				}
			}

			result += seperation
		}

		return result
	}
}

const BoardBuilder = {
	create: function(startTurn) {
		const obj = Object.create(this)

		obj.whiteConfig = []
		obj.blackConfig = []
		obj.turn = startTurn

		return obj
	},

	addPiece: function(piece) {
		if (piece.alliance === Alliance.WHITE) {
			this.whiteConfig.push(piece)
		}
		else {
			this.blackConfig.push(piece)
		}
	},

	build: function() {
		return Board.create(this)
	}
}

Board.standardBoardLayout = (function() {
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
})()

module.exports.Board = Board
module.exports.BoardBuilder = BoardBuilder
