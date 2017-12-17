const piecejs = require('./piece')
const typejs = require('./../type')
const bishopjs = require('./bishop')
const rookjs = require('./rook')

const Type = typejs.Type
const Piece = piecejs.Piece
const SlidingPiece = piecejs.SlidingPiece
const Bishop = bishopjs.Bishop
const Rook = rookjs.Rook

const Queen = {
	moveOffsets: Bishop.moveOffsets.concat(Rook.moveOffsets),

	create: function(row, col, alliance) {
		const obj = SlidingPiece.create(row, col, alliance)
		obj.type = Type.QUEEN
		return obj
	},

	pseudoLegalMoves: function(board) {
		return this.slidingPiecePseudoLegalMoves(board)
	}
}

/*

x----x--
-x---x--
--x--x--
---x-x-x
----xxx-
xxxxxoxx
----xxx-
---x-x-x

*/
