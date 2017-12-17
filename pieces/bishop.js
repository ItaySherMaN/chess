const piecejs = require('./piece')
const typejs = require('./../type')

const Type = typejs.Type
const Piece = piecejs.Piece

const Bishop = {
	moveOffsets: [
		{rowOffset: -1, colOffset: 1},
		{rowOffset: -1, colOffset: -1},
		{rowOffset: 1, colOffset: 1},
		{rowOffset: 1, colOffset: -1}
	],

	create: function(index, alliance) {
		const obj = Piece.create(index, alliance)
		obj.type = Type.BISHOP
		return obj
	},

	pseudoLegalMoves: function(board) {
		return Piece.slidingPiecePseudoLegalMoves(board, this)
	}
}

/*

X-----X-
-X---X--
--X-X---
---o----
--X-X---
-X---X--
X-----X-
-------X

*/
