const piecejs = require('./piece')
const typejs = require('./../type')

const Type = typejs.Type
const Piece = piecejs.Piece

const Rook = {
	moveOffsets: [
		{rowOffset: 0, colOffset: 1},
		{rowOffset: 1, colOffset: 0},
		{rowOffset: 0, colOffset: -1},
		{rowOffset: -1, colOffset: 0}
	],

	create: function(index, alliance) {
		const obj = Piece.create(index, alliance)
		obj.type = Type.ROOK
		return obj
	},

	pseudoLegalMoves: function(board) {
		return Piece.slidingPiecePseudoLegalMoves(board, this)
	}
}
