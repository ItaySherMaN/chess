const piecejs = require('./piece')
const typejs = require('./../type')
const alliancejs = require('./../alliance')

const Type = typejs.Type
const SlidingPiece = piecejs.SlidingPiece
const Alliance = alliancejs.Alliance

const Bishop = {
	moveOffsets: [
		{row: -1, col: 1},
		{row: -1, col: -1},
		{row: 1, col: 1},
		{row: 1, col: -1}
	],

	toString: function() {
		return this.alliance === Alliance.WHITE ? Type.BISHOP : Type.BISHOP.toLowerCase()
	},

	create: function(row, col, alliance) {
		return SlidingPiece.create(row, col, alliance)
	}
}

module.exports.Bishop = Bishop

/*

x-----x-
-x---x--
--x-x---
---o----
--x-x---
-x---x--
x-----x-
-------x

*/
