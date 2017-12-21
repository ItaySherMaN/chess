import SteppingPiece from './general-pieces/stepping-piece.js'
import Type from './../type.js'

const Knight = Object.create(SteppingPiece)

Knight.moveOffsets = [
	{row: 2, col: 1},
	{row: 2, col: -1},
	{row: 1, col: 2},
	{row: 1, col: -2},
	{row: -1, col: 2},
	{row: -1, col: -2},
	{row: -2, col: 1},
	{row: -2, col: -1}
]

Knight.create = function(row, col, alliance) {
	const obj = Object.create(this)
	this.__proto__.super.call(obj, row, col, Type.KNIGHT, alliance)
	return obj
}

export default Knight

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
