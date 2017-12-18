const alliancejs = require('./../alliance')
const utilsjs = require('./../utils')
const tilejs = require('./tile')
const pawnjs = require('./../pieces/pawn')
const knightjs = require('./../pieces/knight')
const bishopjs = require('./../pieces/bishop')
const rookjs = require('./../pieces/rook')
const queenjs = require('./../pieces/queen')
const kingjs = require('./../pieces/king')

const Alliance = alliancejs.Alliance
const Tile = tilejs.Tile
const Pawn = pawnjs.Pawn
const Knight = knightjs.Knight
const Bishop = bishopjs.Bishop
const Rook = rookjs.Rook
const Queen = queenjs.Queen
const King = kingjs.King

const Board = {
	create: function(builder) {
		const obj = Object.create(this)

		obj.turn = builder.turn
		obj.tiles = (function(builder) {
			const tiles = []

			for (let i = 0; i < utilsjs.NUM_TILES; i++) {
				tiles.push(Tile.create(i, builder.config[i]))
			}

			return tiles
		})(builder)

		return obj
	},

	play: function(move) {
		const newBoard = this.create()

		// TODO: fill function

		return newBoard
	},

	get: function(row, col) {
		return this.tiles[utilsjs.index(row, col)]
	},

	print: function() {
		let msg = ''

		for (let i = 0; i < this.tiles.length; i++) {
			const tile = this.tiles[i]

			if (tile.empty) {
				msg += ' '
			}
			else {
				msg += tile.piece.type
			}

			if (i % 8 === 7) {
				console.log(msg);
				msg = ''
			}
		}
	}
}

const BoardBuilder = {
	create: function() {
		const obj = Object.create(this)
		obj.config = new Array(utilsjs.NUM_TILES).fill(null)
		obj.turn = Alliance.WHITE
		return obj
	},

	addPiece: function(piece) {
		this.config[utilsjs.index(piece.row, piece.col)] = piece
	},

	build: function() {
		return Board.create(this)
	}
}

Board.standardBoardLayout = (function() {
	const builder = BoardBuilder.create()

	builder.turn = Alliance.WHITE

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
