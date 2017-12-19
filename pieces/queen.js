const piecejs = require('./piece')
const typejs = require('./../type')
const alliancejs = require('./../alliance')

const Type = typejs.Type
const SlidingPiece = piecejs.SlidingPiece
const Alliance = alliancejs.Alliance

const Queen = {
	moveOffsets: [
		{row: -1, col: 1},
		{row: -1, col: -1},
		{row: 1, col: 1},
		{row: 1, col: -1},
		{row: 0, col: 1},
		{row: 1, col: 0},
		{row: 0, col: -1},
		{row: -1, col: 0}
	],

	create: function(row, col, alliance) {
		return SlidingPiece.create(row, col, Type.QUEEN, alliance)
	}
}

module.exports.Queen = Queen

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
