const piecejs = require('./piece')
const typejs = require('./../type')
const movejs = require('./../board/move')
const utilsjs = require('./../utils')

const Type = typejs.Type
const SteppingPiece = piecejs.Piece
const RegularMove = movejs.RegularMove
const AttackingMove = movejs.AttackingMove

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
		const obj = SteppingPiece.create(row, col, alliance)
		obj.type = Type.KNIGHT
		return obj
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
