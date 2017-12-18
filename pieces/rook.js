const piecejs = require('./piece')
const typejs = require('./../type')
const alliancejs = require('./../alliance')

const Type = typejs.Type
const SlidingPiece = piecejs.SlidingPiece
const Alliance = alliancejs.Alliance

const Rook = {
	moveOffsets: [
		{row: 0, col: 1},
		{row: 1, col: 0},
		{row: 0, col: -1},
		{row: -1, col: 0}
	],

	create: function(row, col, alliance) {
		return SlidingPiece.create(row, col, alliance)
	},

	toString: function() {
		return this.alliance === Alliance.WHITE ? Type.ROOK : Type.ROOK.toLowerCase()
	}
}

module.exports.Rook = Rook

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
