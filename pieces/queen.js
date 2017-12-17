const piecejs = require('./piece')
const typejs = require('./../type')
const bishopjs = require('./bishop')
const rookjs = require('./rook')

const Type = typejs.Type
const Piece = piecejs.Piece
const Bishop = bishopjs.Bishop
const Rook = rookjs.Rook

const Queen = {
	moveOffsets: Bishop.moveOffsets.concat(Rook.moveOffsets),

	create: function(index, alliance) {
		const obj = Piece.create(index, alliance)
		obj.type = Type.QUEEN
		return obj
	},

	pseudoLegalMoves: function(board) {
		return Piece.slidingPiecePseudoLegalMoves(board, this)
	}
}
