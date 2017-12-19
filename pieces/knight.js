const piecejs = require('./piece')
const typejs = require('./../type')
const alliancejs = require('./../alliance')

const Type = typejs.Type
const SteppingPiece = piecejs.SteppingPiece
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
		const obj = Object.create(this)
		this.__proto__.super.call(obj, row, col, Type.KNIGHT, alliance)
		return obj
	}
}

Knight.__proto__ = SteppingPiece

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
