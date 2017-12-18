const piecejs = require('./piece')
const typejs = require('./../type')
const alliancejs = require('./../alliance')

const Type = typejs.Type
const SteppingPiece = piecejs.Piece
const Alliance = alliancejs.Alliance

const King = {
	moveOffsets: [
		{row: 1, col: 0},
		{row: 1, col: 1},
		{row: 0, col: 1},
		{row: -1, col: 1},
		{row: -1, col: 0},
		{row: -1, col: -1},
		{row: 0, col: -1},
		{row: 1, col: -1}
	],

	toString: function() {
		return this.alliance === Alliance.WHITE ? Type.KING : Type.KING.toLowerCase()
	},

	create: function(row, col, alliance) {
		return SteppingPiece.create(row, col, alliance)
	}
}

module.exports.King = King
