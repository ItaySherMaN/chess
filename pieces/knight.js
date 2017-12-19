const piecejs = require('./piece')
const typejs = require('./../type')
const alliancejs = require('./../alliance')

const Type = typejs.Type
const SteppingPiece = piecejs.Piece
const Alliance = alliancejs.Alliance

const Knight = {
	moveOffsets: [
		{row: 2, col: 1},
		{row: 2, col: -1},
		{row: 1, col: 2},
		{row: 1, col: -2},
		{row: -1, col: 2},
		{row: -1, col: -2},
		{row: -2, col: 1},
		{row: -2, col: -1}
	],

	create: function(row, col, alliance) {
		return SteppingPiece.create(row, col, Type.KNIGHT, alliance)
	}
}

module.exports.Knight = Knight

/*

--------
--x-x---
-x---x--
---o----
-x---x--
--x-x---
--------
--------

*/
