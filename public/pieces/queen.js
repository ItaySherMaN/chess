import SlidingPiece from 'general-pieces/sliding-piece'
import Type from '../type'

const Queen = Object.create(SlidingPiece)

Queen.moveOffsets = [
	{row: 1, col: 0},
	{row: 1, col: 1},
	{row: 0, col: 1},
	{row: -1, col: 1},
	{row: -1, col: 0},
	{row: -1, col: -1},
	{row: 0, col: -1},
	{row: 1, col: -1}
]

Queen.create = function(row, col, alliance) {
	const obj = Object.create(this)
	this.__proto__.super.call(obj, row, col, Type.QUEEN, alliance)
	return obj
}

export default Queen

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
