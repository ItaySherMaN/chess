const piecejs = require('./piece')
const typejs = require('./../type')

const Type = typejs.Type
const Piece = piecejs.Piece
const SlidingPiece = piecejs.SlidingPiece

const Rook = {
	moveOffsets: [
		{row: 0, col: 1},
		{row: 1, col: 0},
		{row: 0, col: -1},
		{row: -1, col: 0}
	],

	create: function(row, col, alliance) {
		const obj = SlidingPiece.create(row, col, alliance)
		obj.type = Type.ROOK
		return obj
	},

	pseudoLegalMoves: function(board) {
		return this.slidingPiecePseudoLegalMoves(board)
	}
}

/*

--x-----
--x-----
xxoxxxxx
--x-----
--x-----
--x-----
--x-----
--x-----

*/
