import SlidingPiece from './general-pieces/sliding-piece.js'
import Type from './../type.js'

const Bishop = {
	moveOffsets: [
		{row: -1, col: 1},
		{row: -1, col: -1},
		{row: 1, col: 1},
		{row: 1, col: -1}
	],

	init(row, col, alliance) {
		this.parent(row, col, Type.BISHOP, alliance)
	}
}

Bishop.extends(SlidingPiece)

export default Bishop

// const Bishop = Object.create(SlidingPiece)
//
// Bishop.moveOffsets = [
// 	{row: -1, col: 1},
// 	{row: -1, col: -1},
// 	{row: 1, col: 1},
// 	{row: 1, col: -1}
// ]
//
// Bishop.create = function(row, col, alliance) {
// 	const obj = Object.create(this)
// 	this.__proto__.super.call(obj, row, col, Type.BISHOP, alliance)
// 	return obj
// }
//
// export default Bishop

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
